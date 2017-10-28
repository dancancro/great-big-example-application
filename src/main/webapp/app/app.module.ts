import './vendor';
import './rxjs-imports'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';
import { AngularFireOfflineModule } from 'angularfire2-offline';

import { DBModule } from '@ngrx/db';
import { GreatBigExampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { GreatBigExampleApplicationAdminModule } from './admin/admin.module';
import { GreatBigExampleApplicationAccountModule } from './account/account.module';
import { GreatBigExampleApplicationEntityModule } from './entities/entity.module';
import { GreatBigExampleApplicationHomeModule } from './features/home/home.module';
// import { StoreLogMonitorModule } from '@ngrx/store-log-monitor';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import {
    StoreRouterConnectingModule,
    RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { customHttpProvider } from './core/interceptor/http.provider';
import { PaginationConfig } from './core/config/uib-pagination.config';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { AppConfig } from './app.config';
import { AppRouting } from './app.routing';
import { MealsModule } from './features/meals/meals.module'; // for the timer
import { LayoutsModule } from './layouts/layouts.module';
import { schema } from './core/store/db';

import { reducers, metaReducers, developmentReducerFactory } from './core/store';

// jhipster-needle-angular-add-module-import JHipster will add new module here
/** TODO: remove when work-around is not needed*/
import 'hammerjs';

import {
    JhiMainComponent,
    // LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

const imports = [
    BrowserModule,
    AppRouting,
    // LayoutRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
    GreatBigExampleApplicationSharedModule,
    GreatBigExampleApplicationAdminModule,
    GreatBigExampleApplicationAccountModule,
    GreatBigExampleApplicationEntityModule,
    GreatBigExampleApplicationHomeModule,
    FeaturesModule,
    AngularFireOfflineModule,
    CoreModule.forRoot(),
    TranslateModule.forRoot(),
    MealsModule,
    LayoutsModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreModule.provideStore(reducer), //  <-- old way
    // StoreModule.forRoot(reducers, {
    //     reducerFactory: (process.env.NODE_ENV === 'dev') ? developmentReducerFactory : undefined
    // }),

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
    // There is a fix in the works for a performanc problem when
    // using devtools and router-store together
    // process.env.NODE_ENV === 'dev' ? StoreDevtoolsModule.instrument() : [],
    // StoreDevtoolsModule.instrument(),   // This really slows it down
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    StoreRouterConnectingModule,

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
    // StoreDevtoolsModule.instrumentOnlyWithExtension(), // <-- old way

    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    DBModule.provideDB(schema)
    // jhipster-needle-angular-add-module JHipster will add new module here
];

// Enable HMR and ngrx/devtools in hot reload mode
// if (process.env.NODE_ENV === 'dev') {
//     imports.push(...[
//         StoreDevtoolsModule.instrument({
//             monitor: useLogMonitor({
//                 visible: false,
//                 position: 'right'
//             }),
//             maxAge: 25 //  Retains last 25 states
//         }),
//         StoreLogMonitorModule,
//     ]);
// }

@NgModule({
    imports: [imports],
    declarations: [
    ],
    providers: [
        AppConfig,
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [JhiMainComponent]
})
export class GreatBigExampleApplicationAppModule { }
