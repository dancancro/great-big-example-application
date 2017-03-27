import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SortablejsModule } from 'angular-sortablejs';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { BerniePage } from './bernie.page';
import { ClaimComponent } from './claim/claim.component';
import { RebuttalComponent } from './rebuttal/rebuttal.component';
import { DataService } from '../core/services/data.service';
import { SharedModule } from '../shared/shared.module';
import { BernieRouting } from './bernie.routing';
import { ClaimEffects } from '../core/store/claim/claim.effects';
import { RebuttalEffects } from '../core/store/rebuttal/rebuttal.effects';
import { ClaimRebuttalEffects } from '../core/store/claim-rebuttal/claim-rebuttal.effects';

@NgModule({
  imports: [
    SortablejsModule,
    SharedModule,
    BernieRouting,
    ReactiveFormsModule,
    EffectsModule.run(ClaimEffects),
    EffectsModule.run(RebuttalEffects),
    EffectsModule.run(ClaimRebuttalEffects)
  ],
  declarations: [
    BerniePage,
    ClaimComponent,
    RebuttalComponent
  ],
  providers: [
    DataService
  ]
})
export class BernieModule { }
