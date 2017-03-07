import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Claim, initialClaim } from './claim.model';
import * as claimActions from './claim.actions';
import { Entities, initialEntities } from '../entity/entity.model';
import * as layoutActions from '../layout/layout.actions';


export function reducer(state = initialEntities<Claim>({}, 'Claim', claimActions, initialClaim),
  action: claimActions.Actions | layoutActions.Actions): Entities<Claim> {
  let entities = {};

  let edits = {};
  switch (action.type) {
    case state.actionTypes.ReorderRebuttals:
      edits = { rebuttalsReordered: true }; break;
    case state.actionTypes.ToggleRebuttals:
      edits = { expanded: !action.payload.expanded }; break;
    default:
      edits = {};
  }
  action.payload && (action.payload = Object.assign(action.payload, edits));

  switch (action.type) {
    case state.actionTypes.Add:
    case state.actionTypes.AddSuccess:
    case state.actionTypes.LoadSuccess:
      return state.addLoadEntity(action);
    // make the same change to every entity
    case state.actionTypes.ToggleAllRebuttals:
      return state.updateAllEntities(action);
    case state.actionTypes.ReorderClaims:
      return Object.assign({}, state, { ids: action.payload });
    case state.actionTypes.ReorderRebuttals:
    case state.actionTypes.ToggleRebuttals:
      return state.updateEntity(action);
    default: {
      return state;
    }
  }

}

export const getEntities = (state: Entities<Claim>) => state.entities;

export const getIds = (state: Entities<Claim>) => state.ids;
