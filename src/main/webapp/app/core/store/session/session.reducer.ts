import { Session, initialSession } from './session.model';
import * as sliceFunctions from '../slice/slice.functions';
import { typeFor, slices, completeAssign } from '../util';
import { actions, SliceAction } from '../slice/slice.actions';
import { RootState } from '../';
import { ActionReducerMap } from '@ngrx/store';
import { Profile } from '../profile/profile.model';
import { User } from '../user/user.model';

export function reducer(state: Session = initialSession(), action: SliceAction): Session {
    const o = {};
    switch (action.type) {

        case typeFor(slices.SESSION, actions.LOAD):
            return sliceFunctions.load(state, action);
        case typeFor(slices.SESSION, actions.LOAD_SUCCESS):
            return sliceFunctions.loadSuccess(state, action);
        case typeFor(slices.SESSION, actions.LOAD_FAIL):
            return sliceFunctions.loadFail(state, action);
        case typeFor(slices.SESSION, actions.UPDATE):
            return sliceFunctions.update(state, action);
        default:
            return state;
    }
}

export const hasError = (state: Session) => state.hasError;

export const isLoading = (state: Session) => state.loading;

export const loggedIn = (state: Session) => !!state.token;

export const loggedOut = (state: Session) => !state.token;

export const getFirstName = (state: Session) => state.account.firstName;

export const getLastName = (state: Session) => state.account.lastName;

export const getCurrentUser = (state: Session) =>
    completeAssign({},
        state.account,
        { fullName: state.account.firstName + ' ' + state.account.lastName });
