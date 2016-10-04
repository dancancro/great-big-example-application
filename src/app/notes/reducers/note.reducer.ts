import { Action } from '@ngrx/store';

import { Note } from '../../index';

export const note = (n: Note = null, action: Action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return Object.assign({}, action.payload, {dirty: true});
    case 'UPDATE_NOTE_TEXT':
      if (n.id == action.payload.id) {
        return Object.assign({}, n, {text: action.payload.text}, {dirty: true});
      } else {
        return n;
      }
    case 'UPDATE_NOTE_POSITION':
      if (n.id == action.payload.id) {
        return Object.assign(
          {},
          n,
          {left: action.payload.left, top: action.payload.top},
          {dirty: true});
      } else {
        return n;
      }
    case 'ADD_NOTE_FROM_SERVER':
      return Object.assign({}, action.payload, {dirty: false});
    case 'UPDATE_NOTE_FROM_SERVER':
      if (n.id == action.payload.note.id) {
        return Object.assign({}, action.payload.note, {dirty: false});
      } else {
        return n;
      }
    default:
      return n;
  }
};
