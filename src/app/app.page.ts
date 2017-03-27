import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './core/store/';
import { slices } from './core/store/util';
import { initialSession } from './core/store/session/session.model';
import * as SliceActions from './core/store/slice/slice.actions';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.page.css'],
  templateUrl: './app.page.html'
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
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.hasError$ = this.store.select(fromRoot.hasError);
    this.isLoading$ = this.store.select(fromRoot.isLoading);
    this.firstName$ = this.store.select(fromRoot.getFirstName);
    this.lastName$ = this.store.select(fromRoot.getLastName);
    this.loggedIn$ = this.store.select(fromRoot.loggedIn);
    this.loggedOut$ = this.store.select(fromRoot.loggedOut);
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['nav', 'showSidenav'], false));
  }

  openSidenav() {
    this.store.dispatch(new SliceActions.Update(slices.LAYOUT, ['nav', 'showSidenav'], true));
  }

  loginUser(credentials) {
    this.store.dispatch(new SliceActions.Load(slices.SESSION, credentials));
  }

  logoutUser() {
    this.store.dispatch(new SliceActions.Update(slices.SESSION, [], (state) => initialSession()));
  };
}
