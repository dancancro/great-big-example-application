import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
let uuid = require('uuid');

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import { Entities, initialEntities } from '../entity/entity.model';
import * as entityFunctions from '../entity/entity.functions';
import * as sliceFunctions from '../slice/slice.functions';
import { slices, typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';


export function reducer(state: Entities<ClaimRebuttal> = initialEntities<ClaimRebuttal>({},
  slices.CLAIM_REBUTTAL, actions, initialClaimRebuttal),
  action: EntityAction<ClaimRebuttal>): Entities<ClaimRebuttal> {
  let entities = {};


  switch (action.type) {
    case typeFor(slices.CLAIM_REBUTTAL, actions.ADD):
    case typeFor(slices.CLAIM_REBUTTAL, actions.ADD_SUCCESS):
    case typeFor(slices.CLAIM_REBUTTAL, actions.LOAD_SUCCESS):
      return entityFunctions.addLoadEntity<ClaimRebuttal>(state, <any>action);
    case typeFor(slices.CLAIM_REBUTTAL, actions.DELETE):
      return entityFunctions.deleteEntity<ClaimRebuttal>(state, <any>action);
    case typeFor(slices.CLAIM_REBUTTAL, actions.UPDATE):
      return sliceFunctions.update(state, <any>action); //  TODO This could be a problem. We are only updating the CR slice... for now...
    default: {
      return state;
    }
  }

};

export const getEntities = (state: Entities<ClaimRebuttal>) => state.entities;

export const getIds = (state: Entities<ClaimRebuttal>) => state.ids;
