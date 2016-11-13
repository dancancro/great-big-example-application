import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import * as fromRouter from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';
let uuid = require('node-uuid');

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
 * The compose function is one of our most handy tools. In basic terms, you give
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
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
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
 * Selectors are used with the `let` operator. They take an input observable
 * and return a new observable. Here's how you would use this selector:
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.let(getBooksState);
 * 	}
 * }
 * ```
 * 
 * Note that this is equivalent to:
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = getBooksState(state$);
 * 	}
 * }
 * ```
 * 
 */
export function getBooksState(state$: Observable<RootState>) {
  return state$.select(state => state.books);
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the books state then we pass the state to the book
 * reducer's getBooks selector, finally returning an observable
 * of search results.
 * 
 * Share memoizes the selector functions and published the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
 */
export const getBookEntities = compose(fromBooks.getBookEntities, getBooksState);
export const getBookIds = compose(fromBooks.getBookIds, getBooksState);
export const getSelectedBook = compose(fromBooks.getSelectedBook, getBooksState);


/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export function getSearchState(state$: Observable<RootState>) {
  return state$.select(s => s.search);
}

export const getSearchBookIds = compose(fromSearch.getBookIds, getSearchState);
export const getSearchStatus = compose(fromSearch.getStatus, getSearchState);
export const getSearchQuery = compose(fromSearch.getQuery, getSearchState);
export const getSearchLoading = compose(fromSearch.getLoading, getSearchState);


/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
export const getSearchResults = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Book }, string[]>(
    state$.let(getBookEntities),
    state$.let(getSearchBookIds)
  )
    .map(([entities, ids]) => ids.map(id => entities[id]));
};



export function getCollectionState(state$: Observable<RootState>) {
  return state$.select(s => s.collection);
}

export const getCollectionLoaded = compose(fromCollection.getLoaded, getCollectionState);
export const getCollectionLoading = compose(fromCollection.getLoading, getCollectionState);
export const getCollectionBookIds = compose(fromCollection.getBookIds, getCollectionState);

export const getBookCollection = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Book }, string[]>(
    state$.let(getBookEntities),
    state$.let(getCollectionBookIds)
  )
    .map(([entities, ids]) => ids.map(id => entities[id]));
};

export const isSelectedBookInCollection = function (state$: Observable<RootState>) {
  return combineLatest<string[], Book>(
    state$.let(getCollectionBookIds),
    state$.let(getSelectedBook)
  )
    .map(([ids, selectedBook]) => ids.indexOf(selectedBook.id) > -1);
};

/**
 * Layout Reducers
 */
export const getLayoutState = (state$: Observable<RootState>) =>
  state$.select(state => state.layout);

export const getShowSidenav = compose(fromLayout.getShowSidenav, getLayoutState);
export const getMsg = compose(fromLayout.getMsg, getLayoutState);
export const getDebatePageState = compose(fromLayout.getDebatePageState, getLayoutState);


/**
 * Session Reducers
 */
export const getSessionState = (state$: Observable<RootState>) =>
  state$.select(state => state.session);

export const hasError = compose(fromSession.hasError, getSessionState);
export const isLoading = compose(fromSession.isLoading, getSessionState);
export const getFirstName = compose(fromUser.getFirstName, getSessionState);
export const getLastName = compose(fromUser.getLastName, getSessionState);
export const loggedIn = compose(fromSession.loggedIn, getSessionState);
export const loggedOut = compose(fromSession.loggedOut, getSessionState);

/**
 * Notes Reducers
 */
export function getNotesState(state$: Observable<RootState>) {
  return state$.select(state => state.notes);
}
export const getNoteEntities = compose(fromNotes.getNoteEntities, getNotesState);
export const getNoteIds = compose(fromNotes.getNoteIds, getNotesState);

export const getNotes = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Note }, string[]>(
    state$.let(getNoteEntities),
    state$.let(getNoteIds)
  )
    .map(([entities, ids]) => {
      return ids.map(id => entities[id])
    });
};

/**
 * Claims Reducers
 */
export function getClaimsState(state$: Observable<RootState>) {
  return state$.select(state => state.claims);
}
export const getClaimEntities = compose(fromClaims.getClaimEntities, getClaimsState);
export const getClaimIds = compose(fromClaims.getClaimIds, getClaimsState);
export const getClaims = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Claim }, string[]>(
    state$.let(getClaimEntities),
    state$.let(getClaimIds)
  )
    .map(([entities, ids]) => {
      return ids.map(id => entities[id])
    });
};
export function getRebuttalsState(state$: Observable<RootState>) {
  return state$.select(state => state.rebuttals);
}
export const getRebuttalEntities = compose(fromRebuttals.getRebuttalEntities, getRebuttalsState);
export const getRebuttalIds = compose(fromRebuttals.getRebuttalIds, getRebuttalsState);
export const getRebuttals = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Rebuttal }, string[]>(
    state$.let(getRebuttalEntities),
    state$.let(getRebuttalIds)
  )
    .map(([entities, ids]) => ids.map(id => entities[id]));
};
export function getClaimRebuttalsState(state$: Observable<RootState>) {
  return state$.select(state => state.claimRebuttals);
}
export const getClaimRebuttalEntities = compose(fromClaimRebuttals.getClaimRebuttalEntities, getClaimRebuttalsState);
export const getClaimRebuttalIds = compose(fromClaimRebuttals.getClaimRebuttalIds, getClaimRebuttalsState);
export const getClaimRebuttals = function (state$: Observable<RootState>): Observable<ClaimRebuttal[]> {
  return combineLatest<{ [id: string]: ClaimRebuttal }, string[]>(
    state$.let(getClaimRebuttalEntities),
    state$.let(getClaimRebuttalIds)
  )
    .map(([entities, ids]) => ids.map(id => entities[id]));
};

// Many-to-Many Join, Denormalization with sorted sub array
export const getDeepClaims = function (state$: Observable<RootState>): Observable<Claim[]> {
  return combineLatest(
    state$.let(getClaimEntities),
    state$.let(getClaimIds),
    state$.let(getRebuttalEntities),
    state$.let(getClaimRebuttals),
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
                .map(cr => rebuttals[cr.rebuttalId])
            } // TODO: the AssociateRebuttal action should create a new rebuttal or have you pick one.
          )
        );
    }
  )
};

export const isTouched = function (state$: Observable<RootState>) {
  let _touched = false;
  // TODO make this a for loop with early exits
  getClaims(state$).forEach(claims => {
    claims.forEach(claim => {
      claim.rebuttals.forEach(rebuttal => {
        if (rebuttal.isTouched()) {
          _touched = true;
        }
      });
    });
  });
  return _touched;
}

/**
 * Counter Reducers
 */
export const getCounterState = (state$: Observable<RootState>) =>
  state$.select(state => state.counter);
export const getCounterValue = compose(fromCounter.getValue, getCounterState);

/**
 * Crises Reducers
 */

export function getCrisesState(state$: Observable<RootState>) {
  return state$.select(state => state.crises);
}
export const getCrisisEntities = compose(fromCrises.getCrisisEntities, getCrisesState);
export const getCrisisIds = compose(fromCrises.getCrisisIds, getCrisesState);
export const getCrises = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Crisis }, string[]>(
    state$.let(getCrisisEntities),
    state$.let(getCrisisIds)
  )
    .map(([entities, ids]) => ids.map(id => entities[id]));
};

/**
 * Contacts Reducers
 */

export function getContactsState(state$: Observable<RootState>) {
  return state$.select(state => state.contacts);
}
export const getContactEntities = compose(fromContacts.getContactEntities, getContactsState);
export const getContactIds = compose(fromContacts.getContactIds, getContactsState);
export const getContacts = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Contact }, string[]>(
    state$.let(getContactEntities),
    state$.let(getContactIds)
  )
    .map(([entities, ids]) => ids.map(id => entities[id]));
};
export const getContact = compose(fromContacts.getContact, getContactsState);

/**
 * Heroes Reducers
 */

export function getHeroesState(state$: Observable<RootState>) {
  return state$.select(state => state.heroes);
}
export const getHeroEntities = compose(fromHeroes.getHeroEntities, getHeroesState);
export const getHeroIds = compose(fromHeroes.getHeroIds, getHeroesState);
export const getHeroes = function (state$: Observable<RootState>) {
  return combineLatest<{ [id: string]: Hero }, string[]>(
    state$.let(getHeroEntities),
    state$.let(getHeroIds)
  )
    .map(([entities, ids]) => ids.map(id => entities[id]));
};
export const getSelectedHero = compose(fromHeroes.getSelectedHero, getHeroesState);

/**
 * User Reducers
 */
export const getUser = (state$: Observable<RootState>) =>
  state$.select(state => state.user);
