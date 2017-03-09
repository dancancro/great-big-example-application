import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { createSelector } from 'reselect';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Crisis, initialCrisis } from './crisis.model';
import * as actions from './crisis.actions';
import { Entities, initialEntities } from '../entity/entity.model';

export function reducer(state: Entities<Crisis> = initialEntities<Crisis>({}, 'Crisis', actions, initialCrisis),
  action: actions.Actions): Entities<Crisis> {
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

export const getEntities = (state: Entities<Crisis>) => state.entities;

export const getIds = (state: Entities<Crisis>) => state.ids;

export const getSelectedId = (state: Entities<Crisis>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

