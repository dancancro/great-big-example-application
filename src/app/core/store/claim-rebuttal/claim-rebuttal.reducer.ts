import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
let uuid = require('node-uuid');

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import * as claimRebuttal from './claim-rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';


export function reducer(state = initialEntities<ClaimRebuttal>(),
  action: claimRebuttal.Actions): Entities<ClaimRebuttal> {
  let entities = {};
  let id: string;

  switch (action.type) {
    case claimRebuttal.ActionTypes.LOAD_SUCCESS:
      id = action.payload.id;
    case claimRebuttal.ActionTypes.ASSOCIATE_REBUTTAL: {
      id = id || uuid.v1();               // get a new id here
      entities = Object.assign({}, state.entities);
      entities[id] = claimRebuttalReducer(null, action);
      return Object.assign({}, initialClaimRebuttal, state, {
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
      case claimRebuttal.ActionTypes.ASSOCIATE_REBUTTAL: {
        return Object.assign({}, initialClaimRebuttal, { claimId: action.payload.claim.id, rebuttalId: uuid.v1(), dirty: false });
      }
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