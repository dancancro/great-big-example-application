import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { routedComponents, DashboardRouting } from './dashboard.routing';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { DashboardCrisisComponent } from './dashboard-crisis/dashboard-crisis.component';
import { HeroService, CrisisService } from '../model';

@NgModule({
  imports: [
    SharedModule,
    DashboardRouting
  ],
  declarations: [
    routedComponents,
    DashboardHeroComponent,
    DashboardCrisisComponent
  ],
  providers: [
    HeroService,
    CrisisService
  ]
})
export class DashboardModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/