// From Style guide item 4-10
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-10

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { Draggable } from './draggable/draggable.directive';
import { RioAlertComponent } from './alert/alert.component';
import { RioButtonComponent } from './button/button.component';
import { RioContainerComponent } from './container/container.component';
import { RioInputComponent } from './input/input.component';
import { RioLogoComponent } from './logo/logo.component';
import { RioFormComponent } from './form/form.component';
import { RioFormErrorComponent } from './form-error/form-error.component';
import { RioFormGroupComponent } from './form-group/form-group.component';
import { RioLabelComponent } from './label/label.component';
import { RioModalComponent } from './modal/modal.component';
import { RioModalContentComponent } from './modal-content/modal-content.component';
import { AwesomePipe } from './awesome/awesome.pipe';
import { HighlightDirective } from './highlight/highlight.directive';
import { TitleCasePipe } from './title-case/title-case.pipe';
import { TwainComponent } from './twain/twain.component';
import { TwainService } from './twain/twain.service';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const components = [
  Draggable,
  RioAlertComponent,
  RioButtonComponent,
  RioContainerComponent,
  RioInputComponent,
  RioLogoComponent,
  RioFormComponent,
  RioFormErrorComponent,
  RioFormGroupComponent,
  RioLabelComponent,
  RioModalComponent,
  RioModalContentComponent,
  AwesomePipe,
  HighlightDirective,
  TitleCasePipe,
  TwainComponent,
  BannerComponent,
  WelcomeComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //    MaterialModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ...components
  ],
  providers: [
    TwainService
  ]
})
export class SharedModule { }
