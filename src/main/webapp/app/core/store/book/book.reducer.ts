import { createSelector } from 'reselect';

import { Book, initialBook } from './book.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as entityFunctions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions } from '../entity/entity.actions';
import { EntityAction } from '../entity/entity.actions';
import { SliceAction } from '../slice/slice.actions';

export function reducer(state: Entities<Book> = initialEntities<Book>(slices.BOOK, initialBook),
  action: EntityAction<Book> | SliceAction): Entities<Book> {
  // console.log(`${action.type}`);
  switch (action.type) {
    case typeFor(slices.SEARCH, actions.ASYNC_SUCCESS):
    case typeFor(slices.COLLECTION, actions.LOAD_SUCCESS):
      return entityFunctions.union(state, <any>action);
    case typeFor(slices.BOOK, actions.LOAD):
      return entityFunctions.addEntityToStore<Book>(state, <any>action);
    case typeFor(slices.BOOK, actions.SELECT):
      return entityFunctions.select<Book>(state, <any>action);
    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: Entities<Book>) => state.entities;

export const getIds = (state: Entities<Book>) => state.ids;

export const getSelectedId = (state: Entities<Book>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map((id) => entities[id]);
});
