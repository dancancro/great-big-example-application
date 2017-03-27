import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/toArray';

import { IDs } from './id.model';
import { typeFor } from '../util';
import { actions, IDAction } from './id.actions';
import * as IDActions from './id.actions';

/**
 * Reducers
 */

export function addLoadID(state: IDs, action: IDActions.Add | IDActions.Load): IDs {
  return Object.assign({}, state, {
    loading: true,
  });
};

export function updateIDs(state: IDs, action: IDActions.Add | IDActions.Load): IDs {
  const entities = action.payload;
  return Object.assign({}, state, {
    loaded: true,
    loading: false,
    ids: entities.map(entity => entity.id)
  });
};

export function addID(state: IDs, action: IDActions.Add | IDActions.Load): IDs {
  const id = action.payload;
  if (state.ids.indexOf(id.id) > -1) {
    return state;
  }

  return Object.assign({}, state, {
    ids: [...state.ids, id.id]
  });
};

export function deleteID(state: IDs, action: IDActions.DeleteSuccess
  | IDActions.AddFail): IDs {
  const entity = action.payload;

  return Object.assign({}, state, {
    ids: state.ids.filter(id => id !== entity.id)
  });
};


/**
 * Effects
 */
export function loadFromLocal$<T>(actions$: Actions, slice: string, db, localStoreKey: string): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, actions.LOAD))
    .startWith(new IDActions.Load(slice, null))
    .switchMap(() => db.query(localStoreKey)
      .toArray()
      .map((entities: T[]) => new IDActions.LoadSuccess(slice, entities))
      .catch(error => of(new IDActions.LoadFail(slice, error)))
    );
}

/**
 * Gets a set of objects by calling a method of a service. The Load
 * action's payload should have a query string to pass to this method.
 *
 * @param actions$ a stream of actions
 * @param slice the part of the redux store and the first part of the action type
 * @param dataService a service that gets data from a remote source
 * @param dataGetter a method of the service that takes a query string parameter
 */
export function loadFromRemote$(actions$: Actions, slice: string, dataService, dataGetter: string): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, actions.LOAD))
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = actions$.ofType(typeFor(slice, actions.LOAD)).skip(1);

      return dataService[dataGetter](query)  // TODO: make this more general
        .takeUntil(nextSearch$)
        .map(entities => new IDActions.LoadSuccess(slice, entities))
        .catch(() => of(new IDActions.LoadSuccess(slice, [])));
    });
}

export function addToLocal$(actions$: Actions, slice: string, db, localStoreKey: string): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, actions.ADD))
    .map((action) =>
      action.payload)
    .mergeMap(entity =>
      db.insert(localStoreKey, [entity])
        .map(() => new IDActions.AddSuccess(slice, entity))
        .catch(() => of(new IDActions.AddFail(slice, entity)))
    );
}
export function deleteFromLocal$(actions$: Actions, slice: string, db, localStoreKey: string): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, actions.DELETE))
    .map(toPayload)
    .mergeMap(entity =>
      db.executeWrite(localStoreKey, 'delete', [entity.id])
        .map(() => new IDActions.DeleteSuccess(slice, entity))
        .catch(() => of(new IDActions.DeleteFail(slice, entity)))
    );
}


