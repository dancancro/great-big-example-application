import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { initialBook } from './book.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<any>('Search Scheduler');

@Injectable()
export class BookEffects {
    @Effect()
    search$ = entityFunctions.loadFromRemote$(this.actions$, slices.SEARCH, this.dataService, this.store, initialBook, this.debounce, this.scheduler);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions,
        private dataService: RESTService,
        @Optional() @Inject(SEARCH_DEBOUNCE) private debounce = 300,

        /**
         * You inject an optional Scheduler that will be undefined
         * in normal application usage, but its injected here so that you can mock out
         * during testing using the RxJS TestScheduler for simulating passages of time.
         */
        @Optional() @Inject(SEARCH_SCHEDULER) private scheduler: any
    ) { }
}
