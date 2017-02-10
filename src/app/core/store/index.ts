import { createSelector } from 'reselect';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import * as fromRouter from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';
let uuid = require('uuid');

import { Book } from './book/book.model';
import { Note } from './note/note.model';
import { environment } from '../../../environments/environment.prod';
import { Claim } from './claim/claim.model';
import { Rebuttal, initialRebuttal } from './rebuttal/rebuttal.model';
import { ClaimRebuttal } from './claim-rebuttal/claim-rebuttal.model';
import { Layout } from './layout/layout.model';
import { Counter } from './counter/counter.model';
import { Session } from './session/session.model';
import { User } from './user/user.model';
import { Crisis } from './crisis/crisis.model';
import { Contact } from './contact/contact.model';
import { Hero } from './hero/hero.model';

/**
 * The createSelector function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';


/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromBooks from './book/book.reducer';
import * as fromClaims from './claim/claim.reducer';
import * as fromCollection from './collection/collection.reducer';
import * as fromCounter from './counter/counter.reducer';
import * as fromLayout from './layout/layout.reducer';
import * as fromNotes from './note/note.reducer';
import * as fromRebuttals from './rebuttal/rebuttal.reducer';
import * as fromClaimRebuttals from './claim-rebuttal/claim-rebuttal.reducer';
import * as fromSearch from './search/search.reducer';
import * as fromSession from './session/session.reducer';
import * as fromUser from './user/user.reducer';
import * as fromCrises from './crisis/crisis.reducer';
import * as fromContacts from './contact/contact.reducer';
import * as fromHeroes from './hero/hero.reducer';
import { Entities, IDs } from './entity/entity.model';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface RootState {
  books: Entities<Book>;
  claimRebuttals: Entities<ClaimRebuttal>;
  claims: Entities<Claim>;
  collection: IDs;
  contacts: Entities<Contact>;
  counter: Counter;
  crises: Entities<Crisis>;
  heroes: Entities<Hero>
  layout: Layout;
  notes: Entities<Note>;
  rebuttals: Entities<Rebuttal>;
  router: fromRouter.RouterState;
  search: fromSearch.State;
  session: Session;
  user: User;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our createSelector helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that createSelector applies
 * the result from right to left.
 */

const reducers = {
  books: fromBooks.reducer,
  claims: fromClaims.reducer,
  claimRebuttals: fromClaimRebuttals.reducer,
  contacts: fromContacts.reducer,
  collection: fromCollection.reducer,
  counter: fromCounter.reducer,
  crises: fromCrises.reducer,
  heroes: fromHeroes.reducer,
  layout: fromLayout.reducer,
  notes: fromNotes.reducer,
  rebuttals: fromRebuttals.reducer,
  router: fromRouter.routerReducer,
  search: fromSearch.reducer,
  session: fromSession.reducer,
  user: fromUser.reducer
}

const developmentReducer = compose(
  storeFreeze,
  localStorageSync(['session'], true),
  combineReducers)(reducers);
const productionReducer = compose(
  localStorageSync(['session'], true),
  combineReducers)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<RootState>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * 
 * ```
 * 
 */
export const getBooksState = (state: RootState) => state.books;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our createSelector function comes in handy. From right to left, we
 * first select the books state then we pass the state to the book
 * reducer's getBooks selector, finally returning an observable
 * of search results.
 * 
 * Share memoizes the selector functions and published the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
 */
export const getBookEntities = createSelector(getBooksState, fromBooks.getEntities);
export const getBookIds = createSelector(getBooksState, fromBooks.getIds);
export const getSelectedBookId = createSelector(getBooksState, fromBooks.getSelectedId);
export const getSelectedBook = createSelector(getBooksState, fromBooks.getSelected);


/**
 * Just like with the books selectors, we also have to createSelector the search
 * reducer's and collection reducer's selectors.
 */
export const getSearchState = (state: RootState) => state.search;
export const getSearchBookIds = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);


/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
export const getSearchResults = createSelector(getBookEntities, getSearchBookIds, (books, searchIds) => {
  return searchIds.map(id => books[id]);
});

export const getCollectionState = (state: RootState) => state.collection;
export const getCollectionLoaded = createSelector(getCollectionState, fromCollection.getLoaded);
export const getCollectionLoading = createSelector(getCollectionState, fromCollection.getLoading);
export const getCollectionBookIds = createSelector(getCollectionState, fromCollection.getIds);
export const getBookCollection = createSelector(getBookEntities, getCollectionBookIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
export const isSelectedBookInCollection = createSelector(getCollectionBookIds, getSelectedBookId, (ids, selected) => {
  return ids.indexOf(selected) > -1;
});

/**
 * Layout Reducers
 */
export const getLayoutState = (state: RootState) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const getMsg = createSelector(getLayoutState, fromLayout.getMsg);
export const getDebatePageState = createSelector(getLayoutState, fromLayout.getDebatePageState);


/**
 * Session Reducers
 */
export const getSessionState = (state: RootState) => state.session;
export const hasError = createSelector(getSessionState, fromSession.hasError);
export const isLoading = createSelector(getSessionState, fromSession.isLoading);
export const loggedIn = createSelector(getSessionState, fromSession.loggedIn);
export const loggedOut = createSelector(getSessionState, fromSession.loggedOut);

/**
 * Notes Reducers
 */
export const getNotesState = (state: RootState) => state.notes;
export const getNoteEntities = createSelector(getNotesState, fromNotes.getEntities);
export const getNoteIds = createSelector(getNotesState, fromNotes.getIds);
export const getNotes = createSelector(getNoteEntities, getNoteIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

/**
 * Claims Reducers
 */
export const getClaimsState = (state: RootState): Entities<Claim> => state.claims;
export const getClaimEntities = createSelector(getClaimsState, fromClaims.getEntities);
export const getClaimIds = createSelector(getClaimsState, fromClaims.getIds);
export const getClaims = createSelector(getClaimEntities, getClaimIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

/**
 * Rebuttal Reducers
 */
export const getRebuttalsState = (state: RootState): Entities<Rebuttal> => state.rebuttals;
export const getRebuttalEntities = createSelector(getRebuttalsState, fromRebuttals.getEntities);
export const getRebuttalIds = createSelector(getRebuttalsState, fromRebuttals.getIds);
export const getRebuttals = createSelector(getRebuttalEntities, getRebuttalIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

/**
 * ClaimRebuttal Reducers
 */
export const getClaimRebuttalsState = (state: RootState): Entities<ClaimRebuttal> => state.claimRebuttals;
export const getClaimRebuttalEntities = createSelector(getClaimRebuttalsState, fromClaimRebuttals.getEntities);
export const getClaimRebuttalIds = createSelector(getClaimRebuttalsState, fromClaimRebuttals.getIds);
export const getClaimRebuttals = createSelector(getClaimRebuttalEntities, getClaimRebuttalIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

// Many-to-Many Join, Denormalization with sorted sub array
export const getDeepClaims = createSelector(getClaimEntities, getClaimIds, getRebuttalEntities, getClaimRebuttals,
  (claims, claimIds, rebuttals, claimRebuttals) => {
    return claimIds
      // .sort((a, b) => claims[a].shortName < claims[b].sortOrder ? -1 : 1)
      .map(cid =>
        Object.assign(
          {},
          claims[cid],
          {
            rebuttals:
            claimRebuttals
              .filter(cr => cr.claimId == cid)
              .sort((a, b) => a.sortOrder - b.sortOrder)
              .map(cr => {
                return rebuttals[cr.rebuttalId];
              })
          } // TODO: the AssociateRebuttal action should create a new rebuttal or have you pick one.
        )
      );

  });


// export const isTouched = function (state$: Observable<RootState>) {
//   let _touched = false;
//   // TODO make this a for loop with early exits
//   getClaims(state$).forEach(claims => {
//     claims.forEach(claim => {
//       claim.rebuttals.forEach(rebuttal => {
//         if (rebuttal.isTouched()) {
//           _touched = true;
//         }
//       });
//     });
//   });
//   return _touched;
// }

/**
 * Counter Reducers
 */
export const getCounterState = (state: RootState) => state.counter;
export const getCounterValue = createSelector(getCounterState, fromCounter.getValue);

/**
 * Crises Reducers
 */
export const getCrisesState = (state: RootState) => state.crises;
export const getCrisisEntities = createSelector(getCrisesState, fromCrises.getEntities);
export const getCrisisIds = createSelector(getCrisesState, fromCrises.getIds);
export const getSelectedCrisis = createSelector(getCrisesState, fromCrises.getSelected);
export const getCrises = createSelector(getCrisisEntities, getCrisisIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
/**
 * Contacts Reducers
 */

export const getContactsState = (state: RootState) => state.contacts;
export const getContactEntities = createSelector(getContactsState, fromContacts.getEntities);
export const getContactIds = createSelector(getContactsState, fromContacts.getIds);
export const getSelectedContact = createSelector(getContactsState, fromContacts.getSelected);
export const getContacts = createSelector(getContactEntities, getContactIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
export const getContact = createSelector(getContactsState, fromContacts.getSelected);

/**
 * Heroes Reducers
 */
export const getHeroesState = (state: RootState) => state.heroes;
export const getHeroEntities = createSelector(getHeroesState, fromHeroes.getEntities);
export const getHeroIds = createSelector(getHeroesState, fromHeroes.getIds);
export const getSelectedHero = createSelector(getHeroesState, fromHeroes.getSelected);
export const getHeroes = createSelector(getHeroEntities, getHeroIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

/**
 * User Reducers
 */
export const getUserState = (state: RootState) => state.user;
export const getFirstName = createSelector(getUserState, fromUser.getFirstName);
export const getLastName = createSelector(getUserState, fromUser.getLastName);