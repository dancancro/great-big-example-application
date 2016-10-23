import { Action } from '@ngrx/store';

import { Rebuttal } from './rebuttal.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  LOAD:                 type('[Rebuttals] Load'),
  LOAD_SUCCESS:         type('[Rebuttals] Load Success'),
  LOAD_FAIL:            type('[Rebuttals] Load Fail'),
  SAVE_ALL:             type('[Rebuttals] Save All'),
  SAVE_ALL_SUCCESS:     type('[Rebuttals] Save All Success'),
  SAVE_ALL_FAIL:        type('[Rebuttals] Save All Fail'),
  CANCEL_REBUTTAL:         type('[Rebuttal] Cancel Rebuttal'),
  SAVE_REBUTTAL:           type('[Rebuttal] Save Rebuttal'),
  MAKE_REBUTTAL_EDITABLE:  type('[Rebuttal] Make Rebuttal Editable')
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { };
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Rebuttal[]) { };
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: Rebuttal[]) { };
}

export class SaveAllAction implements Action {
  type = ActionTypes.SAVE_ALL;

  constructor(public payload: {oldClaims: Rebuttal[], newClaims: Rebuttal[]}) { };
}

export class SaveAllSuccessAction implements Action {
  type = ActionTypes.SAVE_ALL_SUCCESS;

  constructor(public payload: {oldClaims: Rebuttal[], newClaims: Rebuttal[]}) { };
}

export class SaveAllFailAction implements Action {
  type = ActionTypes.SAVE_ALL_FAIL;

  constructor(public payload: {oldClaims: Rebuttal[], newClaims: Rebuttal[]}) { };
}

export class CancelRebuttalAction implements Action {
  type = ActionTypes.CANCEL_REBUTTAL;

  constructor(public payload: Rebuttal) { };
}

export class SaveRebuttalAction implements Action {
  type = ActionTypes.SAVE_REBUTTAL;

  constructor(public payload: any ) { };  // payload: {rebuttal, newRebuttal}
}

export class MakeRebuttalEditableAction implements Action {
  type = ActionTypes.MAKE_REBUTTAL_EDITABLE;

  constructor(public payload: Rebuttal) { };
}


export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | SaveAllAction
  | SaveAllSuccessAction
  | SaveAllFailAction
  | CancelRebuttalAction
  | SaveRebuttalAction
  | MakeRebuttalEditableAction;
