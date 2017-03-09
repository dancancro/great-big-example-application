import { Action } from '@ngrx/store';
import { Rebuttal } from './rebuttal.model';

import * as entityActions from '../entity/entity.actions';
import { entityNames, BaseAction } from '../util';

// Special actions
export class CancelRebuttal extends BaseAction<Rebuttal> {
  _name = 'CancelRebuttal';
  constructor(payload: Rebuttal) {
    super(payload, entityNames.REBUTTAL)
  }
}

export class SaveRebuttal extends BaseAction<Rebuttal> {
  _name = 'SaveRebuttal';
  constructor(payload: Rebuttal) {
    super(payload, entityNames.REBUTTAL)
  }
}

export class MakeRebuttalEditable extends BaseAction<Rebuttal> {
  _name = 'MakeRebuttalEditable';
  constructor(payload: Rebuttal) {
    super(payload, entityNames.REBUTTAL)
  }
}

export class AddRebuttal extends BaseAction<Rebuttal> {
  _name = 'AddRebuttal';
}

// Common actions
export * from '../entity/entity.actions';

// Action types
export type Actions =
  entityActions.Actions<Rebuttal>
  | CancelRebuttal
  | SaveRebuttal
  | MakeRebuttalEditable
  | AddRebuttal;
