import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@angular/material';
import { NgPipesModule } from 'ngx-pipes';

import { BerniePage } from './bernie.page';
import { ClaimComponent } from './claim/claim.component';
import { RebuttalComponent } from './rebuttal/rebuttal.component';
import { RESTService } from '../../core/services/rest.service';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { BernieRouting } from './bernie.routing';
import { ClaimEffects } from '../../core/store/claim/claim.effects';
import { RebuttalEffects } from '../../core/store/rebuttal/rebuttal.effects';
import { ClaimRebuttalEffects } from '../../core/store/claim-rebuttal/claim-rebuttal.effects';
import { customHttpProvider } from '../../core/interceptor/http.provider';

@NgModule({
    imports: [
        SortablejsModule,
        GreatBigExampleApplicationSharedModule,
        BernieRouting,
        ReactiveFormsModule,
        MaterialModule,
        EffectsModule.forRoot([ClaimEffects, RebuttalEffects, ClaimRebuttalEffects]),
        NgPipesModule
    ],
    declarations: [
        BerniePage,
        ClaimComponent,
        RebuttalComponent
    ],
    providers: [
        customHttpProvider(),
        RESTService
    ]
})
export class BernieModule { }
