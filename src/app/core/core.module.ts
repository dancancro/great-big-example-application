// From Style guide item 4-11
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-11

import {
  NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { Dispatcher } from '@ngrx/store';
import { provideStore } from '@ngrx/store';

import { notes } from '../notes/reducers/notes.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    Dispatcher,
    provideStore({notes}, {notes: []})
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
