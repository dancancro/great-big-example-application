import { NgModule } from "@angular/core";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { provideStore } from '@ngrx/store';
import { Dispatcher } from '@ngrx/store';
import { Draggable } from './shared';

import { AppComponent } from './app.component';
import { NotesModule } from './notes/notes.module';
import { NoteComponent } from './notes/components/note.component';
import { AddButtonComponent } from './notes/components/add.button.component';
import { notes } from './notes/reducers/notes.reducer';
import { NotesComponent } from './notes/components/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    AddButtonComponent,
    Draggable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NotesModule
  ],
  providers: [Dispatcher, provideStore({notes}, {notes:[]})],
  bootstrap: [AppComponent]
})
export class AppModule { }
