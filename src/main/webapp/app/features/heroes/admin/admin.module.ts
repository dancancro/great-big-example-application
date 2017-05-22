import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPage } from './admin.page';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRouting } from './admin.routing';
import { CrisisCenterModule } from '../crisis-center/crisis-center.module';
import { HeroModule } from '../hero/hero.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    CrisisCenterModule,
    HeroModule
  ],
  declarations: [
    AdminPage,
    AdminDashboardComponent,
  ]
})
export class AdminModule { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
