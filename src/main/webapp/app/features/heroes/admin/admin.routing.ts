import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPage } from './admin.page';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CrisisCenterPage } from '../crisis-center/crisis-center.page';
import { HeroListComponent } from '../hero/hero-list/hero-list.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPage,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: CrisisCenterPage },
          { path: 'heroes', component: HeroListComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRouting { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
