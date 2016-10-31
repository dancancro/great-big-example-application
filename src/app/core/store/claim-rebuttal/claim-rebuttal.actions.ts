import { Action } from '@ngrx/store';

import { Claim } from '../claim/claim.model';
import { Rebuttal } from '../rebuttal/rebuttal.model';
import { ClaimRebuttal } from './claim-rebuttal.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  ADD_REBUTTAL: type('[ClaimRebuttal] Add Rebuttal to Claim'),
  LOAD: type('[ClaimRebuttal] Load'),
  LOAD_SUCCESS: type('[ClaimRebuttal] Load Success'),
  LOAD_FAIL: type('[ClaimRebuttal] Load Fail'),
  SAVE_ALL: type('[ClaimRebuttal] Save All'),
  SAVE_ALL_SUCCESS: type('[ClaimRebuttal] Save All Success'),
  SAVE_ALL_FAIL: type('[ClaimRebuttal] Save All Fail')
};

export class AddRebuttalAction implements Action {
  type = ActionTypes.ADD_REBUTTAL;

  constructor(public payload: { claim: Claim, rebuttal: Rebuttal }) { };
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { };
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: ClaimRebuttal) { };
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }; // payload: error
}

export class SaveAllAction implements Action {
  type = ActionTypes.SAVE_ALL;

  constructor(public payload: { oldClaims: Claim[], newClaims: Claim[] }) { };
}

export class SaveAllSuccessAction implements Action {
  type = ActionTypes.SAVE_ALL_SUCCESS;

  constructor(public payload: { oldClaims: Claim[], newClaims: Claim[] }) { };
}

export class SaveAllFailAction implements Action {
  type = ActionTypes.SAVE_ALL_FAIL;

  constructor(public payload: { oldClaims: Claim[], newClaims: Claim[] }) { };
}



export type Actions
  = AddRebuttalAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | SaveAllAction
  | SaveAllSuccessAction
  | SaveAllFailAction;
