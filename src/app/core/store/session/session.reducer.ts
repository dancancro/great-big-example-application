import { Observable } from 'rxjs/Observable';

import * as session from './session.actions';
import { Session, initialSession } from './session.model';

export function reducer(state = initialSession, action: session.Actions): Session {
  switch (action.type) {

    case session.ActionTypes.LOGIN_USER:
      return Object.assign({}, state, {
        token: null,
        userId: null,
        hasError: false,
        isLoading: true,
      });

    case session.ActionTypes.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        token: action.payload.token,
        // user: UserFactory(action.payload.profile),
        user: action.payload.profile,
        hasError: false,
        isLoading: false,
      });

    case session.ActionTypes.LOGIN_USER_FAIL:
      return Object.assign({}, state, {
        token: null,
        userId: null,
        hasError: true,
        isLoading: false,
      });

    case session.ActionTypes.LOGOUT_USER:
      return initialSession;

    default:
      return state;
  }
}

export const hasError = (state: Session) => state.hasError;

export const isLoading = (state: Session) => state.isLoading;

export const loggedIn = (state: Session) => !!state.token;

export const loggedOut = (state: Session) => !state.token;
