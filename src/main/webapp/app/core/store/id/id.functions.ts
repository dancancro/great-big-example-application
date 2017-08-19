import { Observable } from 'rxjs/Observable';
import { async } from 'rxjs/scheduler/async';
import { Actions, toPayload } from '@ngrx/effects';


import { IDs } from './id.model';
import { PayloadAction, typeFor } from '../util';
import * as IDActions from './id.actions';
import { actions, IDAction } from './id.actions';

import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

/**
 * Reducers
 */

export function addLoadID(state: IDs, action: IDAction): IDs {
    return Object.assign({}, state, {
        loading: true,
    });
}
export function updateIDs(state: IDs, action: IDAction): IDs {
    const entities = action.payload;
    return Object.assign({}, state, {
        loaded: true,
        loading: false,
        ids: entities.map((entity) => entity.id)
    });
}
export function addID(state: IDs, action: IDAction): IDs {
    const id = action.payload.id;
    if (state.ids.indexOf(id.id) > -1) {
        return state;
    }

    return Object.assign({}, state, {
        ids: [...state.ids, id]
    });
}
export function deleteID(state: IDs, action: IDAction): IDs {
    const entity = action.payload;

    return Object.assign({}, state, {
        ids: state.ids.filter((id) => id !== entity.id)
    });
}
/**
 * Effects
 */
export function loadFromLocal$<T>(actions$: Actions, slice: string, db, localStoreKey: string): Observable<{}> {  // TODO: should return PayloadAction
    return actions$
        .ofType(typeFor(slice, actions.LOAD))
        .startWith(new IDActions.Load(slice, null))
        .switchMap(() => db.query(localStoreKey)
            .toArray()
            .map((entities: T[]) => new IDActions.LoadSuccess(slice, entities))
            .catch((error) => of(new IDActions.LoadFail(slice, error)))
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
export function loadFromRemote$(actions$: Actions, slice: string, dataService, dataGetter: string, debounce = 300, scheduler?): Observable<{}> {  // TODO: should return PayloadAction
    return actions$
        .ofType(typeFor(slice, actions.LOAD))
        .debounceTime(debounce, this.scheduler || async)
        .map(toPayload)
        .switchMap((query) => {
            if (query === '') {
                return empty();
            }

            const nextSearch$ = actions$.ofType(typeFor(slice, actions.LOAD)).skip(1);

            return dataService[dataGetter](query)  // TODO: make this more general
                .takeUntil(nextSearch$)
                .map((entities) => new IDActions.LoadSuccess(slice, entities))
                .catch(() => of(new IDActions.LoadSuccess(slice, [])));
        });
}

export function addToLocal$(actions$: Actions, slice: string, db, localStoreKey: string): Observable<{}> {  // TODO: should return PayloadAction
    return actions$
        .ofType(typeFor(slice, actions.ADD))
        .map((action) =>
            (<PayloadAction>action).payload)
        .mergeMap((entity) =>
            db.insert(localStoreKey, [entity])
                .map(() => new IDActions.AddSuccess(slice, entity))
                .catch(() => of(new IDActions.AddFail(slice, entity)))
        );
}
export function deleteFromLocal$(actions$: Actions, slice: string, db, localStoreKey: string): Observable<{}> {  // TODO: should return PayloadAction
    return actions$
        .ofType(typeFor(slice, actions.DELETE))
        .map(toPayload)
        .mergeMap((entity) =>
            db.executeWrite(localStoreKey, 'delete', [entity.id])
                .map(() => new IDActions.DeleteSuccess(slice, entity))
                .catch(() => of(new IDActions.DeleteFail(slice, entity)))
        );
}
