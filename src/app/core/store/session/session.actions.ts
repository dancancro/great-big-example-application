import { Action } from '@ngrx/store';
import { type } from '../../../shared/util';

export const ActionTypes = {
  LOGIN_USER:            type('[Session] Login User'),
  LOGIN_USER_SUCCESS:    type('[Session] Login User Success'),
  LOGIN_USER_FAIL:       type('[Session] Login User Fail'),
  LOGOUT_USER:           type('[Session] Logout User')
};

interface Credentials {
  user: string;
  password: string;
}

export class LoginUserAction implements Action {
  type = ActionTypes.LOGIN_USER;

  constructor(public payload: Credentials) { }
}

export class LoginUserSuccessAction implements Action {
  type = ActionTypes.LOGIN_USER_SUCCESS;

  constructor(public payload: any) { } // payload: {token, profile}
}

export class LoginUserFailAction implements Action {
  type = ActionTypes.LOGIN_USER_FAIL;

  constructor(public payload: any) { }  // payload: {error}
}

export class LogoutUserAction implements Action {
  type = ActionTypes.LOGOUT_USER;

  constructor() { }
}

export type Actions
  = LoginUserAction
  | LoginUserSuccessAction
  | LoginUserFailAction
  | LogoutUserAction;
