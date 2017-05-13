import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: HeroListComponent },
  { path: ':id', component: HeroDetailComponent }
];

export const routedComponents = [HeroDetailComponent, HeroListComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRouting { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
