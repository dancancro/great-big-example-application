import { Action } from '@ngrx/store';
import { ClaimRebuttal } from './claim-rebuttal.model';
import { Claim } from '../claim/claim.model';
import { Rebuttal } from '../rebuttal/rebuttal.model';

import * as entityActions from '../entity/entity.actions';
import { entityNames, BaseAction } from '../util';

// Special actions
export class AssociateRebuttal extends BaseAction<ClaimRebuttal> {
  _name = 'AssociateRebuttal';
  constructor(payload: ClaimRebuttal) {
    super(payload, entityNames.CLAIM_REBUTTAL);
  }
}

export class DisassociateRebuttal extends BaseAction<ClaimRebuttal> {
  _name = 'DisassociateRebuttal';
  constructor(payload: { claim: Claim, rebuttal: Rebuttal }) {
    super(payload, entityNames.CLAIM_REBUTTAL);
  }
}

export class ReorderRebuttals extends BaseAction<ClaimRebuttal> {
  _name = 'ReorderRebuttals';
  constructor(payload: any) {
    super(payload, entityNames.CLAIM_REBUTTAL);
  }
}

// Common actions
export * from '../entity/entity.actions';

// Action types
export type Actions = entityActions.Actions<Claim>
  | AssociateRebuttal
  | DisassociateRebuttal
  | ReorderRebuttals;
