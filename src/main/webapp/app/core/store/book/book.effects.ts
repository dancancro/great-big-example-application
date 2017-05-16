import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { GoogleBooksService } from '../../../features/books/services/google-books.service';
import { slices } from '../util';
import * as functions from '../id/id.functions';

@Injectable()
export class BookEffects {
    @Effect()
    private search$ = functions.loadFromRemote$(this.actions$, slices.SEARCH,
        this.googleBooks, 'searchBooks');

    constructor(private actions$: Actions,
        private googleBooks: GoogleBooksService) { }
}
