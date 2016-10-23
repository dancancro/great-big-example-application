import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import * as layout from './layout.actions';
import { Layout, initialLayout } from './layout.model';

export function reducer(state = initialLayout, action: layout.Actions): Layout {
  switch (action.type) {
    case layout.ActionTypes.CLOSE_SIDENAV:
      return Object.assign({}, state, { booksPage: {showSidenav: false}});

    case layout.ActionTypes.OPEN_SIDENAV:
      return Object.assign({}, state, { booksPage: {showSidenav: true}});

    case layout.ActionTypes.TOGGLE_EDITABLE:
      return Object.assign({}, state, {
        debatePage: {editable: !state.debatePage.editable}
      });

    case layout.ActionTypes.TOGGLE_EXPANDED:
      return Object.assign({}, state, {
        debatePage: {editable: !state.debatePage.expanded}
      });

    default:
      return state;
  }
}

export function getShowSidenav(state$: Observable<Layout>) {
  return state$.select(state => state.booksPage.showSidenav);
}

export function getDebatePageState(state$: Observable<Layout>) {
  return state$.select(state => state.debatePage);
}
