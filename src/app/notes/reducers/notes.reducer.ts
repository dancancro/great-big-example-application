import { Action } from '@ngrx/store';

import { Note } from '../note.model';
import { note } from './note.reducer';

export const notes = (notes: Array<Note> = [], action: Action) => {
  switch(action.type){
    case "ADD_NOTE":
    case "ADD_NOTE_FROM_SERVER":
      return [...notes, note(null, action)]
    case "UPDATE_NOTE_TEXT":
    case "UPDATE_NOTE_FROM_SERVER":
    case "UPDATE_NOTE_POSITION":
      return notes.map(_note => note(_note, action));
    default:
      return notes;
  }
}