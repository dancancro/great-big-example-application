import { NgModule, Directive, Input, Output, EventEmitter } from "@angular/core";
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { NotesEffectsService } from './services/notes.effects.service';
import { NotesDataService } from './services/notes.data.service';
import { NotesService } from './services/notes.service'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    EffectsModule.run(NotesEffectsService),
  ],
  providers: [NotesDataService, NotesService]
})
export class NotesModule { }
