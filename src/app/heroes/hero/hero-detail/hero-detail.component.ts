import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { slideInDownAnimation } from '../../../shared/animations';
import { Hero } from '../../../core/store/hero/hero.model';
import * as fromRoot from '../../../core/store';
import { slices } from '../../../core/store/util'
import * as EntityActions from '../../../core/store/entity/entity.actions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>
  hero: Hero;
  heroSub: Subscription;
  routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.RootState>,
    private location: Location) { }

  ngOnInit(): void {
    this.hero$ = this.store.select(fromRoot.getSelectedHero);
    this.heroSub = this.hero$.subscribe(hero => this.hero = hero);
    this.routeSub = this.route.params
      .subscribe((params: Params) => {
        this.store.dispatch(new EntityActions.Select(slices.HERO, { id: +params['id'] }));
      })
  }

  save(): void {
    this.store.dispatch(new EntityActions.Update(slices.HERO, this.hero));
    this.goBack();
  }

  cancel(): void { this.goBack(); }

  gotoList(): void {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.

    // TODO: it should take you back to where you were, wherever that was
    this.router.navigate(['/heroes/list', { id: heroId, foo: 'foo' }]);
  }

  goBack(): void {
    // this.location.back();  //TODO: This takes you back to the home page
    this.gotoList();
  }

  ngOnDestroy(): void {
    this.heroSub && this.heroSub.unsubscribe();
    this.routeSub && this.routeSub.unsubscribe();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
