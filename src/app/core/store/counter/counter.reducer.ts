import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as counter from './counter.actions';
import * as session from '../session/session.actions';
import { Counter, initialCounter } from './counter.model';

export function reducer(state = initialCounter, action: counter.Actions | session.Actions): Counter {
  switch (action.type) {
    case counter.ActionTypes.INCREMENT_COUNTER:
      return {value: state.value + 1};
    case counter.ActionTypes.DECREMENT_COUNTER:
      return {value: state.value - 1};
  case session.ActionTypes.LOGOUT_USER:
    return initialCounter;
  default:
    return state;
  }
}

export function getValue(state$: Observable<Counter>) {
  return state$.select(state => state.value);
}
