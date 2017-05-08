import { Session, initialSession } from './session.model';
import * as functions from '../slice/slice.functions';
import { typeFor, slices } from '../util';
import { actions, SliceAction } from '../slice/slice.actions';

export function reducer(state: Session = initialSession(), action: SliceAction): Session {
  let o = {};
  switch (action.type) {

    case typeFor(slices.SESSION, actions.LOAD):
      return functions.load(state, action);
    case typeFor(slices.SESSION, actions.LOAD_SUCCESS):
      return functions.loadSuccess(state, action);
    case typeFor(slices.SESSION, actions.LOAD_FAIL):
      return functions.loadFail(state);
    case typeFor(slices.SESSION, actions.UPDATE):
      return functions.update(state, action);
    default:
      return state;
  }
}

export const hasError = (state: Session) => state.hasError;

export const isLoading = (state: Session) => state.loading;

export const loggedIn = (state: Session) => !!state.token;

export const loggedOut = (state: Session) => !state.token;

export const getFirstName = (state: Session) => state.user.firstName;

export const getLastName = (state: Session) => state.user.lastName;

export const getUser = (state: Session) =>
  Object.assign({},
    state.user,
    { fullName: state.user.firstName + ' ' + state.user.lastName });


