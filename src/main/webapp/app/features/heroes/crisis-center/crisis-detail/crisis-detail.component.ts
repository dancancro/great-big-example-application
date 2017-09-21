import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { slideInDownAnimation } from '../../../../shared/animations';
import { DialogService } from '../../../../shared/dialog/dialog.service';
import { Crisis } from '../../../../core/store/crisis/crisis.model';
import * as fromRoot from '../../../../core/store';
import * as EntityActions from '../../../../core/store/entity/entity.actions';
import { slices } from '../../../../core/store/util';

@Component({
    template: `
  <div *ngIf="crisis">
    <h3>"{{ editName }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
    styles: ['input {width: 20em}'],
    animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit, OnDestroy {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    crisis$: Observable<Crisis>;
    crisisSub: Subscription;
    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromRoot.RootState>,
        public dialogService: DialogService
    ) { }

    ngOnInit() {
        this.crisis$ = this.store.select(fromRoot.getSelectedCrisis);
        this.crisisSub = this.crisis$.subscribe((crisis) => this.crisis = crisis);

        // Load the current user's data
        this.crisisSub = this.crisis$.subscribe(
            (crisis) => {
                this.editName = crisis.name;
                this.crisis = crisis;
            }
        );
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.store.dispatch(new EntityActions.Patch(slices.CRISIS, this.crisis));
        this.gotoCrises();
    }

    canDeactivate(): Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }

    gotoCrises() {
        const crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }

    ngOnDestroy() {
        this.crisisSub && this.crisisSub.unsubscribe();
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
