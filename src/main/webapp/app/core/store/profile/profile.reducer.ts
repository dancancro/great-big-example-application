import { createSelector } from 'reselect';

import { Profile, initialProfile } from './profile.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as entityFunctions from '../entity/entity.functions';
import { typeFor, completeAssign } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Profile> = initialEntities<Profile>(slices.PROFILE, initialProfile),
    action: EntityAction<Profile>): Entities<Profile> {
    let entities;
    let newProfile;
    let newState;
    switch (action.type) {
        case typeFor(slices.PROFILE, actions.ADD_SUCCESS):
        case typeFor(slices.PROFILE, actions.LOAD_SUCCESS):
            return entityFunctions.addEntityToStore<Profile>(state, <any>action);
        case typeFor(slices.PROFILE, actions.SELECT):
            return entityFunctions.select<Profile>(state, <any>action);
        case typeFor(slices.PROFILE, actions.PATCH):
        case typeFor(slices.PROFILE, actions.PATCH_SUCCESS):
        case typeFor(slices.PROFILE, actions.UPDATE):
        case typeFor(slices.PROFILE, actions.UPDATE_SUCCESS):
            return entityFunctions.update(state, <any>action);

        case typeFor(slices.SESSION, actions.LOAD_SUCCESS):
            // add a profile entity whenever a session is loaded
            entities = completeAssign({}, state.entities);
            const account = action.payload.account;

            newProfile = completeAssign({}, initialProfile,
                {
                    username: account.login,
                    bio: '',
                    image: account.imageUrl,
                    following: false
                });
            entities[newProfile.id] = newProfile;
            newState = completeAssign({}, state, {
                ids: Object.keys(entities),
                entities
            });
            return newState;
        case typeFor(slices.ARTICLE, actions.LOAD_SUCCESS):
            // add a profile entity whenever an article is loaded
            entities = completeAssign({}, state.entities);
            newProfile = completeAssign({}, initialProfile, action.payload.author);
            entities[newProfile.id] = newProfile;
            newState = completeAssign({}, state, {
                ids: Object.keys(entities),
                entities
            });
            return newState;
        default:
            return state;
    }
};

export const getEntities = (state: Entities<Profile>) => state.entities;

export const getIds = (state: Entities<Profile>) => state.ids.filter((id) => !state.entities[id].deleteMe);

export const getSelectedId = (state: Entities<Profile>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});
