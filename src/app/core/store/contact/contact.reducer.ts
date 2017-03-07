import { createSelector } from 'reselect';

import { Contact, initialContact } from './contact.model';
import * as actions from './contact.actions';
import { Entities, initialEntities } from '../entity/entity.model';

export function reducer(state: Entities<Contact> = initialEntities<Contact>({ selectedEntityId: 21 }, 'Contact', actions, initialContact),
  action: actions.Actions): Entities<Contact> {

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
    case state.actionTypes.Next:
      let ix = 1 + state.ids.indexOf(state.selectedEntityId);
      if (ix >= state.ids.length) { ix = 0; }
      return Object.assign({}, state, { selectedEntityId: state.ids[ix] });
    default:
      return state;
  }
};

export const getEntities = (state: Entities<Contact>) => state.entities;

export const getIds = (state: Entities<Contact>) => state.ids;

export const getSelectedId = (state: Entities<Contact>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

