import { Observable } from 'rxjs/Observable';

import * as session from '../session/session.actions';
import { User, initialUser } from './user.model';

export function reducer(state = initialUser, action: session.Actions): User {
  switch (action.type) {

    case session.ActionTypes.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        firstName: action.payload.profile.firstName,
        lastName: action.payload.profile.lastName
      });

    case session.ActionTypes.LOGOUT_USER:
      return initialUser;

    default:
      return state;
  }
}

export const getFirstName = (state: User) => state.firstName;

export const getLastName = (state: User) => state.lastName;

