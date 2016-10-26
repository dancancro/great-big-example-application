import { Action } from '@ngrx/store';
import { type } from '../../../shared/util';

export const ActionTypes = {
  OPEN_SIDENAV:     type('[Layout] Open Sidenav'),
  CLOSE_SIDENAV:    type('[Layout] Close Sidenav'),
  TOGGLE_EDITABLE:  type('[Layout] Toggle editable'),
  TOGGLE_EXPANDED:  type('[Layout] Toggle expanded'),
  SET_MESSAGE:      type('[Layout] Set message')
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}

export class ToggleEditableAction implements Action {
  type = ActionTypes.TOGGLE_EDITABLE;
}

export class ToggleExpandedAction implements Action {
  type = ActionTypes.TOGGLE_EXPANDED;
}

export class SetMsgAction implements Action {
  type = ActionTypes.SET_MESSAGE;

  constructor(public payload: string) { }
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | ToggleEditableAction
  | ToggleExpandedAction
  | SetMsgAction;
