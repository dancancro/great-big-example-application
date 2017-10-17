import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SliceAction } from './slice.actions';
import { typeFor } from '../util';
import { actions } from './slice.actions';
import * as ActionClasses from './slice.actions';
import { PayloadAction } from '../util';
import { RootState } from '../';

const merge = require('lodash/merge');

export function load(state: {}, action: SliceAction): any {
    const newState = merge({}, state, {
        hasError: false
    });
    return newState;
    // return setSliceLoading(newState, action);
};

export function loadFail(state, action: SliceAction): any {
    const newState = merge({}, state, {
        hasError: true,
    });
    return newState;
    // return setSliceLoading(newState, action);
}

export function loadSuccess(state, action): any {
    const newState = merge({}, state, action.payload, {
        hasError: false,
    });
    return newState;
    // return setSliceLoading(newState, action);
}

export function update(state: any, action: SliceAction): any {
    return patchOrUpdate(state, action, true);
}

export function patch(state: any, action: SliceAction): any {
    return patchOrUpdate(state, action, false);
}

/**
 *
 * @param state
 * @param action contains a payload that could be a primitive value, an object or a function with argument state
 * that could return a primitive value or an object
 * @param update boolean true if updating, false if patching
 */
function patchOrUpdate(state: any, action: SliceAction, update: boolean): any {
    let obj = [state];
    let patch = !update;
    const path = action.payload.path;
    const hasPath = path && path.length;
    const pathLength = hasPath ? path.length : 0;
    const key = path[path.length - 1]
    let val = {};
    let pos = pathLength;

    // object
    if (typeof action.payload.val === 'object') {
        // return [val, pos];
        val = action.payload.val;
    } else if (typeof action.payload.val === 'function') {
        // function
        val[key] = action.payload.val(state);
        pos--;
        patch = true;
    } else {
        // primitive
        val[key] = action.payload.val;
        pos--;
        patch = true;
    }

    let i = 0;
    for (i = 0; i < pos; i++) {
        obj[i + 1] = obj[i][path[i]];
    }

    if (patch) {
        val = merge({}, obj[pos], val);
    }

    obj = [];
    obj[pos] = val;
    for (i = pos - 1; i >= 0; i--) {
        obj[i] = {};
        obj[i][path[i]] = obj[i + 1];
    }

    return { ...state, ...obj[0] };
}

/**
 * Effects
 */
export function loadFromRemote$(actions$: Actions, slice: keyof RootState, dataService, dataGetter: string): Observable<Action> {
    return actions$
        .ofType(typeFor(slice, actions.LOAD))
        .switchMap((action: PayloadAction) =>
            dataService[dataGetter](action.payload)
                .map((responseSlice: any) =>
                    new ActionClasses.LoadSuccess(slice, responseSlice))
                .catch((error) => of(new ActionClasses.LoadFail(slice, error)))
        );
}

export function postToRemote$(actions$: Actions, slice: keyof RootState, dataService, triggerAction: string, successAction: SliceAction, errorAction: SliceAction, responseTransform: Function = ((resp) => resp)): Observable<Action> {
    return httpToRemote$('post', actions$, slice, dataService, triggerAction, successAction, errorAction, responseTransform);
}

export function deleteFromRemote$(actions$: Actions, slice: keyof RootState, dataService, triggerAction: string, successAction: SliceAction, errorAction: SliceAction, responseTransform: Function = ((resp) => resp)): Observable<Action> {
    return httpToRemote$('delete', actions$, slice, dataService, triggerAction, successAction, errorAction, responseTransform);
}

export function getFromRemote$(actions$: Actions, slice: keyof RootState, dataService, triggerAction: string, successAction: SliceAction, errorAction: SliceAction, responseTransform: Function = ((resp) => resp)): Observable<Action> {
    return httpToRemote$('get', actions$, slice, dataService, triggerAction, successAction, errorAction, responseTransform);
}

function httpToRemote$(method: string, actions$: Actions, slice: keyof RootState, dataService, triggerAction: string, successAction: SliceAction, errorAction: SliceAction, responseTransform: Function = ((resp) => resp)): Observable<Action> {
    return actions$
        .ofType(typeFor(slice, triggerAction))
        .switchMap((action: PayloadAction) =>
            dataService[method](action.payload.route, action.payload.requestObject || {})
                .map(responseTransform)
                .map((responseSlice: any) => {
                    successAction.payload = responseSlice;
                    return successAction;
                })
                .catch((error) => {
                    errorAction.payload = error;
                    of(errorAction)
                })
        );
}
