import { Action } from '@ngrx/store';
import { Note } from './note.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  ADD_NOTE:                type('[Notes] Add Note'),
  ADD_NOTE_SUCCESS:        type('[Notes] Add Note Success'),
  ADD_NOTE_FAIL:           type('[Notes] Add Note Fail'),
  UPDATE_NOTE_SUCCESS:     type('[Notes] Update Note Success'),
  UPDATE_NOTE_FAIL:        type('[Notes] Update Note Fail'),
  LOAD:                    type('[Notes] Load'),
  LOAD_SUCCESS:            type('[Notes] Load Success'),
  LOAD_FAIL:               type('[Notes] Load Fail'),
  UPDATE_NOTE_TEXT:        type('[Notes] Update Note Text'),
  UPDATE_NOTE_POSITION:    type('[Notes] Update Note Position')
};

export class AddNoteSuccessAction implements Action {
  type = ActionTypes.ADD_NOTE_SUCCESS;

  constructor(public payload: Note) { }
}

export class UpdateNoteSuccessAction implements Action {
  type = ActionTypes.UPDATE_NOTE_SUCCESS;

  constructor(public payload: any) { } // payload: { note }
}

export class UpdateNoteFailAction implements Action {
  type = ActionTypes.UPDATE_NOTE_FAIL;

  constructor() { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Note) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

export class AddNoteAction implements Action {
  type = ActionTypes.ADD_NOTE;

  constructor(public payload: Note) { }
}

export class UpdateNoteTextAction implements Action {
  type = ActionTypes.UPDATE_NOTE_TEXT;

  constructor(public payload: any) { }  // payload: {text: string, id: string}
}

export class UpdateNotePositionAction implements Action {
  type = ActionTypes.UPDATE_NOTE_POSITION;

  constructor(public payload: any) { } // payload: {left: number, right: number, id: string}
}

export type Actions
  = AddNoteSuccessAction
  | UpdateNoteSuccessAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | AddNoteAction
  | UpdateNoteTextAction
  | UpdateNotePositionAction;
