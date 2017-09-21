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

function patchOrUpdate(state: any, action: SliceAction, update: boolean): any {
    const obj = [state];
    const path = action.payload.path;
    const val = action.payload.val;

    if (!path || !path.length) {
        const wiper = {}; // wipes out the meat of the state, leaving system stuff like loading
        if (update) {
            wiper[state.slice] = null;
        }
        return merge({}, merge({}, state, wiper), evaluate(val, state));
    }

    let i = 0;
    for (i = 0; i < path.length - 1; i++) {
        obj[i + 1] = obj[i][path[i]];
    }
    let result = {};
    let start = 0;

    if ((typeof val === 'object') && (val !== null)) {
        result = val;
        start = path.length;

    } else {
        result[path[path.length - 1]] = evaluate(val, state);
        start = path.length - 1;
    }

    let mutation = {};
    for (i = start; i > 0; i--) {
        if (i === start && update) {
            mutation = result;
        } else {
            mutation = merge({}, obj[i], result);
        }
        result = {};
        result[path[i - 1]] = mutation;
    }

    if (update) {
        return { ...state, ...result }
    } else {
        return merge({}, state, result);
    }
}

function evaluate(val, state) {
    if (typeof val === 'function') {
        return val(state);
    }

    return val;
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
