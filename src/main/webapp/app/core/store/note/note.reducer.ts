import { createSelector } from 'reselect';

import { Note, initialNote } from './note.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Note> = initialEntities<Note>({}, slices.NOTE, actions, initialNote),
  action: EntityAction<Note>): Entities<Note> {

  switch (action.type) {
    case typeFor(slices.NOTE, actions.ADD):
    case typeFor(slices.NOTE, actions.ADD_SUCCESS):
    case typeFor(slices.NOTE, actions.LOAD_SUCCESS):
      return functions.addLoadEntity<Note>(state, <any>action);
    case typeFor(slices.NOTE, actions.UPDATE):
    case typeFor(slices.NOTE, actions.UPDATE_SUCCESS):
      return functions.update<Note>(state, <any>action);
    case typeFor(slices.NOTE, actions.DELETE):
      return functions.deleteEntity<Note>(state, <any>action);
    case typeFor(slices.NOTE, actions.SELECT):
      return functions.select<Note>(state, <any>action);
    default:
      return state;
  }
};

export const getEntities = (state: Entities<Note>) => state.entities;

export const getIds = (state: Entities<Note>) => state.ids;
