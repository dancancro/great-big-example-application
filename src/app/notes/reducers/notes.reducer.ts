import { Action } from '@ngrx/store';

import { Note } from '../../index';
import { note } from './note.reducer';

export const notes = (ns: Array<Note> = [], action: Action) => {
  switch (action.type) {
    case 'ADD_NOTE':
    case 'ADD_NOTE_FROM_SERVER':
      return [...ns, note(null, action)];
    case 'UPDATE_NOTE_TEXT':
    case 'UPDATE_NOTE_POSITION':
    case 'UPDATE_NOTE_FROM_SERVER':
      return ns.map(n => note(n, action));
    default:
      return ns;
  }
};
