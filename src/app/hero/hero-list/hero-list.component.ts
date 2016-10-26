import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../core/store';

import { Hero }    from '../../core/store/hero/hero.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3 highlight>Hero List</h3>
    <div *ngFor='let hero of heroes$ | async'>
      <a routerLink="{{hero.id}}">{{hero.id}} - {{hero.name}}</a>
    </div>
  `
})

export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>
  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit() {
    this.heroes$ = this.store.let(fromRoot.getHeroes);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/