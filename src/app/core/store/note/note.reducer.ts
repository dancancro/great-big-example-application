import { createSelector } from 'reselect';

import { Note, initialNote } from './note.model';
import * as actions from './note.actions';
import { Entities, initialEntities } from '../entity/entity.model';

export function reducer(state: Entities<Note> = initialEntities<Note>({}, 'Note', actions, initialNote),
  action: actions.Actions): Entities<Note> {

  switch (action.type) {
    case state.actionTypes.Add:
    case state.actionTypes.AddSuccess:
    case state.actionTypes.LoadSuccess:
      return state.addLoadEntity(action);
    case state.actionTypes.Update:
    case state.actionTypes.UpdateSuccess:
      return state.updateEntity(action);
    case state.actionTypes.Delete:
      return state.deleteEntity(action);
    case state.actionTypes.Select:
      return state.selectEntity(action);
    default:
      return state;
  }
};

export const getEntities = (state: Entities<Note>) => state.entities;

export const getIds = (state: Entities<Note>) => state.ids;
