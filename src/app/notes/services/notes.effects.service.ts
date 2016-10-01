import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { NotesDataService } from './notes.data.service';
import { Note } from '../../app.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects'

@Injectable()
export class NotesEffectsService {
  constructor(private store: Store<Note>, private notesDataService: NotesDataService, private action$: Actions) {}

  @Effect() update$ = this.action$
    .ofType('UPDATE_NOTE_TEXT', 'UPDATE_NOTE_POSITION', 'ADD_NOTE')
    .withLatestFrom(this.store.select('notes'))
    .mergeMap(notes => Observable.from(notes))
    .filter((note:Note) => {return (note.dirty==true)})
    .switchMap((updatedNote:Note) => this.notesDataService.addOrUpdateNote(updatedNote)
      .map((responseNote:Note) => ({ type: "UPDATE_NOTE_FROM_SERVER", payload: { note: responseNote } }))
      .catch(() => Observable.of({ type: "UPDATE_FAILED" }))
    )

  @Effect() init$ = this.action$
    .ofType('INIT_NOTES')
    .switchMap(() => this.notesDataService.getNotes().mergeMap(notes => Observable.from(notes))
      .map(res => ({ type: "ADD_NOTE_FROM_SERVER", payload: res }))
      .catch(() => Observable.of({ type: "FETCH_FAILED" }))
    )
}