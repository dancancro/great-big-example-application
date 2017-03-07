import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  INCREMENT_COUNTER:           type('[Counter] Increment Counter'),
  DECREMENT_COUNTER:           type('[Counter] Decrement Counter')
};

export class IncrementCounterAction implements Action {
  type = ActionTypes.INCREMENT_COUNTER;

  constructor() { }
}

export class DecrementCounterAction implements Action {
  type = ActionTypes.DECREMENT_COUNTER;

  constructor() { }
}

export type Actions
  = IncrementCounterAction
  | DecrementCounterAction;
