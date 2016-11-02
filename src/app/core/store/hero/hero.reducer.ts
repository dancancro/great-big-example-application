import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Hero, initialHero } from './hero.model';
import * as hero from './hero.actions';
import { Entities, initialEntities } from '../entity/entity.model';

// This reduces a set of heroes
export function reducer(state = initialEntities<Hero>(),
  action: hero.Actions): Entities<Hero> {
  let entities = {};
  switch (action.type) {
    case hero.ActionTypes.ADD_HERO:
    case hero.ActionTypes.ADD_HERO_SUCCESS:
    case hero.ActionTypes.LOAD_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = heroReducer(null, action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities,
        loaded: true,
        loading: false,
      });
    case hero.ActionTypes.UPDATE_HERO:
    case hero.ActionTypes.UPDATE_HERO_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = heroReducer(entities[action.payload.id], action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities
      });
    case hero.ActionTypes.SELECT_HERO:
      return Object.assign({}, state, {
        selectedEntityId: action.payload.id
      });
    default:
      return state;
  }


  // This reduces a single hero
  function heroReducer(state: Hero = null, action: hero.Actions): Hero {
    switch (action.type) {

      case hero.ActionTypes.ADD_HERO:
        return Object.assign({}, action.payload, { dirty: true });
      case hero.ActionTypes.UPDATE_HERO:
        if (state.id == action.payload.id) {
          return Object.assign({}, state, { text: action.payload.text }, { dirty: true });
        } else {
          return state;
        }
      case hero.ActionTypes.ADD_HERO_SUCCESS:
      case hero.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialHero, action.payload, { dirty: false });
      case hero.ActionTypes.UPDATE_HERO_SUCCESS:
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

export function getHeroEntities(state$: Observable<Entities<Hero>>) {
  return state$.select(state => state.entities);
}

export function getHeroIds(state$: Observable<Entities<Hero>>) {
  return state$.select(state => state.ids);
}

export function getSelectedHero(state$: Observable<Entities<Hero>>) {
  return state$.select(state => state.entities[state.selectedEntityId]);
}
