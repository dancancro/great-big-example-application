import { createSelector } from 'reselect';

import { Message, initialMessage } from './message.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Message> = initialEntities<Message>({}, slices.MESSAGE, actions, initialMessage),
    action: EntityAction<Message>): Entities<Message> {

    switch (action.type) {
        case typeFor(slices.MESSAGE, actions.ADD_SUCCESS):
            return functions.addSuccess<Message>(state, <any>action);
        case typeFor(slices.MESSAGE, actions.ADD_TEMP):
        case typeFor(slices.MESSAGE, actions.LOAD_SUCCESS):
            return functions.addToStore<Message>(state, <any>action);
        case typeFor(slices.MESSAGE, actions.PATCH):
        case typeFor(slices.MESSAGE, actions.PATCH_SUCCESS):
            return functions.update<Message>(state, <any>action);
        case typeFor(slices.MESSAGE, actions.DELETE):
            return functions.deleteEntity<Message>(state, <any>action);
        case typeFor(slices.MESSAGE, actions.DELETE_TEMP):
            return functions.deleteTemp<Message>(state, <any>action);
        case typeFor(slices.MESSAGE, actions.SELECT):
            return functions.select<Message>(state, <any>action);
        case typeFor(slices.MESSAGE, actions.SELECT_NEXT):
            return functions.selectNext<Message>(state, <any>action);
        default:
            return state;
    }
};

export const getEntities = (state: Entities<Message>) => state.entities;

export const getIds = (state: Entities<Message>) => state.ids;

export const getSelectedId = (state: Entities<Message>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});
