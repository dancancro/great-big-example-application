import { IDs, initialIDs } from '../id/id.model';
import { slices } from '../util';
import { actions, IDAction } from '../id/id.actions';
import { typeFor } from '../util';
import * as functions from '../id/id.functions';

export function reducer(state = initialIDs(), action: IDAction): IDs {
  switch (action.type) {
    case typeFor(slices.SEARCH, actions.LOAD):
      return functions.addLoadID(state, action);
    case typeFor(slices.SEARCH, actions.LOAD_SUCCESS):
      return functions.updateIDs(state, action);
    default: {
      return state;
    }
  }
}

export const getIds = (state: IDs) => state.ids;

export const getLoading = (state: IDs) => state.loading;
