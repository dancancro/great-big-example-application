import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../core/store';
import * as EntityActions from '../../core/store/entity/entity.actions';
import { slices } from '../../core/store/util';

@Component({
    selector: 'jhi-talks-page',
    templateUrl: './talks.page.html',
    styleUrls: ['./talks.page.scss']
})
export class TalksPage {
    title = 'Talks';

    constructor(
        private store: Store<fromRoot.RootState>) {
    }

    ngOnInit() {
        this.store.dispatch(new EntityActions.Load(slices.TALK));
    }
}
