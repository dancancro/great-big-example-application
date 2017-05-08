import { createSelector } from 'reselect';
import { IDs, initialIDs } from '../id/id.model';
import { slices, typeFor } from '../util';
import * as functions from '../id/id.functions';
import { actions } from '../id/id.actions';
import { IDAction } from '../id/id.actions';

export function reducer(state = initialIDs(),
  action: IDAction): IDs {
  switch (action.type) {
    case typeFor(slices.COLLECTION, actions.LOAD):
      return functions.addLoadID(state, action);
    case typeFor(slices.COLLECTION, actions.LOAD_SUCCESS):
      return functions.updateIDs(state, action);
    case typeFor(slices.COLLECTION, actions.ADD_SUCCESS):
    case typeFor(slices.COLLECTION, actions.DELETE_FAIL):
      return functions.addID(state, action);
    case typeFor(slices.COLLECTION, actions.DELETE_SUCCESS):
    case typeFor(slices.COLLECTION, actions.ADD_FAIL):
      return functions.deleteID(state, action);
    default: {
      return state;
    }
  }
}


export const getLoaded = (state: IDs) => state.loaded;

export const getLoading = (state: IDs) => state.loading;

export const getIds = (state: IDs) => state.ids;
