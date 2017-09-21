import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';

import { Counter, initialCounter } from './counter.model';
import { typeFor, slices } from '../util';
import { actions, SliceAction } from '../slice/slice.actions';
import * as SliceActions from '../slice/slice.actions';
import { RootState } from '../';

/*
 * @whatItDoes This just resets the counter whenever someone logs in or logs out
*/
@Injectable()
export class CounterEffects {
    @Effect({ dispatch: false })
    private reset$ = this.actions$
        .ofType(typeFor(slices.SESSION, actions.UPDATE))
        .map((action: SliceAction) => {
            if (!action.payload.token) {
                return new SliceActions.Update(slices.COUNTER, [], initialCounter);
            } else {
                return empty();
            }
        });

    constructor(
        private store: Store<RootState>,
        private actions$: Actions
    ) { }
}
