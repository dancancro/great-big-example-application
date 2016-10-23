import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Claim, initialClaim } from './claim.model';
import * as claim from './claim.actions';
import { Entities, initialEntities } from '../entity/entity.model';


export function reducer(state = initialEntities<Claim>(),
                        action: claim.Actions ): Entities<Claim> {
  let entities = {};

  switch (action.type) {

    case claim.ActionTypes.ADD_CLAIM: {
      return Object.assign({}, state, action.payload);
    }

    case claim.ActionTypes.LOAD_SUCCESS: {
      const claims = action.payload;
      const newClaims = claims.filter(claim => !state.entities[claim.id]);

      const newClaimIds = newClaims.map(claim => claim.id);
      const newClaimEntities =
        newClaims.reduce((entities: { [id: string]: Claim }, claim: Claim) => {
            return Object.assign(entities, {
              [claim.id]: claim
            });
      }, {});

      return Object.assign({}, initialEntities(), {
        ids: [ ...state.ids, ...newClaimIds ],
        entities: Object.assign({}, state.entities, newClaimEntities),
        selectedClaimId: state.selectedEntityId
      });
    }

    case claim.ActionTypes.REORDER_REBUTTALS:
    case claim.ActionTypes.ADD_REBUTTAL: {
      entities = Object.assign({}, state.entities, singleReducer(null, action));
      return Object.assign({}, initialEntities(), {
        ids: Object.keys(entities),
        entities: entities
      });
    }

    case claim.ActionTypes.TOGGLE_REBUTTALS: {
      return Object.assign({}, state, {
        entities: state.ids.map(id =>
          singleReducer(state.entities[id], action))
      });
    }

    default: {
      return state;
    }
  }

  // This reduces a single claim
  function singleReducer(state: Claim = initialClaim,
                          action: claim.Actions ): Claim {

    if (action.type == claim.ActionTypes.ADD_REBUTTAL) {
      return Object.assign({}, state, action.payload, {dirty: true});
    }

    if(state.id !== action.payload.claim.id) {
      return state;
    }

    if (action.type == claim.ActionTypes.TOGGLE_REBUTTALS) {
      return Object.assign({}, state, {expanded: !state.expanded});
    }

    if (action.type == claim.ActionTypes.REORDER_REBUTTALS) {
      return Object.assign({}, state, {rebuttalsReordered: true});
    }

  }


}



export function getClaimEntities(state$: Observable<Entities<Claim>>) {
  return state$.select(state => state.entities);
}

export function getClaimIds(state$: Observable<Entities<Claim>>) {
  return state$.select(state => state.ids);
}
