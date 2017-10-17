import { Observable } from 'rxjs/Observable';

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import { Entities, initialEntities } from '../entity/entity.model';
import * as entityFunctions from '../entity/entity.functions';
import * as sliceFunctions from '../slice/slice.functions';
import { slices, typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<ClaimRebuttal> = initialEntities<ClaimRebuttal>(
    slices.CLAIM_REBUTTAL, initialClaimRebuttal),
    action: EntityAction<ClaimRebuttal>): Entities<ClaimRebuttal> {
    const entities = {};

    switch (action.type) {
        case typeFor(slices.CLAIM_REBUTTAL, actions.ADD_SUCCESS):
        case typeFor(slices.CLAIM_REBUTTAL, actions.ADD_TEMP):
            return entityFunctions.addEntityToStore<ClaimRebuttal>(state, <any>action);
        case typeFor(slices.CLAIM_REBUTTAL, actions.ASYNC_SUCCESS):
            return entityFunctions.addEntitiesToStore(state, <any>action);
        case typeFor(slices.CLAIM_REBUTTAL, actions.DELETE):
            return entityFunctions.deleteEntity<ClaimRebuttal>(state, <any>action);
        case typeFor(slices.CLAIM_REBUTTAL, actions.DELETE_TEMP):
            return entityFunctions.deleteTemp<ClaimRebuttal>(state, <any>action);
        case typeFor(slices.CLAIM_REBUTTAL, actions.UPDATE):
            return sliceFunctions.patch(state, <any>action); //  TODO This could be a problem. We are only updating the CR slice... for now...
        default: {
            return state;
        }
    }

};

export const getEntities = (state: Entities<ClaimRebuttal>) => state.entities;

export const getIds = (state: Entities<ClaimRebuttal>) => state.ids;
