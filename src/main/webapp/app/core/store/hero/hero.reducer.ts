import { createSelector } from 'reselect';

import { Hero, initialHero } from './hero.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Hero> = initialEntities<Hero>({}, slices.HERO, actions, initialHero),
  action: EntityAction<Hero>): Entities<Hero> {

  switch (action.type) {
    case typeFor(slices.HERO, actions.ADD):
    case typeFor(slices.HERO, actions.ADD_SUCCESS):
    case typeFor(slices.HERO, actions.LOAD_SUCCESS):
      return functions.addLoadEntity<Hero>(state, <any>action);
    case typeFor(slices.HERO, actions.UPDATE):
    case typeFor(slices.HERO, actions.UPDATE_SUCCESS):
      return functions.update<Hero>(state, <any>action);
    case typeFor(slices.HERO, actions.DELETE):
      return functions.deleteEntity<Hero>(state, <any>action);
    case typeFor(slices.HERO, actions.SELECT):
      return functions.select<Hero>(state, <any>action);
    default:
      return state;
  }
};

export const getEntities = (state: Entities<Hero>) => state.entities;

export const getIds = (state: Entities<Hero>) => state.ids;

export const getSelectedId = (state: Entities<Hero>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});
