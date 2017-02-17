import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPage } from './admin.page';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AdminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [
    AdminPage,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ]
})
export class AdminModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/