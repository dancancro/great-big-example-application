import { createSelector } from 'reselect';
import * as layoutActions from './layout.actions';
import * as contactActions from '../contact/contact.actions';
import * as claimActions from '../claim/claim.actions';
import { Layout, initialLayout, BerniePageLayout, initialBerniePage } from './layout.model';

export function reducer(state: Layout = initialLayout({}, 'Layout', layoutActions, initialLayout), action: layoutActions.Actions | contactActions.Actions | claimActions.Actions): Layout {

  // console.log(JSON.stringify(action))


  switch (action.type) {
    case state.actionTypes.CloseSidenav:
      return Object.assign({}, state, { booksPage: { showSidenav: false } });

    case state.actionTypes.OpenSidenav:
      return Object.assign({}, state, { booksPage: { showSidenav: true } });

    case state.actionTypes.SearchForHero:
      return Object.assign({}, state, {
        heroesDashboardPage: Object.assign({},
          state.heroesDashboardPage,
          { heroSearchTerm: (<any>action).payload.term })
      });

    case state.actionTypes.ToggleEditable:
      return Object.assign({}, state, {
        berniePage: Object.assign({},
          initialBerniePage, // this is so that the methods are not lost
          state,
          { editable: (<any>action).payload })
      });

    case state.actionTypes.ToggleAllRebuttals:
      return Object.assign({}, state, {
        berniePage: Object.assign({}, initialBerniePage,
          state,
          { expanded: (<any>action).payload })
      });

    case state.actionTypes.Load:
      return Object.assign({}, state, {
        msg: 'Loading contacts ...'
      });

    case state.actionTypes.UpdateSuccess:
      return Object.assign({}, state, {
        msg: 'Saved ' + (<any>action).payload.name
      });

    default:
      return state;
  }
}

export const getShowSidenav = (state: Layout) => state.booksPage.showSidenav;

export const getBerniePageState = (state: Layout) => state.berniePage;

export const getMsg = (state: Layout) => state.msg;

export const getHeroSearchTerm = (state: Layout) => state.heroesDashboardPage.heroSearchTerm;
