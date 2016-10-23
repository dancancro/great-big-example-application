import { Action } from '@ngrx/store';
import { type } from '../../../shared/util';

export const ActionTypes = {
  OPEN_SIDENAV:     type('[Layout] Open Sidenav'),
  CLOSE_SIDENAV:    type('[Layout] Close Sidenav'),
  TOGGLE_EDITABLE:  type('[Layout] Toggle editable'),
  TOGGLE_EXPANDED:  type('[Layout] Toggle expanded')
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}

export class ToggleEditableAction implements Action {
  type = ActionTypes.TOGGLE_EDITABLE;

  constructor() { }
}

export class ToggleExpandedAction implements Action {
  type = ActionTypes.TOGGLE_EXPANDED;

  constructor() { }
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | ToggleEditableAction
  | ToggleExpandedAction;
