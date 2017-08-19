import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { PayloadAction } from '../util';
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
