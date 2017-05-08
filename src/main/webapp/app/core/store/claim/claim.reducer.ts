import { Claim, initialClaim } from './claim.model';
import { actions, EntityAction } from '../entity/entity.actions';
import { Entities, initialEntities } from '../entity/entity.model';
import * as functions from '../entity/entity.functions';
import { slices } from '../util';
import { typeFor } from '../util';


export function reducer(state = initialEntities<Claim>({}, slices.CLAIM, actions, initialClaim),
  action: EntityAction<Claim>): Entities<Claim> {
  switch (action.type) {
    case typeFor(slices.CLAIM, actions.ADD):
    case typeFor(slices.CLAIM, actions.ADD_SUCCESS):
    case typeFor(slices.CLAIM, actions.LOAD_SUCCESS):
      return functions.addLoadEntity<Claim>(state, <any>action);
    case typeFor(slices.CLAIM, actions.UPDATE_EACH):
      return functions.updateEach<Claim>(state, <any>action);
    case typeFor(slices.CLAIM, actions.UPDATE):
      return functions.update<Claim>(state, <any>action);
    default: {
      return state;
    }
  }
}

export const getEntities = (state: Entities<Claim>) => state.entities;

export const getIds = (state: Entities<Claim>) => state.ids;
