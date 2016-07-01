import { Action } from '@ngrx/store';

import { Note } from '../../index';

export const note = (note: Note = null, action: Action) => {
  switch(action.type){
    case "ADD_NOTE":
      return Object.assign({}, action.payload);
    case "UPDATE_NOTE_TEXT":
      console.log(`UPDATE_NOTE_TEXT note.id:${note.id} action.payload.id:${action.payload.id}`);
      if(note.id == action.payload.id){
        return Object.assign({}, note, {text: action.payload.text})
      } else {
        return note;
      }
    case "UPDATE_NOTE_POSITION":
      if(note.id == action.payload.id){
        return Object.assign({}, note, {left: action.payload.left, top: action.payload.top})
      } else {
        return note;
      }
    default:
      return note;
  }
}