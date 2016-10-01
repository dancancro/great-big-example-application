// import { NgClass } from '@angular/common';
import { NgModule, Directive, Input, Output, EventEmitter } from "@angular/core";
import { HttpModule } from '@angular/http';

import { EffectsModule } from '@ngrx/effects';

import { NotesEffectsService } from './services/notes.effects.service';
import { NotesDataService } from './services/notes.data.service';
import { NoteComponent } from './components/note.component';
import { AddButtonComponent } from './components/add.button.component';
import { Draggable } from '../shared';

@NgModule({
  declarations: [
    NoteComponent,
    AddButtonComponent
  //  NgClass
  ],
  imports: [
    HttpModule,
    EffectsModule.run(NotesEffectsService),
  ],
  providers: [NotesDataService, Draggable]
})
export class NotesModule { }
