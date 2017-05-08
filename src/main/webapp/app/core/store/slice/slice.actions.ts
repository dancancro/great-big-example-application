import { Action } from '@ngrx/store';

import { typeFor } from '../util';

export const actions = {
  LOAD: 'LOAD',
  LOAD_FAIL: 'LOAD_FAIL',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  UPDATE: 'UPDATE'
}

export class SliceAction implements Action {
  _actionName: string = '';
  get type() {
    return typeFor(this.slice, this._actionName)
  }

  constructor(public slice: string, public payload: any) { }
}

export class Load extends SliceAction {
  _actionName: string = actions.LOAD;
}

export class LoadFail extends SliceAction {
  _actionName: string = actions.LOAD_FAIL;
}

export class LoadSuccess extends SliceAction {
  _actionName: string = actions.LOAD_SUCCESS;
}

export class Update extends SliceAction {
  _actionName: string = actions.UPDATE;
  constructor(public slice: string, public path: string[], public val: any) {
    super(slice, { path, val });
  }
}
