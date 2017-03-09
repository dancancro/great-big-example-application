import { createSelector } from 'reselect';

import { Hero, initialHero } from './hero.model';
import * as actions from './hero.actions';
import { Entities, initialEntities } from '../entity/entity.model';

export function reducer(state: Entities<Hero> = initialEntities<Hero>({}, 'Hero', actions, initialHero),
  action: actions.Actions): Entities<Hero> {

  // console.log(JSON.stringify(action))

  switch (action.type) {
    case state.actionTypes.Add:
    case state.actionTypes.AddSuccess:
    case state.actionTypes.LoadSuccess:
      return state.addLoadEntity(action);
    case state.actionTypes.Update:
    case state.actionTypes.UpdateSuccess:
      return state.updateEntity(action);
    case state.actionTypes.Delete:
      return state.deleteEntity(action);
    case state.actionTypes.Select:
      return state.selectEntity(action);
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
