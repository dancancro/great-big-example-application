import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Claim, initialClaim } from './claim.model';
import * as claim from './claim.actions';
import { Entities, initialEntities } from '../entity/entity.model';
import * as layout from '../layout/layout.actions';


export function reducer(state = initialEntities<Claim>(),
  action: claim.Actions | layout.Actions): Entities<Claim> {
  let entities = {};

  switch (action.type) {

    // make the same change to every entity
    case claim.ActionTypes.TOGGLE_ALL_REBUTTALS: {
      let id: string;
      entities = Object.assign({}, state.entities);
      for (id in entities) {
        entities[id].expanded = action.payload;
      }
      return Object.assign({}, state, {
        entities: entities
      });
    }

    case claim.ActionTypes.REORDER_CLAIMS:
      return Object.assign({}, state, { ids: action.payload });

    // add one entity
    case claim.ActionTypes.ADD_CLAIM:
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

    // change one entity
    case claim.ActionTypes.REORDER_REBUTTALS:
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

      case claim.ActionTypes.ADD_CLAIM:
        return Object.assign({}, action.payload, { dirty: true });

      case claim.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialClaim, action.payload, { dirty: false });

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
