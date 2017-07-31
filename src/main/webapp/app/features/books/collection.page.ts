import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../core/store';
import { Book } from '../../core/store/book/book.model';

@Component({
    selector: 'jhi-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
  <br>
  <br>
  <br>
    <md-card>
      <md-card-title>My Collection</md-card-title>
    </md-card>

    <jhi-book-preview-list [books]="books$ | async"></jhi-book-preview-list>
  `,
    /**
     * Container components are permitted to have just enough styles
     * to bring the view together. If the number of styles grow,
     * consider breaking them out into presentational
     * components.
     */
    styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class CollectionPage {
    books$: Observable<Readonly<Book[]>>;

    constructor(store: Store<fromRoot.RootState>) {
        this.books$ = store.select(fromRoot.getBookCollection);
    }
}
