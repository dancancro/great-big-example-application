// From Style guide item 4-11
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-11

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dispatcher } from '@ngrx/store';
import { provideStore } from '@ngrx/store';
import { notes } from '../notes/reducers/notes.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [Dispatcher, provideStore({notes}, {notes: []})]
})
export class CoreModule { }
