import { ApplicationRef, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgaModule } from '../shared/nga.module';
import { PushNotificationsModule } from 'angular2-notifications';
import { AngularFireModule } from 'angularfire2';
/**
 * Import ngrx
 */
import { Store } from '@ngrx/store';
// import { RouterStoreModule } from '@ngrx/router-store';
/**
 * Import toplevel component/providers/directives/pipes
 */
import { GreatBigExampleApplicationSharedModule } from '../shared/shared.module';
import { RESTService } from './services/rest.service';
import { SocketService } from './services/socket.service';
import { UserService } from './services/user.service';
import { customHttpProvider } from '../core/interceptor/http.provider';

import { firebaseConfig } from './firebase-config';
import { ApiService } from './api/api.service';
import { GlobalEventsService } from './global-events/global-events.service';
import { StatusBarService } from '../layouts/status-bar/status-bar.service';

// Application wide providers
// const APP_PROVIDERS = [
//     AppState,
//     GlobalState
// ];
// Reset the root state for HMR
// function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
//     return function (state, action) {
//         if (action.type === 'SET_ROOT_STATE') {
//             return action.payload;
//         }
//         return reducer(state, action);
//     };
// }

// const rootReducer = compose(stateSetter, combineReducers)({
//     reducer
// });
// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: Http) {
//     return new TranslateHttpLoader(http);
// }
const imports = [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    GreatBigExampleApplicationSharedModule,
    MaterialModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    FlexLayoutModule,

    /**
     * from meals
     */
    AngularFireModule.initializeApp(firebaseConfig),
    CommonModule,
    PushNotificationsModule,
    RouterModule,
];

@NgModule({
    imports,
    declarations: [
    ],
    providers: [
    ]
})

export class CoreModule {
    /**
     * The root {@link AppModule} imports the {@link CoreModule} and adds the `providers` to the {@link AppModule}
     * providers. Recommended in the
     * [Angular 2 docs - CoreModule.forRoot](https://angular.io/docs/ts/latest/guide/ngmodule.html#core-for-root)
     */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                RESTService,
                SocketService,
                UserService,
                customHttpProvider(), // expose our Services and Providers into Angular's dependency injection
                // APP_PROVIDERS
                ApiService,
                GlobalEventsService,
                StatusBarService,
                { provide: 'Document', useValue: document },
                { provide: 'Window', useValue: window }
            ]
        };
    }
    /**
     * Prevent reimport of CoreModule
     * [STYLE 04-11](https://angular.io/styleguide#04-12)
     * @param parentModule will be `null` if {@link CoreModule} is not reimported by another module,
     * otherwise it will throw an error.
     * @see [Angular 2 docs - Prevent reimport of the CoreModule](https://angular.io/docs/ts/latest/guide/ngmodule.html#prevent-reimport)
     */
    constructor( @Optional() @SkipSelf() parentModule: CoreModule,
        public appRef: ApplicationRef,
        private store: Store<any>) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    hmrOnInit(store) {
        if (!store || !store.rootState) {
            return;
        }

        // restore state
        if (store.rootState) {
            this.store.dispatch({
                type: 'SET_ROOT_STATE',
                payload: store.rootState
            });
        }

        // restore input values
        if ('restoreInputValues' in store) { store.restoreInputValues(); }
        this.appRef.tick();
        Object.keys(store).forEach((prop) => delete store[prop]);
    }
    hmrOnDestroy(store) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        this.store.subscribe((s) => store.rootState = s);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
