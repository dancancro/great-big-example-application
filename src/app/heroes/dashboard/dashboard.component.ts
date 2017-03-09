import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

import { Hero } from '../../core/store/hero/hero.model';
import { Crisis } from '../../core/store/crisis/crisis.model';
import * as fromRoot from '../../core/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes$: Observable<Hero[]>
  crises$: Observable<Crisis[]>
  heroesSub: Subscription;
  title: string;

  constructor(
    private store: Store<fromRoot.RootState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes$ = this.store.select(fromRoot.getHeroes).take(5);
    this.crises$ = this.store.select(fromRoot.getCrises).take(5);
    this.heroesSub = this.heroes$.subscribe(heroes => {
      let cnt = heroes.length;
      this.title = cnt === 0 ? 'No Heroes' :
        cnt === 1 ? 'Top Hero' : `Top ${cnt} Heroes`;
    })
  }

  gotoHero(hero: Hero) {
    let url = `/heroes/hero/${hero.id}`;
    this.router.navigateByUrl(url);
  }

  gotoCrisis(crisis: Crisis) {
    let url = `/heroes/crisis-center/${crisis.id}`;
    this.router.navigateByUrl(url);
  }

  ngOnDestroy() {
    this.heroesSub && this.heroesSub.unsubscribe();
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/