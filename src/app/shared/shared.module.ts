// From Style guide item 4-10
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-10

import { NgModule } from '@angular/core';

import { Draggable } from './draggable';

@NgModule({
  declarations: [
    Draggable
  ],
  exports: [Draggable]
})
export class SharedModule { }
