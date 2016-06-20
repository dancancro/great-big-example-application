import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { NotesDataService } from './notes.data.service';
import { Note } from '../index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Action } from '@ngrx/store';
import { StateUpdates, Effect } from '@ngrx/effects'

@Injectable()
export class NotesEffectsService {
  constructor(private notesDataService: NotesDataService, private updates$: StateUpdates<any>) {}

  //Note, effectively the same approach as notes.service.store_first_on_add where all updates and adds become a Post request and the backend just figures it out
  @Effect() update$ = this.updates$
    .whenAction('UPDATE_NOTE_TEXT', 'UPDATE_NOTE_POSITION', 'ADD_NOTE')
    .map(update => update.state.notes)
    .mergeMap(notes => Observable.from(notes))
    .filter((note:Note) => {return (note.dirty==true)})
    .switchMap((updatedNote:Note) => this.notesDataService.addNote(updatedNote)
      .map((responseNote:Note) => ({ type: "UPDATE_NOTE_FROM_SERVER", payload: { note: responseNote } }))
      .catch(() => Observable.of({ type: "UPDATE_FAILED" }))
    )

  @Effect() init$ = this.updates$
    .whenAction('INIT_NOTES')
    .switchMap(() => this.notesDataService.getNotes().mergeMap(notes => Observable.from(notes))
      .map(res => ({ type: "ADD_NOTE_FROM_SERVER", payload: res }))
      .catch(() => Observable.of({ type: "FETCH_FAILED" }))
    )
}