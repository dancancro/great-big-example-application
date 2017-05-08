import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { CounterRouting } from './counter.routing';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { RioCounterComponent } from './counter.component';
import { RioCounterPage } from './counter.page';
import { CounterEffects } from '../../core/store/counter/counter.effects';

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedModule,
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
