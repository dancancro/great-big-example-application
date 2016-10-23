import { Component, OnInit } from '@angular/core';

import { Hero,
         HeroService } from './hero.service';

@Component({
  template: `
    <h3 highlight>Hero List</h3>
    <div *ngFor='let hero of heroes | async'>
      <a routerLink="{{hero.id}}">{{hero.id}} - {{hero.name}}</a>
    </div>
  `
})
export class HeroListComponent implements OnInit {
  heroes: Promise<Hero[]>;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/