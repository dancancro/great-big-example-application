import { Action } from '@ngrx/store';
import { Claim } from './claim.model';

import * as entityActions from '../entity/entity.actions';
import { entityNames, BaseAction } from '../util';

// Special actions
export class ToggleAllRebuttals extends BaseAction<Claim> {
  _name = 'ToggleAllRebuttals';
  constructor(showRebuttals: boolean) {
    super(showRebuttals, entityNames.CLAIM);
  }
}

export class ToggleEditable extends BaseAction<Claim> {
  _name = 'ToggleEditable';
  constructor(makeEditable: boolean) {
    super(makeEditable, entityNames.CLAIM);
  }
}

export class SeekClaim extends BaseAction<Claim> {
  _name = 'SeekClaim';
  constructor(claimId: string) {
    super(claimId, entityNames.CLAIM);
  }
}

export class ToggleRebuttals extends BaseAction<Claim> {
  _name = 'ToggleRebuttals';
  constructor(claim: Claim) {
    super(claim, entityNames.CLAIM);
  }
}

export class ReorderRebuttals extends BaseAction<Claim> {
  _name = 'ReorderRebuttals';
  constructor(payload) {
    super(payload, entityNames.CLAIM); // payload: { claim, rebuttals }
  }
}

export class ReorderClaims extends BaseAction<Claim> {
  _name = 'ReorderClaims';
  constructor(payload) {
    super(payload, entityNames.CLAIM); // payload: id[]
  }
}

// Common actions
export * from '../entity/entity.actions';

// Action types
export type Actions = entityActions.Actions<Claim>
  | ToggleAllRebuttals
  | ToggleEditable
  | SeekClaim
  | ToggleRebuttals
  | ReorderRebuttals
  | ReorderClaims;
