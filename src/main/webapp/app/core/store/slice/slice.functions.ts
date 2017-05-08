import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { SliceAction } from './slice.actions';
import { typeFor } from '../util';
import { actions } from './slice.actions';
import * as ActionClasses from './slice.actions';

const merge = require('lodash/merge');

export function load(state: {}, action: ActionClasses.Load): any {
  return merge({}, state, {
    hasError: false,
    loaded: false,
    loading: true,
  });
};

export function loadFail(state): any {
  return merge({}, state, {
    hasError: true,
    loaded: false,
    loading: false,
  });
}

export function loadSuccess(state, action): any {
  return merge({}, state, action.payload, {
    hasError: false,
    loaded: true,
    loading: false,
  });
}

export function update(state: any, action: SliceAction): any {
  let obj = [state];
  let path = action.payload.path;
  let val = action.payload.val;

  if (!path || !path.length) {
    return merge({}, state, evaluate(val, state));
  }

  let i = 0;
  for (i = 0; i < path.length - 1; i++) {
    obj[i + 1] = obj[i][path[i]];
  }
  let result = {};
  let start = 0;

  if ((typeof val === "object") && (val !== null)) {
    result = val;
    start = path.length;

  } else {
    result[path[path.length - 1]] = evaluate(val, state);
    start = path.length - 1;
  }

  let mutation = {};
  for (i = start; i > 0; i--) {
    mutation = merge({}, obj[i], result);
    result = {};
    result[path[i - 1]] = mutation;
  }

  return merge({}, state, result);
}

function evaluate(val, state) {
  if (typeof val === "function") {
    return val(state);
  }

  return val;
}



/**
 * Effects
 */
export function loadFromRemote$(actions$: Actions, slice: string, dataService, dataGetter: string, transform: Function = ((resp) => resp)): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, actions.LOAD))
    .switchMap((action: Action) =>
      dataService[dataGetter](action.payload)
        .map(transform)
        .map((responseSlice: any) =>
          new ActionClasses.LoadSuccess(slice, responseSlice))
        .catch(error => of(new ActionClasses.LoadFail(slice, error)))
    )
}
