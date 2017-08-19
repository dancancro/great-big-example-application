import { Observable } from 'rxjs/Observable';

import { Counter, initialCounter } from './counter.model';
import { typeFor, slices } from '../util';
import * as functions from '../slice/slice.functions';
import { actions, SliceAction } from '../slice/slice.actions';
import * as SliceActions from '../slice/slice.actions';

export function reducer(state: Counter = initialCounter, action: SliceAction): Counter {
    switch (action.type) {
        case typeFor(slices.COUNTER, actions.UPDATE):
            const x = functions.update(state, action);
            return x;
        default:
            return state;
    }
}

export const getValue = (state: Counter) => state.value;
