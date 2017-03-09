import { Action } from '@ngrx/store';
import { Crisis } from './crisis.model';

import * as entityActions from '../entity/entity.actions';

// Special actions
export class ResolveConflict implements Action {
  type = 'ResolveConflict';
  constructor(public payload: any) { }
}

// Common actions
export * from '../entity/entity.actions';

// Action types
export type Actions = entityActions.Actions<Crisis> | ResolveConflict;
