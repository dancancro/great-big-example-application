// From Style guide item 4-10
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-10

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Draggable } from './draggable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Draggable
  ],
  exports: [
    CommonModule,
    FormsModule,
    Draggable
  ]
})
export class SharedModule { }
