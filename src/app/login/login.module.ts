import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { HttpModule }             from '@angular/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { EffectsModule }          from '@ngrx/effects';

import { RioLoginFormComponent }  from './login-form/login-form.component';
import { RioLoginModalComponent } from './login-modal/login-modal.component';
import { SharedModule }           from '../shared/shared.module';
import { SessionEffects }         from '../core/store/session/session.effects';
import { DataService }            from '../core/store/data.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    EffectsModule.run(SessionEffects)
  ],
  declarations: [
    RioLoginModalComponent,
    RioLoginFormComponent
  ],
  exports: [
    RioLoginModalComponent
  ],
  providers: [
    DataService
  ]
})
export class RioLoginModule { }
