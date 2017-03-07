import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';
import { CanDeactivateGuard } from '../shared/can-deactivate/can-deactivate.guard';
import { NotFoundPage } from '../core/not-found/not-found.page';
import { SelectivePreloadingStrategy } from '../shared/selective-preloading-strategy';
import { HeroesPage } from './heroes.page';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';


const routes: Routes = [
  {
    path: '',
    component: HeroesPage,
    children: [
      {
        path: 'admin',
        loadChildren: 'app/heroes/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'crisis-center',
        loadChildren: 'app/heroes/crisis-center/crisis-center.module#CrisisCenterModule',
        data: { preload: true },
        canLoad: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: 'app/heroes/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'hero/:id', component: HeroDetailComponent,
        canLoad: [AuthGuard]
      },
      { path: 'list', loadChildren: 'app/heroes/hero/hero.module#HeroModule' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class HeroesRouting { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/