import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import * as claimRebuttal from './claim-rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';


export function reducer(state = initialEntities<ClaimRebuttal>(),
    action: claimRebuttal.Actions): Entities<ClaimRebuttal> {
    let entities = {};

    switch (action.type) {
        case claimRebuttal.ActionTypes.LOAD_SUCCESS: {
            entities = Object.assign({}, state.entities);
            entities[action.payload.id] = claimRebuttalReducer(null, action);
            return Object.assign({}, state, {
                ids: Object.keys(entities),
                entities: entities,
                loaded: true,
                loading: false,
            });
        }

        default: {
            return state;
        }
    }

    function claimRebuttalReducer(state: ClaimRebuttal = initialClaimRebuttal,
        action: claimRebuttal.Actions): ClaimRebuttal {
        switch (action.type) {
            case claimRebuttal.ActionTypes.LOAD_SUCCESS:
                return Object.assign({}, initialClaimRebuttal, action.payload, { dirty: false });
            default:
                return state;
        }
    };

};


export function getClaimRebuttalEntities(state$: Observable<Entities<ClaimRebuttal>>) {
    return state$.select(state => state.entities);
}

export function getClaimRebuttalIds(state$: Observable<Entities<ClaimRebuttal>>) {
    return state$.select(state => state.ids);
}