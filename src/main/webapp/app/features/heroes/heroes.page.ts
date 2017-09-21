import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../core/store';
import * as EntityActions from '../../core/store/entity/entity.actions';
import { slices } from '../../core/store/util';

@Component({
    selector: 'jhi-heroes-page',
    styleUrls: ['./heroes.page.scss'],
    templateUrl: './heroes.page.html'
})
export class HeroesPage implements OnInit {

    constructor(
        private store: Store<fromRoot.RootState>) {
    }

    ngOnInit() {
        this.store.dispatch(new EntityActions.Load(slices.HERO));
        this.store.dispatch(new EntityActions.Load(slices.CRISIS));
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
