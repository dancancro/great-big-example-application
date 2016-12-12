import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs/observable/combineLatest';
import 'rxjs/add/observable/fromPromise';

import * as fromRoot from '../../core/store';
import { Crisis } from '../../core/store/crisis/crisis.model';
import * as crisis from '../../core/store/crisis/crisis.actions';
import { DialogService } from '../../shared/dialog/dialog.service';

@Component({
  template: `
    <h3 highlight>Crisis Detail</h3>
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>    
  `
})
export class CrisisDetailComponent implements OnInit {
  id: number;
  crisis: Crisis;
  editName: string;
  sub: any;
  crisis$: Observable<Crisis>;

  constructor(private store: Store<fromRoot.RootState>,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.crisis$ = this.store.select(fromRoot.getSelectedCrisis);
    this.sub = combineLatest(
      this.crisis$,
      this.route.params)
      .subscribe(([crisis, params]) => {
        let id = +params['id'];
        if (crisis) {
          this.editName = crisis.name;
          this.crisis = crisis;
        } else { // id not found
          this.gotoCrises();
        }
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);
    return o;
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the hero id if available
    // so that the CrisisListComponent can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    // Absolute link
    this.router.navigate(['/crisis', { id: crisisId, foo: 'foo' }]);
  }



}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/