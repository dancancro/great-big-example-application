import { createSelector } from 'reselect';

import { SliceAction } from '../slice/slice.actions';
import { Tag, initialTag } from './tag.model';
import { slices } from '../util';
import * as entityFunctions from '../entity/entity.functions';
import { typeFor } from '../util';
import { Entities, initialEntities } from '../entity/entity.model';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Tag> = initialEntities<Tag>(
    slices.TAG, initialTag), action: EntityAction<Tag>): Entities<Tag> {

    switch (action.type) {
        case typeFor(slices.TAG, actions.LOAD_SUCCESS):
            return entityFunctions.addEntityToStore(state, <any>action);
        default:
            return state;
    }
};

export const getEntities = (state: Entities<Tag>) => {
    return state.entities;
};

export const getIds = (state: Entities<Tag>) => state.ids;
