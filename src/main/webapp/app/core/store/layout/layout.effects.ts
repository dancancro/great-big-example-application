import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { slices, PayloadAction } from '../util';
import { actions } from '../slice/slice.actions';
import * as SliceActions from '../slice/slice.actions';
import { WatchService } from '../../../features/talks/services/watch.service';

/**
 * @whatItDoes Calls the WatchService with the provided talk id and then dispatches
 * another action with a different type and the same payload
 */
@Injectable()
export class LayoutEffects {
    @Effect() watchTalk = this.actions$.ofType('WATCH')
        .map((a: PayloadAction) => {
            this.watchService.watch(a.payload.id);
            return { type: 'TALK_WATCHED', payload: a.payload };
        });

    constructor(
        private watchService: WatchService,
        private actions$: Actions
    ) { }
}
