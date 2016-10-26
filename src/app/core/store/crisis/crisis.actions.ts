import { Action } from '@ngrx/store';
import { Crisis } from './crisis.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  ADD_CRISIS:             type('[Crises] Add Crisis'),
  ADD_CRISIS_SUCCESS:     type('[Crises] Add Crisis Success'),
  ADD_CRISIS_FAIL:        type('[Crises] Add Crisis Fail'),
  UPDATE_CRISIS:          type('[Crises] Update Crisis'),
  UPDATE_CRISIS_SUCCESS:  type('[Crises] Update Crisis Success'),
  UPDATE_CRISIS_FAIL:     type('[Crises] Update Crisis Fail'),
  LOAD:                   type('[Crises] Load'),
  LOAD_SUCCESS:           type('[Crises] Load Success'),
  LOAD_FAIL:              type('[Crises] Load Fail')
};

export class AddCrisisSuccessAction implements Action {
  type = ActionTypes.ADD_CRISIS_SUCCESS;

  constructor(public payload: Crisis) { }
}

export class UpdateCrisisSuccessAction implements Action {
  type = ActionTypes.UPDATE_CRISIS_SUCCESS;

  constructor(public payload: any) { } // payload: { note }
}

export class UpdateCrisisFailAction implements Action {
  type = ActionTypes.UPDATE_CRISIS_FAIL;

  constructor() { }
}

/**
 * Load Crisis Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Crisis) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

export class AddCrisisAction implements Action {
  type = ActionTypes.ADD_CRISIS;

  constructor(public payload: Crisis) { }
}

export class UpdateCrisisAction implements Action {
  type = ActionTypes.UPDATE_CRISIS;

  constructor(public payload: any) { }
}

export type Actions
  = AddCrisisSuccessAction
  | UpdateCrisisSuccessAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | AddCrisisAction
  | UpdateCrisisAction;
