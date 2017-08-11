import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { GoogleBooksService } from '../../../features/books/services/google-books.service';
import { slices } from '../util';
import * as functions from '../id/id.functions';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<any>('Search Scheduler');

@Injectable()
export class BookEffects {
    @Effect()
    search$ = functions.loadFromRemote$(this.actions$, slices.SEARCH,
        this.googleBooks, 'searchBooks', this.debounce, this.scheduler);

    constructor(
        private actions$: Actions,
        private googleBooks: GoogleBooksService,
        @Optional() @Inject(SEARCH_DEBOUNCE) private debounce = 300,

        /**
         * You inject an optional Scheduler that will be undefined
         * in normal application usage, but its injected here so that you can mock out
         * during testing using the RxJS TestScheduler for simulating passages of time.
         */
        @Optional() @Inject(SEARCH_SCHEDULER) private scheduler: any
    ) { }
}
