import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../core/store';
import * as EntityActions from '../../core/store/entity/entity.actions';
import { slices } from '../../core/store/util';

/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
@Component({
    selector: 'jhi-view-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <jhi-selected-book-page></jhi-selected-book-page>
  `
})
export class ViewBookPage implements OnDestroy {
    actionsSubscription: Subscription;

    constructor(store: Store<fromRoot.RootState>, route: ActivatedRoute) {
        this.actionsSubscription = route.params
            .map((params) => new EntityActions.Select(slices.BOOK, params.id))
            .subscribe(store);
    }

    ngOnDestroy() {
        this.actionsSubscription.unsubscribe();
    }
}
