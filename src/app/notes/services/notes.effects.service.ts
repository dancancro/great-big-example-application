import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { NotesDataService } from './notes.data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { StateUpdates, Effect } from '@ngrx/effects'

@Injectable()
export class NotesEffectsService {
  constructor(private notesDataService: NotesDataService, private updates$: StateUpdates<any>) { }

  @Effect() add$ = this.updates$
    .whenAction('ADD_NOTE')
    .map(update => update.action.payload)
    .switchMap(payload => this.notesDataService.addNote(payload)
      .map(res => ({ type: "UPDATE_NOTE_FROM_SERVER", payload: { note: res } }))
      .catch(() => Observable.of({ type: "UPDATE_FAILED" }))
    )

  @Effect() update$ = this.updates$
    .whenAction('UPDATE_NOTE_TEXT')
    .map(update => update.action.payload)
    .switchMap(payload => this.notesDataService.updateNote(payload)
      .map(res => ({ type: "UPDATE_NOTE_FROM_SERVER", payload: { note: res } }))
      .catch(() => Observable.of({ type: "UPDATE_FAILED" }))
    )

  @Effect() init$ = this.updates$
    .whenAction('INIT_NOTES')
    .switchMap(() => this.notesDataService.getNotes().mergeMap(notes => Observable.from(notes))
      .map(res => ({ type: "ADD_NOTE_FROM_SERVER", payload: res }))
      .catch(() => Observable.of({ type: "FETCH_FAILED" }))
    )
}