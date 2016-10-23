import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Note, initialNote } from './note.model';
import * as note from './note.actions';
import { Entities, initialEntities } from '../entity/entity.model';

// This reduces a set of notes
export function reducer(state = initialEntities<Note>(),
                        action: note.Actions ): Entities<Note> {
  let entities = {};
  switch (action.type) {
    case note.ActionTypes.ADD_NOTE:
    case note.ActionTypes.ADD_NOTE_SUCCESS:
    case note.ActionTypes.LOAD_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = noteReducer(null, action);
      return {
        ids: Object.keys(entities),
        entities: entities
      };
    case note.ActionTypes.UPDATE_NOTE_TEXT:
    case note.ActionTypes.UPDATE_NOTE_POSITION:
    case note.ActionTypes.UPDATE_NOTE_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = noteReducer(entities[action.payload.id], action);
      return {
        ids: Object.keys(entities),
        entities: entities
      };        // state,
      // return Object.assign({},
        // { entities: Object.assign({}, state.entities, noteReducer(action.payload, action))});
    default:
      return state;
  }


  // This reduces a single note
  function noteReducer(state: Note = null, action: note.Actions): Note {
    switch (action.type) {

      case note.ActionTypes.ADD_NOTE:
        return Object.assign({}, action.payload, {dirty: true});
      case note.ActionTypes.UPDATE_NOTE_TEXT:
        if (state.id == action.payload.id) {
          return Object.assign({}, state, {text: action.payload.text}, {dirty: true});
        } else {
          return state;
        }
      case note.ActionTypes.UPDATE_NOTE_POSITION:
        if (state.id == action.payload.id) {
          return Object.assign(
            {},
            state,
            {left: action.payload.left, top: action.payload.top},
            {dirty: true});
        } else {
          return state;
        }
      case note.ActionTypes.ADD_NOTE_SUCCESS:
      case note.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialNote, action.payload, {dirty: false});
      case note.ActionTypes.UPDATE_NOTE_SUCCESS:
        if (state.id == action.payload.id) {
          return Object.assign({}, action.payload, {dirty: false});
        } else {
          return state;
        }
      default:
        return state;
    }
  };

};

export function getNoteEntities(state$: Observable<Entities<Note>>) {
  return state$.select(state => state.entities);
}

export function getNoteIds(state$: Observable<Entities<Note>>) {
  return state$.select(state => state.ids);
}
