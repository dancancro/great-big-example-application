import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { IDs } from './id.model';
import { typeFor } from '../util';
import { actions } from './id.actions';
import * as IDActions from './id.actions';
import { SliceAction } from '../slice/slice.actions';
import { PayloadAction } from '../util';
import * as sliceFunctions from '../slice/slice.functions';
import { RootState } from '../';

import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

/**
 * Reducers
 */

export function updateIDs(state: IDs, action: SliceAction): IDs {
    const entities = action.payload;
    return Object.assign({}, state, {
        ids: entities.map((entity) => entity.id)
    });
};

export function addID(state: IDs, action: SliceAction): IDs {
    const id = action.payload.id;
    if (state.ids.indexOf(id.id) > -1) {
        return state;
    }

    return Object.assign({}, state, {
        ids: [...state.ids, id]
    });
};

export function deleteID(state: IDs, action: SliceAction): IDs {
    const entity = action.payload;

    return Object.assign({}, state, {
        ids: state.ids.filter((id) => id !== entity.id)
    });
};

/**
 * Effects
 */
export function loadFromLocal$<T>(actions$: Actions, slice: keyof RootState, db, localStoreKey: string): Observable<{}> {  // TODO: should return PayloadAction
    return actions$
        .ofType(typeFor(slice, actions.LOAD))
        .startWith(new IDActions.Load(slice))
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
export function loadFromRemote$(actions$: Actions, slice: keyof RootState, dataService, dataGetter: string, debounce = 300, scheduler?): Observable<{}> {  // TODO: should return PayloadAction
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

export function addToLocal$(actions$: Actions, slice: keyof RootState, db, localStoreKey: string): Observable<{}> {  // TODO: should return PayloadAction
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
export function deleteFromLocal$(actions$: Actions, slice: keyof RootState, db, localStoreKey: string): Observable<{}> {  // TODO: should return PayloadAction
    return actions$
        .ofType(typeFor(slice, actions.DELETE))
        .map(toPayload)
        .mergeMap((entity) =>
            db.executeWrite(localStoreKey, 'delete', [entity.id])
                .map(() => new IDActions.DeleteSuccess(slice, entity))
                .catch(() => of(new IDActions.DeleteFail(slice, entity)))
        );
}
