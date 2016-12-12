import { createSelector } from 'reselect';
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
        debatePage: Object.assign({},
          initialDebatePage, // this is so that the methods are not lost
          state,
          { editable: action.payload })
      });

    case claim.ActionTypes.TOGGLE_ALL_REBUTTALS:
      return Object.assign({}, state, {
        debatePage: Object.assign({}, initialDebatePage,
          state,
          { expanded: action.payload })
      });

    case contact.ActionTypes.LOAD:
      return Object.assign({}, state, {
        msg: 'Loading contacts ...'
      });

    case contact.ActionTypes.UPDATE_CONTACT_SUCCESS:
      return Object.assign({}, state, {
        msg: 'Saved ' + action.payload.name
      });

    default:
      return state;
  }
}

export const getShowSidenav = (state: Layout) => state.booksPage.showSidenav;

export const getDebatePageState = (state: Layout) => state.debatePage;

export const getMsg = (state: Layout) => state.msg;
