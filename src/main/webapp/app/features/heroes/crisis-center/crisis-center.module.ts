import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DialogService } from '../../../shared/dialog/dialog.service';
import { CrisisCenterPage } from './crisis-center.page';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterRouting } from './crisis-center.routing';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRouting
  ],
  declarations: [
    CrisisCenterPage,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    ComposeMessageComponent
  ],
  providers: [
    DialogService
  ]
})
export class CrisisCenterModule { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
