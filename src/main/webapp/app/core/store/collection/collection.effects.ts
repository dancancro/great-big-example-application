import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';

import { slices } from '../util';
import * as idFunctions from '../id/id.functions';

@Injectable()
export class CollectionEffects {

    /**
     * This effect does not yield any actions back to the store. Set
     * `dispatch` to false to hint to @ngrx/effects that it should
     * ignore any elements of this effect stream.
     *
     * The `defer` observable accepts an observable factory function
     * that is called when the observable is subscribed to.
     * Wrapping the database open call in `defer` makes
     * effect easier to test.
     */
    @Effect({ dispatch: false })
    openDB$: Observable<any> = defer(() => {
        return this.db.open('books_app');
    });

    /**
     * This effect makes use of the `startWith` operator to trigger
     * the effect immediately on startup.
     */
    @Effect()
    loadCollection$ = idFunctions.loadFromLocal$(this.actions$, slices.COLLECTION,
        this.db, 'books');

    @Effect()
    addBookToCollection$ = idFunctions.addToLocal$(this.actions$, slices.COLLECTION,
        this.db, 'books');

    @Effect()
    removeBookFromCollection$ = idFunctions.deleteFromLocal$(this.actions$, slices.COLLECTION,
        this.db, 'books');

    constructor(private actions$: Actions,
        private db: Database) { }
}
