import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { Crisis } from '../../../../core/store/crisis/crisis.model';
import * as fromRoot from '../../../../core/store';
import { slices } from '../../../../core/store/util';
import * as EntityActions from '../../../../core/store/entity/entity.actions';

@Component({
    template: `
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
        (click)="onSelect(crisis)"
        [class.selected]="crisis === (selectedCrisis$ | async)">
          <span class="badge">{{ crisis.id }}</span>
          {{ crisis.name }}
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
    styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit, OnDestroy {
    crises$: Store<Crisis[]>;
    selectedCrisis$: Observable<Crisis>;
    routeSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromRoot.RootState>,
    ) { }

    ngOnInit() {
        this.crises$ = this.store.select(fromRoot.getCrises);
        this.routeSub = this.route.params
            .subscribe((params: Params) => {
                this.store.dispatch(new EntityActions.Select(slices.HERO, { id: params['id'] }));
            });
    }

    onSelect(crisis: Crisis) {
        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    }

    ngOnDestroy() {
        this.routeSub && this.routeSub.unsubscribe();
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
