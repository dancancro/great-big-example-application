import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
let uuid = require('uuid');

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import * as actions from './claim-rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';


export function reducer(state = initialEntities<ClaimRebuttal>({}, 'Rebuttal', actions, initialClaimRebuttal),  // For this one we just need Entities.entities, not Entities.ids
  action: actions.Actions): Entities<ClaimRebuttal> {
  let entities = {};
  let id: string;
  let edits = {};

  switch (action.type) {
    case state.actionTypes.DisassociateRebuttal:
      var crid = Object.keys(entities).find(crid => {
        return state.entities[crid].claimId == (<any>action).payload.claim.id &&       // TODO: fix id string/number problem
          state.entities[crid].rebuttalId == (<any>action).payload.rebuttal.id;  // TODO: fix this typecast
      })
      if (crid) {
        edits = state.entities[crid];
      }
      break;
    default:
      edits = {};
  }
  action.payload && (action.payload = Object.assign(action.payload, edits));

  switch (action.type) {
    case state.actionTypes.Add:
    case state.actionTypes.AddSuccess:
    case state.actionTypes.LoadSuccess:
      return state.addLoadEntity(action);
    case state.actionTypes.DisassociateRebuttal:
      return state.deleteEntity(action);
    case state.actionTypes.ReorderRebuttals:
      entities = Object.assign({}, state.entities);
      for (let i = 0; i < action.payload.rebuttalIds.length; i++) {
        let cr = claimRebuttalFor(state.entities, action.payload.claim.id, action.payload.rebuttalIds[i]);
        entities[cr.id].sortOrder = i;
      }
      return Object.assign({}, state, { entities });  // we don't care about order of entire claimRebuttal array so don't update ids
    default: {
      return state;
    }
  }

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
