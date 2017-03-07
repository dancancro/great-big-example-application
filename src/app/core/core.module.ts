// From Style guide item 4-11
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-11
// which is newer than
// https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module

import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {
  NavigatorModule,
  bcNavComponents
} from './navigator/navigator.module';
import { reducer } from './store';
import { schema } from './store/db';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPage } from './not-found/not-found.page';
import { RioAboutPage } from './about/about.page';
import { TitleComponent } from './title/title.component';
import { routing } from './core.routing';

// module
import { PlatformDirective } from './platform/platform.directive';
import { CORE_PROVIDERS } from './services/index';
import { Config } from './utils/index';
import { AuthModule } from './auth/auth.module';

interface ICoreModuleOptions {
  window?: any;
  console?: any;
}

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */


const store = StoreModule.provideStore(reducer);

@NgModule({
  imports: [
    CommonModule,
    //    MaterialModule.forRoot(),
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    store,

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
    DBModule.provideDB(schema),
    NavigatorModule,
    SharedModule,
    AuthModule,
    routing
  ],
  declarations: [
    PlatformDirective,
    NotFoundPage,
    RioAboutPage,
    TitleComponent
  ],
  exports: [
    ...bcNavComponents,
    TitleComponent,
    NotFoundPage,
    RioAboutPage,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    PlatformDirective
  ],
  providers: [
    CORE_PROVIDERS
  ]

})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and ConsoleService per platform
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: configuredProviders
    };
  }
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
