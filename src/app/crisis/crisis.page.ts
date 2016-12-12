import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import * as fromRoot from '../core/store';
import { Crisis } from '../core/store/crisis/crisis.model';
import * as crisisActions from '../core/store/crisis/crisis.actions';

@Component({
  template: `
    <h3 highlight>Crisis List</h3>
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
  styleUrls: ['crisis.page.css']
})
export class CrisisPage implements OnInit {
  crises$: Observable<Crisis[]>;
  private sub: any;

  constructor(private store: Store<fromRoot.RootState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.crises$ = this.store.select(fromRoot.getCrises);
    this.sub = this.route
      .params
      .subscribe(params => {
        this.isSelected = function (crisis: Crisis) { return crisis.id === params['id']; }
      });
  }

  isSelected(crisis: Crisis) { return false }


  onSelect(crisis: Crisis) {
    // Navigate with Absolute link
    this.store.dispatch(new crisisActions.SelectCrisisAction(crisis.id));
    this.router.navigate(['/crisis', crisis.id]);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/