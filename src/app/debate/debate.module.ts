import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SORTABLEJS_DIRECTIVES } from 'angular-sortablejs';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { DebatePage } from './debate.page';
import { ClaimComponent } from './claim/claim.component';
import { RebuttalComponent } from './rebuttal/rebuttal.component';
import { DataService } from '../core/store/data.service';
import { SharedModule } from '../shared/shared.module';
import { routing } from './debate.routing';
import { ClaimEffects } from '../core/store/claim/claim.effects';
import { RebuttalEffects } from '../core/store/rebuttal/rebuttal.effects';
import { ClaimRebuttalEffects } from '../core/store/claim-rebuttal/claim-rebuttal.effects';
// import { RouteParamsService } from '../../services/route-params.service';

@NgModule({
    declarations: [
        DebatePage,
        ClaimComponent,
        RebuttalComponent,
        SORTABLEJS_DIRECTIVES,
    ],
    imports: [
        SharedModule,
        routing,
        ReactiveFormsModule,
        EffectsModule.run(ClaimEffects),
        EffectsModule.run(RebuttalEffects),
        EffectsModule.run(ClaimRebuttalEffects)
    ],
    // exports: [
    //   ListComponent,
    //   ObjectionComponent,
    //   RebuttalComponent,
    //   BrowserModule
    // ],
    providers: [
        DataService,
        //    RouteParamsService
    ]
})
export class DebateModule { }
