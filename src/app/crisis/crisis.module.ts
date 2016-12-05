import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { CrisisPage } from './crisis.page';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { routing } from './crisis.routing';
import { CrisisEffects } from '../core/store/crisis/crisis.effects';
import { DataService } from '../core/store/data.service';
import { DialogService } from '../shared/dialog/dialog.service';

@NgModule({
  imports: [
    SharedModule,
    routing,
    EffectsModule.run(CrisisEffects)],
  declarations: [
    CrisisDetailComponent,
    CrisisPage],
  providers: [
    DataService,
    DialogService
  ]
})
export class CrisisModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/