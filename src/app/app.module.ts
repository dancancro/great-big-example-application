// import { NgClass } from '@angular/common';
import { NgModule } from "@angular/core";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { provideStore } from '@ngrx/store';
import { Dispatcher } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NotesModule } from './notes/notes.module';
import { notes } from './notes/reducers/notes.reducer';
import { NotesComponent } from './notes/components/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NotesModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],    // I don't understand why this became necessary when I created notes.module.ts
  providers: [Dispatcher, provideStore({notes}, {notes:[]})],
  bootstrap: [AppComponent]
})
export class AppModule { }
