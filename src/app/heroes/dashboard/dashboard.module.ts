import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../core/services/in-memory-data.service';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SharedModule } from '../../shared/shared.module';
import { routedComponents, DashboardRouting } from './dashboard.routing';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { DashboardCrisisComponent } from './dashboard-crisis/dashboard-crisis.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRouting,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    routedComponents,
    DashboardHeroComponent,
    DashboardCrisisComponent,
    HeroSearchComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
