import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { routedComponents, HeroRouting } from './hero.routing';
import { HeroDetailService } from './hero-detail/hero-detail.service';

@NgModule({
  imports: [
    SharedModule,
    HeroRouting
  ],
  declarations: [
    routedComponents
  ],
  providers: [
    HeroDetailService
  ]
})
export class HeroModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/