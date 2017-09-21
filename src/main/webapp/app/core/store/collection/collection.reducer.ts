import { createSelector } from 'reselect';
import { IDs, initialIDs } from '../id/id.model';
import { slices, typeFor } from '../util';
import * as idFunctions from '../id/id.functions';
import { actions } from '../id/id.actions';
import { SliceAction } from '../slice/slice.actions';

export function reducer(state = initialIDs(slices.COLLECTION),
    action: SliceAction): IDs {
    switch (action.type) {
        case typeFor(slices.COLLECTION, actions.LOAD_SUCCESS):
            return idFunctions.updateIDs(state, action);
        case typeFor(slices.COLLECTION, actions.ADD_SUCCESS):
        case typeFor(slices.COLLECTION, actions.DELETE_FAIL):
            return idFunctions.addID(state, action);
        case typeFor(slices.COLLECTION, actions.DELETE_SUCCESS):
        case typeFor(slices.COLLECTION, actions.ADD_FAIL):
            return idFunctions.deleteID(state, action);
        default: {
            return state;
        }
    }
}

export const getLoaded = (state: IDs) => state.loaded;

export const getLoading = (state: IDs) => state.loading;

export const getIds = (state: IDs) => state.ids;
