import { createSelector } from 'reselect';

import { Contact, initialContact } from './contact.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';

export function reducer(state: Entities<Contact> = initialEntities<Contact>({}, slices.CONTACT, actions, initialContact),
  action: EntityAction<Contact>): Entities<Contact> {

  switch (action.type) {
    case typeFor(slices.CONTACT, actions.ADD):
    case typeFor(slices.CONTACT, actions.ADD_SUCCESS):
    case typeFor(slices.CONTACT, actions.LOAD_SUCCESS):
      return functions.addLoadEntity<Contact>(state, <any>action);
    case typeFor(slices.CONTACT, actions.UPDATE):
    case typeFor(slices.CONTACT, actions.UPDATE_SUCCESS):
      return functions.update<Contact>(state, <any>action);
    case typeFor(slices.CONTACT, actions.DELETE):
      return functions.deleteEntity<Contact>(state, <any>action);
    case typeFor(slices.CONTACT, actions.SELECT):
      return functions.select<Contact>(state, <any>action);
    case typeFor(slices.CONTACT, actions.SELECT_NEXT):
      return functions.selectNext<Contact>(state, <any>action);
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

