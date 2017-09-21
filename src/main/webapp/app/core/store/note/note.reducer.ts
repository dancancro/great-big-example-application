import { createSelector } from 'reselect';

import { Note, initialNote } from './note.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as entityFunctions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Note> = initialEntities<Note>(slices.NOTE, initialNote),
    action: EntityAction<Note>): Entities<Note> {

    switch (action.type) {
        case typeFor(slices.NOTE, actions.ADD_SUCCESS):
        case typeFor(slices.NOTE, actions.ADD_TEMP):
        case typeFor(slices.NOTE, actions.ADD_OPTIMISTICALLY):
        case typeFor(slices.NOTE, actions.LOAD_SUCCESS):
            return entityFunctions.addEntityToStore<Note>(state, <any>action);
        case typeFor(slices.NOTE, actions.PATCH):
        case typeFor(slices.NOTE, actions.PATCH_SUCCESS):
        case typeFor(slices.NOTE, actions.DELETE):
        case typeFor(slices.NOTE, actions.DELETE_FAIL):
            return entityFunctions.update<Note>(state, <any>action);
        case typeFor(slices.NOTE, actions.DELETE_SUCCESS):
            return entityFunctions.deleteEntity<Note>(state, <any>action);
        case typeFor(slices.NOTE, actions.SELECT):
            return entityFunctions.select<Note>(state, <any>action);
        default:
            return state;
    }
};

export const getEntities = (state: Entities<Note>) => state.entities;

export const getIds = (state: Entities<Note>) => state.ids.filter((id) => !state.entities[id].deleteMe);
