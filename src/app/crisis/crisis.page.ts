import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import { Crisis }     from '../core/store/crisis/crisis.model';

@Component({
  template: `
    <h3 highlight>Crisis List</h3>
    <div *ngFor='let crisis of crises$ | async'>
      <a routerLink="{{'../' + crisis.id}}">{{crisis.id}} - {{crisis.name}}</a>
    </div>
  `
})
export class CrisisPage implements OnInit {
  crises$: Observable<Crisis[]>;

  constructor(private store: Store<fromRoot.RootState>) { }

  ngOnInit() {
    this.crises$ = this.store.let(fromRoot.getCrises);    
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/