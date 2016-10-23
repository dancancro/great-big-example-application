import { Component, OnInit } from '@angular/core';

import { Crisis,
         CrisisService }     from './crisis.service';

@Component({
  template: `
    <h3 highlight>Crisis List</h3>
    <div *ngFor='let crisis of crisises | async'>
      <a routerLink="{{'../' + crisis.id}}">{{crisis.id}} - {{crisis.name}}</a>
    </div>
  `
})
export class CrisisPage implements OnInit {
  crisises: Promise<Crisis[]>;

  constructor(private crisisService: CrisisService) { }

  ngOnInit() {
    this.crisises = this.crisisService.getCrises();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/