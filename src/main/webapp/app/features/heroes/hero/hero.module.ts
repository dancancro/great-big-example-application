import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NgPipesModule } from 'ngx-pipes';

import { GreatBigExampleApplicationSharedModule } from '../../../shared/shared.module';
import { routedComponents, HeroRouting } from './hero.routing';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
        HeroRouting,
        NgPipesModule
    ],
    declarations: [
        routedComponents
    ],
    providers: [
    ]
})
export class HeroModule { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
