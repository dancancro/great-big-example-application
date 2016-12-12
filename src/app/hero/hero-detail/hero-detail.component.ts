import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hero } from '../../core/store/hero/hero.model';
import * as fromRoot from '../../core/store';
import * as hero from '../../core/store/hero/hero.actions';

@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{hero.name}}"</h3>
    <div>
      <label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.RootState>) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.hero$ = this.store.select(fromRoot.getSelectedHero);
    this.hero$.subscribe(hero => this.hero = hero);
    this.store.dispatch(new hero.SelectHeroAction({ id }));
  }


  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/heroes'], { queryParams: { id: heroId, foo: 'foo' } });
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/