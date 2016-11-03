import { Action } from '@ngrx/store';
import { type } from '../../../shared/util';

export const ActionTypes = {
  OPEN_SIDENAV: type('[Layout] Open Sidenav'),
  CLOSE_SIDENAV: type('[Layout] Close Sidenav'),
  SET_MESSAGE: type('[Layout] Set message')
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}

export class SetMsgAction implements Action {
  type = ActionTypes.SET_MESSAGE;

  constructor(public payload: string) { }
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | SetMsgAction;
