import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

import 'node-uuid';
declare let uuid; //this is a hack stop Typescript compilation problems when addressing the globally available uuid interface

import { Note } from '../note.model'
import { AppState } from '../note.model';
import { NotesService } from './notes.service';
import { NotesDataService } from './notes.data.service';

@Injectable()
export class NotesServiceStoreOnly implements NotesService {
  store: Store<AppState>;

  constructor(store: Store<AppState>, notesDataService: NotesDataService) {
    this.store = store;
  }

  initialise(): void {
    this.store.dispatch({ type: "INIT_NOTES", payload: { } });
  }

  getNotes(): Observable<Note[]> {
    return this.store.select<Note[]>('notes');
  }

  addNote(text: string): void {
    this.store.dispatch({ type: "ADD_NOTE", payload: { text: text, colour: "red", id:uuid.v1() } });
  }
  
  changeNoteText(text: string, note: Note): void {
    this.store.dispatch({ type: "UPDATE_NOTE_TEXT", payload: { id: note.id, text: text } });
  }
  
}