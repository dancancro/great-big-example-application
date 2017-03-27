import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { CounterRouting } from './counter.routing';
import { SharedModule } from '../shared/shared.module';
import { RioCounterComponent } from './counter.component';
import { RioCounterPage } from './counter.page';
import { CounterEffects } from '../core/store/counter/counter.effects';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CounterRouting,
    EffectsModule.run(CounterEffects)
  ],
  declarations: [
    RioCounterPage,
    RioCounterComponent,
  ]
})
export class CounterModule { }
