import { Note } from './note.model';
import { Action, Reducer } from '@ngrx/store';
import 'node-uuid';
declare let uuid;

export const notes: Reducer<Array<Note>> = (notes: Array<Note> = [], action: Action) => {
  switch(action.type){
    //Front end Actions
    case "ADD_NOTE":
      var newId = uuid.v1();  //TODO - use the newId in the new item
      console.log(`newId: ${newId}`);
      return [
        ...notes,
        Object.assign({}, action.payload, {dirty: true})      
      ]
    case "UPDATE_NOTE_TEXT":
      return notes.map(note =>{
        if(note.id === action.payload.id){
          return Object.assign({}, note, {text: action.payload.newText}, {dirty: true})
        } else {
          return note;
        }
      })

    //Back end actions  
    case "ADD_NOTE_FROM_SERVER":
      return [
        ...notes,
        Object.assign({}, action.payload, {dirty: false})      
      ]
    case "UPDATE_NOTE_FROM_SERVER":
      return notes.map(note =>{
        if(note === action.payload.originalNote){
          return Object.assign({}, action.payload.serverNote, {dirty: false})
        } else {
          return note;
        }
      })
    default:
      return notes;
  }
}