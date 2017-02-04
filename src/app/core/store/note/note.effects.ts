import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';

import { Note } from './note.model';
import { DataService } from '../data.service';
import * as note from './note.actions';
import { Entities } from '../entity/entity.model';

@Injectable()
export class NoteEffects {
  constructor(private store: Store<Note>,
    private dataService: DataService,
    private action$: Actions) { }

  @Effect()
  load$ = this.action$
    .ofType(note.ActionTypes.LOAD)
    .startWith(new note.LoadAction())
    .switchMap(() =>
      this.dataService.getNotes()
        .mergeMap(fetchedNotes => Observable.from(fetchedNotes))
        .map((fetchedNote: Note) => new note.LoadSuccessAction(fetchedNote))  // one action per note
        .catch((error) => Observable.of(new note.LoadFailAction(error)))
    );

  @Effect()
  update$ = this.action$
    .ofType(note.ActionTypes.UPDATE_NOTE_TEXT,
    note.ActionTypes.UPDATE_NOTE_POSITION,
    note.ActionTypes.ADD_NOTE)
    .withLatestFrom(this.store.select('notes'))
    .switchMap(([{}, notes]) =>
      Observable   // first element, {}, is action, but it isn't used
        .from((<any>notes).ids)
        .filter((id: string) => (<any>notes).entities[id].dirty)
        .switchMap((id: string) => this.dataService.addOrUpdateNote((<any>notes).entities[id]))
        .map((responseNote: Note) => new note.UpdateNoteSuccessAction(responseNote))
    );

}
