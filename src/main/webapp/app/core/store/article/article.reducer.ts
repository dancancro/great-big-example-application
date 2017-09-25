import { createSelector } from 'reselect';

import { Article, initialArticle } from './article.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as entityFunctions from '../entity/entity.functions';
import * as sliceFunctions from '../slice/slice.functions';
import { EntityAction } from '../entity/entity.actions';
import * as EntityActions from '../entity/entity.actions';
import { actions } from '../entity/entity.actions';
import { typeFor, PayloadAction, PayloadActions, completeAssign } from '../util';

export function reducer(state: Entities<Article> = initialEntities<Article>(slices.ARTICLE, initialArticle),
    action: EntityAction<Article>): Entities<Article> {

    switch (action.type) {
        case typeFor(slices.ARTICLE, actions.ADD_SUCCESS):
        case typeFor(slices.ARTICLE, actions.ADD_TEMP):
        case typeFor(slices.ARTICLE, actions.DELETE_FAIL):
        case typeFor(slices.ARTICLE, actions.LOAD_SUCCESS):
            return entityFunctions.addEntityToStore<Article>(state, <any>action);
        case typeFor(slices.ARTICLE, actions.DELETE):
        case typeFor(slices.ARTICLE, actions.DELETE_FAIL):
        case typeFor(slices.ARTICLE, actions.PATCH):
        case typeFor(slices.ARTICLE, actions.PATCH_SUCCESS):
        case typeFor(slices.ARTICLE, actions.UPDATE):
        case typeFor(slices.ARTICLE, actions.UPDATE_SUCCESS):
            return entityFunctions.update(state, <any>action);
        case typeFor(slices.ARTICLE, actions.DELETE_TEMP):
            return entityFunctions.deleteTemp<Article>(state, <any>action);
        case typeFor(slices.ARTICLE, actions.DELETE_SUCCESS):
            return entityFunctions.deleteEntity<Article>(state, <any>action);
        case typeFor(slices.ARTICLE, actions.SELECT):
            return entityFunctions.select<Article>(state, <any>action);
        case typeFor(slices.ARTICLE, actions.UNLOAD):
            return entityFunctions.unload<Article>(state, <any>action);
        case typeFor(slices.PROFILE, actions.PATCH):
            const entities = completeAssign({}, state.entities);
            for (const id of Object.keys(entities).filter((id) => (<Article>entities[id]).author.username === action.payload.id)) {
                entities[id].author.following = action.payload.following;
            }
            return completeAssign({}, state, {
                entities
            });
        default:
            return state;
    }
};

export const getEntities = (state: Entities<Article>): { [id: string]: Article } => state.entities;

export const getIds = (state: Entities<Article>): string[] => state.ids;

export const getSelectedId = (state: Entities<Article>): string => state.selectedEntityId;

export const getLoading = (state: Entities<Article>): boolean => state.loading;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getTemp = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[EntityActions.TEMP]
});
