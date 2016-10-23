import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import * as collection from '../core/store/collection/collection.actions';
import { Book } from '../core/store/book/book.model';


@Component({
  selector: 'bc-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `
})
export class SelectedBookPage {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.book$ = store.let(fromRoot.getSelectedBook);
    this.isSelectedBookInCollection$ = store.let(fromRoot.isSelectedBookInCollection);
  }

  addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBookAction(book));
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(new collection.RemoveBookAction(book));
  }
}
