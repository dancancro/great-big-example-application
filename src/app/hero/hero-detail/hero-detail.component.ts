import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hero }    from '../../core/store/hero/hero.model';
import * as fromRoot from '../../core/store';
import * as hero from '../../core/store/hero/hero.actions';

@Component({
  template: `
    <h3 highlight>Hero Detail</h3>
    <div *ngIf="(hero$ | async).id" >
      <div>Id: {{(hero$ | async).id}}</div><br>
      <label>Name:
        <input [value]="(hero$ | async).name">
      </label>
    </div>
    <br>
    <a routerLink="../">Hero List</a>
  `
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute,
    private store: Store<fromRoot.RootState>) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.store.dispatch(new hero.SelectHeroAction(id));
    this.hero$ = this.store.let(fromRoot.getSelectedHero);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/