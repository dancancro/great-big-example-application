import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { HeroesRouting } from './heroes.routing';
import { TwainService } from '../../shared/twain/twain.service';
import { WelcomeComponent } from '../../shared/welcome/welcome.component';
import { UserService } from '../../core/services/user.service';
import { HeroesPage } from './heroes.page';
import { HeroModule } from './hero/hero.module';
import { HeroEffects } from '../../core/store/hero/hero.effects';
import { CrisisEffects } from '../../core/store/crisis/crisis.effects';
import { customHttpProvider } from '../../core/interceptor/http.provider';

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forRoot([CrisisEffects, HeroEffects]),
        FormsModule,
        GreatBigExampleApplicationSharedModule,
        HeroesRouting,
        HeroModule
    ],
    declarations: [
        HeroesPage
    ],
    providers: [
        customHttpProvider(),
        TwainService,
        UserService
    ]
})
export class HeroesModule { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
