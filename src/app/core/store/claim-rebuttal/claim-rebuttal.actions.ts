import { Action } from '@ngrx/store';

import { Claim } from '../claim/claim.model';
import { Rebuttal } from '../rebuttal/rebuttal.model';
import { ClaimRebuttal } from './claim-rebuttal.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  ASSOCIATE_REBUTTAL: type('[ClaimRebuttal] Associate a Rebuttal to Claim'),
  DISASSOCIATE_REBUTTAL: type('[ClaimRebuttal] Disassociate a Rebuttal from a Claim'),
  LOAD: type('[ClaimRebuttal] Load'),
  LOAD_SUCCESS: type('[ClaimRebuttal] Load Success'),
  LOAD_FAIL: type('[ClaimRebuttal] Load Fail'),
  SAVE_ALL: type('[ClaimRebuttal] Save All'),
  SAVE_ALL_SUCCESS: type('[ClaimRebuttal] Save All Success'),
  SAVE_ALL_FAIL: type('[ClaimRebuttal] Save All Fail'),
  REORDER_REBUTTALS: type('[ClaimRebuttal] Reorder rebuttals')
};

export class AssociateRebuttalAction implements Action {
  type = ActionTypes.ASSOCIATE_REBUTTAL;

  constructor(public payload: { claim: Claim, rebuttal: Rebuttal }) { };
}

export class DisassociateRebuttalAction implements Action {
  type = ActionTypes.DISASSOCIATE_REBUTTAL;

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

export class ReorderRebuttalsAction implements Action {
  type = ActionTypes.REORDER_REBUTTALS;

  constructor(public payload: any) { } // payload: {claim, rebuttals} 
}



export type Actions
  = AssociateRebuttalAction
  | DisassociateRebuttalAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | SaveAllAction
  | SaveAllSuccessAction
  | SaveAllFailAction
  | ReorderRebuttalsAction;
