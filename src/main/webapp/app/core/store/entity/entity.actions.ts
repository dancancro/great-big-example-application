import { Action } from '@ngrx/store';

import { typeFor } from '../util';

export const actions = {
  ADD: 'ADD',
  ADD_SUCCESS: 'ADD_SUCCESS',
  ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL',
  DELETE: 'DELETE',
  LOAD: 'LOAD',
  LOAD_FAIL: 'LOAD_FAIL',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  SELECT: 'SELECT',
  SELECT_NEXT: 'SELECT_NEXT',
  UPDATE: 'UPDATE',
  UPDATE_EACH: 'UPDATE_EACH',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS'
}

export class EntityAction<T> implements Action {
  _actionName: string = '';
  get type() {
    return typeFor(this.slice, this._actionName)
  }
  constructor(public slice: string, public payload: any) { }
}

export class Add<T> extends EntityAction<T> {
  _actionName: string = actions.ADD;
}

export class AddSuccess<T> extends EntityAction<T> {
  _actionName: string = actions.ADD_SUCCESS;
}

export class AddUpdateFail<T> extends EntityAction<T> {
  _actionName: string = actions.ADD_UPDATE_FAIL;
}

export class Delete<T> extends EntityAction<T> {
  _actionName: string = actions.DELETE;
}

export class LoadFail<T> extends EntityAction<T> {
  _actionName: string = actions.LOAD_FAIL;
}

export class LoadSuccess<T> extends EntityAction<T> {
  _actionName: string = actions.LOAD_SUCCESS;
}

export class Update<T> extends EntityAction<T> {
  _actionName: string = actions.UPDATE;
}

export class UpdateEach<T> extends EntityAction<T> {
  _actionName: string = actions.UPDATE_EACH;
}

export class UpdateSuccess<T> extends EntityAction<T> {
  _actionName: string = actions.UPDATE_SUCCESS;
}

export class Load<T> extends EntityAction<T> {
  _actionName: string = actions.LOAD;
}

export class Select<T> extends EntityAction<T> {
  _actionName: string = actions.SELECT;
}

export class SelectNext<T> extends EntityAction<T> {
  _actionName: string = actions.SELECT_NEXT;
  constructor(public slice: string) {
    super(null, slice);
  }
}

