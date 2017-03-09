
import { typeFor, BaseAction } from '../util';

// These string values need to match the action class names
export const ActionNames = {
  ADD: 'Add',
  ADD_SUCCESS: 'AddSuccess',
  UPDATE: 'Update',
  UPDATE_SUCCESS: 'UpdateSuccess',
  ADD_UPDATE_FAIL: 'AddUpdateFail',
  LOAD: 'Load',
  LOAD_SUCCESS: 'LoadSuccess',
  LOAD_FAIL: 'LoadFail',
  SELECT: 'Select',
  DELETE: 'Delete'
}

export class Add<T> extends BaseAction<T> {
  _name: string = ActionNames.ADD;
}

export class AddSuccess<T> extends BaseAction<T> {
  _name: string = ActionNames.ADD_SUCCESS;
}

export class Update<T> extends BaseAction<T> {
  _name: string = ActionNames.UPDATE;
}

export class UpdateSuccess<T> extends BaseAction<T> {
  _name: string = ActionNames.UPDATE_SUCCESS;
}

export class AddUpdateFail<T> extends BaseAction<T> {
  _name: string = ActionNames.ADD_UPDATE_FAIL;
}

export class Load<T> extends BaseAction<T> {
  _name: string = ActionNames.LOAD;
}

export class LoadSuccess<T> extends BaseAction<T> {
  _name: string = ActionNames.LOAD_SUCCESS;
}

export class LoadFail<T> extends BaseAction<T> {
  _name: string = ActionNames.LOAD_FAIL;
}

export class Select<T> extends BaseAction<T> {
  _name: string = ActionNames.SELECT;
}

export class Delete<T> extends BaseAction<T> {
  _name: string = ActionNames.DELETE;
}

// export function getActionTypes<T>(entityType: string, actionName): string {
//   return type(`[${entityType}] ${actionName}`)
// }

export type Actions<T>
  = Add<T>
  | AddSuccess<T>
  | Update<T>
  | UpdateSuccess<T>
  | Load<T>
  | LoadSuccess<T>
  | LoadFail<T>
  | Select<T>
  | Delete<T>;
