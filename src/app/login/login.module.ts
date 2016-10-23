import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {
  ReactiveFormsModule
} from '@angular/forms';
import { RioLoginFormComponent } from './login-form/login-form.component';
import { RioLoginModalComponent } from './login-modal/login-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule
  ],
  declarations: [
    RioLoginModalComponent,
    RioLoginFormComponent
  ],
  exports: [
    RioLoginModalComponent
  ]
})
export class RioLoginModule { }
