import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import * as layout from './layout.actions';
import * as contact from '../contact/contact.actions';
import * as claim from '../claim/claim.actions';
import { Layout, initialLayout, DebatePageLayout, initialDebatePage } from './layout.model';

export function reducer(state = initialLayout, action: layout.Actions |
  contact.Actions | claim.Actions): Layout {
  switch (action.type) {
    case layout.ActionTypes.CLOSE_SIDENAV:
      return Object.assign({}, state, { booksPage: { showSidenav: false } });

    case layout.ActionTypes.OPEN_SIDENAV:
      return Object.assign({}, state, { booksPage: { showSidenav: true } });

    case claim.ActionTypes.TOGGLE_EDITABLE:
      return Object.assign({}, state, {
        debatePage: Object.assign({}, initialDebatePage, { editable: action.payload })
      });

    case claim.ActionTypes.TOGGLE_EXPANDED:
      return Object.assign({}, state, {
        debatePage: Object.assign({}, initialDebatePage, { expanded: action.payload })
      });

    case contact.ActionTypes.LOAD:
      return Object.assign({}, state, {
        msg: 'Loading contacts ...'
      });

    case layout.ActionTypes.SET_MESSAGE:
      return Object.assign({}, state, {
        msg: action.payload
      });

    case contact.ActionTypes.UPDATE_CONTACT_SUCCESS:
      return Object.assign({}, state, {
        msg: 'Saved ' + this.contact.name
      });

    default:
      return state;
  }
}

export function getShowSidenav(state$: Observable<Layout>): Observable<boolean> {
  return state$.select(state => state.booksPage.showSidenav);
}

export function getDebatePageState(state$: Observable<Layout>): Observable<DebatePageLayout> {
  return state$.select(state => state.debatePage);
}

export function getMsg(state$: Observable<Layout>): Observable<string> {
  return state$.select(state => state.msg);
}
