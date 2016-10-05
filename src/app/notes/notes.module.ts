// From Style guide item 4-09 - Feature Modules
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-09

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';

import { NotesDataService } from './services/notes.data.service';
import { NotesEffectsService } from './services/notes.effects.service';
import { NotesService } from './services/notes.service';
import { NoteComponent } from './components/note.component';
import { AddButtonComponent } from './components/add-button.component';
import { NotesComponent } from './components/notes.component';
import { routing }        from './notes.routing';
import { SharedModule }        from '../shared/shared.module';

@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    AddButtonComponent
  ],
  imports: [
    SharedModule,
    routing,
    HttpModule,
    EffectsModule.run(NotesEffectsService)
  ],
  providers: [
    NotesDataService,
    NotesService
  ]
})
export class NotesModule { }
