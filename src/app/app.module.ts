import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesModule } from './notes/notes.module';
import { NoteComponent } from './notes/components/note.component';
import { AddButtonComponent } from './notes/components/add-button.component';
import { NotesComponent } from './notes/components/notes.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NotesModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
