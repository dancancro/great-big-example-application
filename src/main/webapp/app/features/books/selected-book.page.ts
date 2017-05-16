import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../core/store';
import * as IDActions from '../../core/store/id/id.actions';
import { Book } from '../../core/store/book/book.model';
import { slices } from '../../core/store/util';

@Component({
  selector: 'jhi-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <jhi-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </jhi-book-detail>
  `
})
export class SelectedBookPage {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.book$ = store.select(fromRoot.getSelectedBook);
    this.isSelectedBookInCollection$ = store.select(fromRoot.isSelectedBookInCollection);
  }

  addToCollection(book: Book) {
    this.store.dispatch(new IDActions.Add(slices.COLLECTION, book));
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(new IDActions.Delete(slices.COLLECTION, book));
  }
}
