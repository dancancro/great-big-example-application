import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './core/store/';
import * as layout from './core/store/layout/layout.actions';
import * as sessionActions from './core/store/session/session.actions';


@Component({
  selector: 'my-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [ ],
  templateUrl: 'app.page.html'
})
export class AppPage {
  showSidenav$: Observable<boolean>;
  subtitle = '(Alpha)';

  hasError$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  firstName$: Observable<string>;
  lastName$: Observable<string>;
  loggedIn$: Observable<boolean>;
  loggedOut$: Observable<boolean>;
  

  constructor(private store: Store<fromRoot.RootState>) {
    /**
     * Selectors can be applied with the `let` operator which passes the source
     * observable to the provided function.
     *
     * More on `let`: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#let
     * More on selectors: https://gist.github.com/btroncone/a6e4347326749f938510#extracting-selectors-for-reuse
     */
    this.showSidenav$ = this.store.let(fromRoot.getShowSidenav);
    this.hasError$ = this.store.let(fromRoot.hasError);
    this.isLoading$ = this.store.let(fromRoot.isLoading);
    this.firstName$ = this.store.let(fromRoot.getFirstName);
    this.lastName$ = this.store.let(fromRoot.getLastName);
    this.loggedIn$ = this.store.let(fromRoot.loggedIn);
    this.loggedOut$ = this.store.let(fromRoot.loggedOut);
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our 
     * application.
     */
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }


  loginUser(credentials) {
    console.log('logging in' + JSON.stringify(credentials))
    this.store.dispatch(new sessionActions.LoginUserAction(credentials));
  }

  logoutUser() {
    this.store.dispatch(new sessionActions.LogoutUserAction());
  };
}
