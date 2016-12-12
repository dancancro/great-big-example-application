import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as fromRoot from '../../core/store';

import { Hero } from '../../core/store/hero/hero.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3 highlight>Hero List</h3>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="(heroes$ | async).selectedEntityId === hero.id"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['hero-list.component.css']
})

export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>
  constructor(private store: Store<fromRoot.RootState>,
    private router: Router) { }

  ngOnInit() {
    this.heroes$ = this.store.select(fromRoot.getHeroes);
  }


  onSelect(hero: Hero) {
    this.router.navigate(['/heroes', hero.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/