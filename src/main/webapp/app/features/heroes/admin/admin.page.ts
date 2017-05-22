import { Component } from '@angular/core';

@Component({
  styleUrls: ['./admin.page.scss'],
  template: `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="/features/heroes/crisis-center" routerLinkActive="active">Manage Crises</a>
      <a routerLink="/features/heroes/list" routerLinkActive="active">Manage Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminPage {
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
