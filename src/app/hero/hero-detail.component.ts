import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Hero,
         HeroService }    from './hero.service';

@Component({
  template: `
    <h3 highlight>Hero Detail</h3>
    <div *ngIf="hero">
      <div>Id: {{hero.id}}</div><br>
      <label>Name:
        <input [(ngModel)]="hero.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Hero List</a>
  `
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/