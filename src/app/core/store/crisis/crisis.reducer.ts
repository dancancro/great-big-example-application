import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Crisis, initialCrisis } from './crisis.model';
import * as crisis from './crisis.actions';
import { Entities, initialEntities } from '../entity/entity.model';

// This reduces a set of crises
export function reducer(state = initialEntities<Crisis>(),
  action: crisis.Actions): Entities<Crisis> {
  let entities = {};
  switch (action.type) {
    case crisis.ActionTypes.ADD_CRISIS:
    case crisis.ActionTypes.ADD_CRISIS_SUCCESS:
    case crisis.ActionTypes.LOAD_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = crisisReducer(null, action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities,
        loaded: true,
        loading: false,
      });
    case crisis.ActionTypes.UPDATE_CRISIS:
    case crisis.ActionTypes.UPDATE_CRISIS_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = crisisReducer(entities[action.payload.id], action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities
      });

    case crisis.ActionTypes.SELECT_CRISIS:
      return Object.assign({}, state, { selectedEntityId: action.payload })
    default:
      return state;
  }


  // This reduces a single crisis
  function crisisReducer(state: Crisis = null, action: crisis.Actions): Crisis {
    switch (action.type) {

      case crisis.ActionTypes.ADD_CRISIS:
        return Object.assign({}, action.payload, { dirty: true });
      case crisis.ActionTypes.UPDATE_CRISIS:
        if (state.id == action.payload.id) {
          return Object.assign({}, state, { text: action.payload.text }, { dirty: true });
        } else {
          return state;
        }
      case crisis.ActionTypes.ADD_CRISIS_SUCCESS:
      case crisis.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialCrisis, action.payload, { dirty: false });
      case crisis.ActionTypes.UPDATE_CRISIS_SUCCESS:
        if (state.id == action.payload.id) {
          return Object.assign({}, action.payload, { dirty: false });
        } else {
          return state;
        }
      default:
        return state;
    }
  };

};

export function getCrisisEntities(state$: Observable<Entities<Crisis>>) {
  return state$.select(state => state.entities);
}

export function getCrisisIds(state$: Observable<Entities<Crisis>>) {
  return state$.select(state => state.ids);
}

export function getSelectedCrisisId(state$: Observable<Entities<Crisis>>) {
  return state$.select(state => state.selectedEntityId);
}

export function getSelectedCrisis(state$: Observable<Entities<Crisis>>) {
  return combineLatest<{ [id: string]: Crisis }, string>(
    state$.let(getCrisisEntities),
    state$.let(getSelectedCrisisId)
  )
    .map(([entities, selectedCrisisId]) => entities[selectedCrisisId]);
}
