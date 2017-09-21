import { createSelector } from 'reselect';

import { Comment, initialComment } from './comment.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as entityFunctions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';
import * as EntityActions from '../entity/entity.actions';

export function reducer(state: Entities<Comment> = initialEntities<Comment>(slices.COMMENT, initialComment),
    action: EntityAction<Comment>): Entities<Comment> {

    switch (action.type) {
        case typeFor(slices.COMMENT, actions.ADD_SUCCESS):
        case typeFor(slices.COMMENT, actions.ADD_TEMP):
        case typeFor(slices.COMMENT, actions.LOAD_SUCCESS):
            return entityFunctions.addEntityToStore<Comment>(state, <any>action);
        // case typeFor(slices.COMMENT, actions.UPDATE):
        // case typeFor(slices.COMMENT, actions.UPDATE_SUCCESS):
        //     return entityFunctions.update<Comment>(state, <any>action);
        case typeFor(slices.COMMENT, actions.DELETE):
            return entityFunctions.deleteEntity<Comment>(state, <any>action);
        // case typeFor(slices.COMMENT, actions.DELETE_TEMP):
        //     return entityFunctions.deleteTemp<Comment>(state, <any>action);
        case typeFor(slices.COMMENT, actions.SELECT):
            return entityFunctions.select<Comment>(state, <any>action);
        case typeFor(slices.COMMENT, actions.RESTORE_TEMP):
            return entityFunctions.update<Comment>(state, <any>action);
        // case typeFor(slices.COMMENT, actions.SELECT_NEXT):
        //     return entityFunctions.selectNext<Comment>(state, <any>action);
        default:
            return state;
    }
};

export const getEntities = (state: Entities<Comment>) => state.entities;

export const getIds = (state: Entities<Comment>) => state.ids;

export const getSelectedId = (state: Entities<Comment>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getCleanTemp = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    if (entities[EntityActions.TEMP] && !entities[EntityActions.TEMP].dirty) {
        return entities[EntityActions.TEMP];
    } else {
        return undefined;
    }
});
