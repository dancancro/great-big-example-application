import { NgModule, ApplicationRef, Optional, SkipSelf } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateParser, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader, } from '@ngx-translate/http-loader';
import { translatePartialLoader, missingTranslationHandler } from 'ng-jhipster';
import { Http } from '@angular/http';

import { NgaModule } from '../shared/nga.module';

/**
 * Import ngrx
 */
import { Store, StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
// import { RouterStoreModule } from '@ngrx/router-store';

/**
 * Import toplevel component/providers/directives/pipes
 */
import { GreatBigExampleApplicationSharedModule } from '../shared/shared.module';
import { RESTService } from './services/rest.service';
import { SocketService } from './services/socket.service';
import { UserService } from './services/user.service';
import { customHttpProvider } from '../blocks/interceptor/http.provider';

import { AppState, InternalStateType } from '../app.service';
import { GlobalState } from '../global.state';

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
];

@NgModule({
    imports,
    declarations: [
    ],
    providers: [
        RESTService,
        SocketService,
        UserService,
        customHttpProvider(), // expose our Services and Providers into Angular's dependency injection
        // APP_PROVIDERS
    ]
})

export class CoreModule {
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
