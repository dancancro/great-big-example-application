import 'rxjs/add/operator/take';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../core/store';
import { Book } from '../../core/store/book/book.model';
import * as idActions from '../../core/store/id/id.actions';
import { slices } from '../../core/store/util';

@Component({
    selector: 'jhi-find-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <jhi-book-search [query]="searchQuery$ | async" [searching]="loading$ | async" (search)="search($event)"></jhi-book-search>
    <jhi-book-preview-list [books]="books$ | async"></jhi-book-preview-list>
  `
})
export class FindBookPage {
    searchQuery$: Observable<string>;
    books$: Store<Book[]>;
    loading$: Observable<boolean>;

    constructor(private store: Store<fromRoot.RootState>) {
        this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
        this.books$ = store.select(fromRoot.getSearchResults);
        this.loading$ = store.select(fromRoot.getSearchLoading);
    }

    search(query: string) {
        this.store.dispatch(new idActions.Load(slices.SEARCH, query));
    }
}
