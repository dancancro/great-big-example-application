import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import * as claimRebuttal from './claim-rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';


export function reducer(state = initialEntities<ClaimRebuttal>(),
                        action: claimRebuttal.Actions ): Entities<ClaimRebuttal> {
  let entities = {};

  switch (action.type) {


    case claimRebuttal.ActionTypes.LOAD_SUCCESS: {
      const claimRebuttals = action.payload;
      const newClaimRebuttals = claimRebuttals.filter(claimRebuttal => !state.entities[claimRebuttal.id]);

      const newClaimRebuttalIds = newClaimRebuttals.map(claim => claim.id);
      const newClaimRebuttalEntities =
        newClaimRebuttals.reduce((entities: { [id: string]: ClaimRebuttal }, claimRebuttal: ClaimRebuttal) => {
            return Object.assign(entities, {
              [claimRebuttal.id]: claimRebuttal
            });
      }, {});

      return Object.assign({}, initialEntities(), {
        ids: [ ...state.ids, ...newClaimRebuttalIds ],
        entities: Object.assign({}, state.entities, newClaimRebuttalEntities)
      });
    }

    default: {
      return state;
    }
  }

}


export function getClaimRebuttalEntities(state$: Observable<Entities<ClaimRebuttal>>) {
  return state$.select(state => state.entities);
}

export function getClaimRebuttalIds(state$: Observable<Entities<ClaimRebuttal>>) {
  return state$.select(state => state.ids);
}