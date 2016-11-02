import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Claim, initialClaim } from './claim.model';
import * as claim from './claim.actions';
import { Entities, initialEntities } from '../entity/entity.model';


export function reducer(state = initialEntities<Claim>(),
    action: claim.Actions): Entities<Claim> {
    let entities = {};

    switch (action.type) {

        case claim.ActionTypes.ADD_CLAIM: {
            return Object.assign({}, state, action.payload);
        }

        case claim.ActionTypes.LOAD_SUCCESS: {
            entities = Object.assign({}, state.entities);
            entities[action.payload.id] = singleReducer(null, action);
            return Object.assign({}, state, {
                ids: Object.keys(entities),
                entities: entities,
                loaded: true,
                loading: false,
            });
        }

        case claim.ActionTypes.REORDER_REBUTTALS:
        case claim.ActionTypes.ADD_REBUTTAL:
        case claim.ActionTypes.TOGGLE_REBUTTALS: {
            entities = Object.assign({}, state.entities);
            entities[action.payload.id] = singleReducer(entities[action.payload.id], action);
            let newState = Object.assign({}, state, {
                entities: entities
            });
            return newState;
        }

        default: {
            return state;
        }
    }

    // This reduces a single claim
    function singleReducer(state: Claim = initialClaim,
        action: claim.Actions): Claim {


        switch (action.type) {

            case claim.ActionTypes.LOAD_SUCCESS:
                return Object.assign({}, initialClaim, action.payload, { dirty: false });

            case claim.ActionTypes.ADD_REBUTTAL:
                if (action.payload.id === state.id) {
                    return Object.assign({}, state, { dirty: true });
                } else {
                    return state;
                }

            case claim.ActionTypes.TOGGLE_REBUTTALS:
                if (action.payload.id === state.id) {
                    return Object.assign({}, state, { expanded: !state.expanded });
                } else {
                    return state;
                }

            case claim.ActionTypes.REORDER_REBUTTALS:
                if (action.payload.id === state.id) {
                    return Object.assign({}, state, { rebuttalsReordered: true });
                } else {
                    return state;
                }

            default:
                return state;

        }

    }
}


export function getClaimEntities(state$: Observable<Entities<Claim>>) {
    return state$.select(state => state.entities);
}

export function getClaimIds(state$: Observable<Entities<Claim>>) {
    return state$.select(state => state.ids);
}
