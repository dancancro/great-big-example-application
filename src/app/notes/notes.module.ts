// From Style guide item 4-09 - Feature Modules
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-09

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { NotesDataService } from './services/notes.data.service';
import { NotesEffectsService } from './services/notes.effects.service';
import { NotesService } from './services/notes.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    EffectsModule.run(NotesEffectsService)
  ],
  providers: [NotesDataService, NotesService]
})
export class NotesModule { }
