import { Action } from '@ngrx/store';

import { Claim } from '../claim/claim.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  ADD_CLAIM: type('[Claims] Add Claim'),
  LOAD: type('[Claims] Load'),
  LOAD_SUCCESS: type('[Claims] Load Success'),
  LOAD_FAIL: type('[Claims] Load Fail'),
  REORDER_CLAIMS: type('[Claims] Reorder claims'),
  EXPAND_ALL: type('[Claims] Expand all claims'),
  COLLAPSE_ALL: type('[Claims] Collapse all claims'),
  TOGGLE_EDITABLE: type('[Claims] Toggle editable'),
  SEEK_CLAIM: type('[Claims] Seek claim'),
  SAVE_ALL: type('[Claims] Save All'),
  SAVE_ALL_SUCCESS: type('[Claims] Save All Success'),
  SAVE_ALL_FAIL: type('[Claims] Save All Fail'),
  ADD_REBUTTAL: type('[Claims] Add Rebuttal'),
  TOGGLE_REBUTTALS: type('[Claims] Toggle Rebuttals'),
  REORDER_REBUTTALS: type('[Claims] Reorder Rebuttals')
};

export class AddClaimAction implements Action {
  type = ActionTypes.ADD_CLAIM;

  constructor(public payload: Claim) { };
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { };
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Claim) { };
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }; // payload: error
}

export class ReorderClaimsAction implements Action {
  type = ActionTypes.REORDER_CLAIMS;

  constructor(public payload: string) { };
}

export class ExpandAllAction implements Action {
  type = ActionTypes.EXPAND_ALL;

  constructor(public payload: string) { };
}

export class CollapseAllAction implements Action {
  type = ActionTypes.COLLAPSE_ALL;

  constructor() { };
}

export class ToggleEditableAction implements Action {
  type = ActionTypes.EXPAND_ALL;

  constructor() { };
}

export class SeekClaimAction implements Action {
  type = ActionTypes.EXPAND_ALL;

  constructor(public payload: string) { };
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

export class AddRebuttalAction implements Action {
  type = ActionTypes.ADD_REBUTTAL;

  constructor(public payload: Claim) { };
}

export class ToggleRebuttalsAction implements Action {
  type = ActionTypes.TOGGLE_REBUTTALS;

  constructor(public payload: Claim) { };
}

export class ReorderRebuttalsAction implements Action {
  type = ActionTypes.REORDER_REBUTTALS;

  constructor(public payload: Claim) { };
}



export type Actions
  = AddClaimAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | ReorderClaimsAction
  | ExpandAllAction
  | CollapseAllAction
  | ToggleEditableAction
  | SeekClaimAction
  | SaveAllAction
  | SaveAllSuccessAction
  | SaveAllFailAction
  | AddRebuttalAction
  | ToggleRebuttalsAction
  | ReorderRebuttalsAction;
