import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  RioNavigator,
  RioNavigatorItem
} from './index';

export const rioNavComponents = [
  RioNavigator,
  RioNavigatorItem
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...rioNavComponents
  ],
  exports: [
    ...rioNavComponents
  ]
})
export class RioNavigatorModule { }
