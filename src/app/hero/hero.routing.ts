import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { HeroPage }       from './hero.page';
import { HeroListComponent }   from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  { path: '',
    component: HeroPage,
    children: [
      { path: '',    component: HeroListComponent },
      { path: ':id', component: HeroDetailComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/