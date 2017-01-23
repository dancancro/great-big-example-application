import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
let uuid = require('node-uuid');

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import * as claimRebuttal from './claim-rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';


export function reducer(state = initialEntities<ClaimRebuttal>(),  // For this one we just need Entities.entities, not Entities.ids
  action: claimRebuttal.Actions): Entities<ClaimRebuttal> {
  let entities = {};
  let id: string;

  switch (action.type) {

    // delete one entity
    case claimRebuttal.ActionTypes.DISASSOCIATE_REBUTTAL: {
      entities = Object.assign({}, state.entities);
      let ids = state.ids;
      var crid = Object.keys(entities).find(crid => {
        return state.entities[crid].claimId == (<any>action).payload.claim.id &&       // TODO: fix id string/number problem
          state.entities[crid].rebuttalId == (<any>action).payload.rebuttal.id;  // TODO: fix this typecast 
      })
      if (crid) {
        delete entities[crid];
        let i = ids.findIndex(id => id == crid);
        ids = [...ids.splice(0, i), ...ids.splice(i + 1)];
      }
      return Object.assign({}, state, {
        entities: entities,
        ids: ids
      });
    }

    // update all claimRebuttals for a claim
    case claimRebuttal.ActionTypes.REORDER_REBUTTALS: {
      entities = Object.assign({}, state.entities);
      for (let i = 0; i < action.payload.rebuttalIds.length; i++) {
        let cr = claimRebuttalFor(state.entities, action.payload.claim.id, action.payload.rebuttalIds[i]);
        entities[cr.id].sortOrder = i;
      }
      return Object.assign({}, state, { entities });  // we don't care about order of entire claimRebuttal array so don't update ids
    }

    // operate on one entity
    case claimRebuttal.ActionTypes.LOAD_SUCCESS:
    case claimRebuttal.ActionTypes.ASSOCIATE_REBUTTAL: {
      id = action.payload.id;
      entities = Object.assign({}, state.entities);
      entities[id] = claimRebuttalReducer(null, action);
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

  function claimRebuttalReducer(state: ClaimRebuttal = initialClaimRebuttal(),
    action: claimRebuttal.Actions): ClaimRebuttal {
    switch (action.type) {
      case claimRebuttal.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialClaimRebuttal(), action.payload, { dirty: false });
      case claimRebuttal.ActionTypes.ASSOCIATE_REBUTTAL: {
        return Object.assign({}, initialClaimRebuttal(), action.payload);
      }
      default:
        return state;
    }
  };

  function claimRebuttalFor(entities, claimId, rebuttalId) {

    for (let id in entities) {
      if (entities[id].claimId == claimId && entities[id].rebuttalId == rebuttalId) {  // TODO: one of these is a string and one is a number. figure that out

        return entities[id];
      }
    }
  }
};

export const getEntities = (state: Entities<ClaimRebuttal>) => state.entities;

export const getIds = (state: Entities<ClaimRebuttal>) => state.ids;
