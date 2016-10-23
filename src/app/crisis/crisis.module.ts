import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { CrisisPage }    from './crisis.page';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisService } from './crisis.service';
import { routing }       from './crisis.routing';

@NgModule({
  imports:      [ CommonModule, routing ],
  declarations: [ CrisisDetailComponent, CrisisPage ],
  providers:    [ CrisisService ]
})
export class CrisisModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/