import { Note } from './note.model';
import { Action, Reducer } from '@ngrx/store';

export const notes: Reducer<Array<Note>> = (notes: Array<Note> = [], action: Action) => {
  switch(action.type){
    //Actions initiated by the user/front end
    case "ADD_NOTE":
      return [
        ...notes,
        Object.assign({}, action.payload, {dirty: true})      
      ]
    case "UPDATE_NOTE_TEXT":
      return notes.map(note =>{
        if(note.id === action.payload.id){
          return Object.assign({}, note, {text: action.payload.text}, {dirty: true})
        } else {
          return note;
        }
      })

    //Actions initiated from the backend  
    case "ADD_NOTE_FROM_SERVER":
      return [
        ...notes,
        Object.assign({}, action.payload, {dirty: false})      
      ]
    case "UPDATE_NOTE_FROM_SERVER":
      return notes.map(note => {
        if(note.id === action.payload.note.id){
          return Object.assign({}, action.payload.note, {dirty: false})
        } else {
          return note;
        }
      })
    default:
      return notes;
  }
}