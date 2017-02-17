import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService, Crisis, CrisisService } from '../model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  crises: Crisis[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService,
    private crisisService: CrisisService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
    this.crisisService.getCrises()
      .then(crises => this.crises = crises.slice(1, 5));
  }

  gotoHero(hero: Hero) {
    let url = `/heroes/hero/${hero.id}`;
    this.router.navigateByUrl(url);
  }

  gotoCrisis(crisis: Crisis) {
    let url = `/heroes/crisis-center/${crisis.id}`;
    this.router.navigateByUrl(url);
  }

  get title() {
    let cnt = this.heroes.length;
    return cnt === 0 ? 'No Heroes' :
      cnt === 1 ? 'Top Hero' : `Top ${cnt} Heroes`;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/