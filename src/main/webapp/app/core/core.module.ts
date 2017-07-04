import { NgModule, ApplicationRef, Optional, SkipSelf } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateParser, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader, } from '@ngx-translate/http-loader';
import { translatePartialLoader, missingTranslationHandler } from 'ng-jhipster';
import { JhiConfigService } from 'ng-jhipster/src/config.service';
import { Http } from '@angular/http';

import { NgaModule } from '../theme/nga.module';
import { reducer } from './store';

/**
 * Import ngrx
 */
import { compose } from '@ngrx/core/compose';
import { Store, StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterStoreModule } from '@ngrx/router-store';
import { DBModule } from '@ngrx/db';

/**
 * Import toplevel component/providers/directives/pipes
 */
import { GreatBigExampleApplicationSharedModule } from '../shared/shared.module';
import { schema } from './store/db';
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
function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        if (action.type === 'SET_ROOT_STATE') {
            return action.payload;
        }
        return reducer(state, action);
    };
}

const rootReducer = compose(stateSetter, combineReducers)({
    reducer
});
// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: Http) {
//     return new TranslateHttpLoader(http);
// }
const imports = [
    // BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // HttpModule,
    CommonModule,
    RouterModule,
    GreatBigExampleApplicationSharedModule,
    MaterialModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    FlexLayoutModule,
    // TranslateModule.forRoot({
    //     loader: {
    //         provide: TranslateLoader,
    //         useFactory: HttpLoaderFactory,
    //         deps: [Http]
    //     },
    // }),

    // TranslateModule.forRoot({
    //     loader: {
    //         provide: TranslateLoader,
    //         useFactory: translatePartialLoader,
    //         deps: [Http]
    //     },
    //     missingTranslationHandler: {
    //         provide: MissingTranslationHandler,
    //         useFactory: missingTranslationHandler,
    //         deps: [JhiConfigService]
    //     }
    // }),

    // StoreLogMonitorModule,

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    DBModule.provideDB(schema)
];

// Enable HMR and ngrx/devtools in hot reload mode
if (process.env === 'dev') {
    imports.push(...[
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: 'right'
            })
        }),
        StoreLogMonitorModule,
    ]);
}

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
