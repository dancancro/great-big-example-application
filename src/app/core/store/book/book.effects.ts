import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { GoogleBooksService } from './google-books.service';
import { slices } from '../util';
import * as functions from '../id/id.functions';


@Injectable()
export class BookEffects {
  constructor(private actions$: Actions,
    private googleBooks: GoogleBooksService) { }

  @Effect()
  private search$ = functions.loadFromRemote$(this.actions$, slices.SEARCH,
    this.googleBooks, 'searchBooks');

}
