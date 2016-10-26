import { NgModule }            from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule }        from '../shared/shared.module';
import { DataService } from '../core/store/data.service';
import { HeroPage }       from './hero.page';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent }   from './hero-list/hero-list.component';
import { routing }             from './hero.routing';
import { HeroEffects } from '../core/store/hero/hero.effects';

@NgModule({
  imports: [
    SharedModule,
    routing,
    EffectsModule.run(HeroEffects) ],
  declarations: [
    HeroPage,
    HeroDetailComponent,
    HeroListComponent,
  ],
  providers: [
    DataService
  ]
})
export class HeroModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/