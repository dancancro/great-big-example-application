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
export class NotesServiceStoreFirstOnAdd implements NotesService {
  store: Store<AppState>;
  notesDataService: NotesDataService;

  constructor(store: Store<AppState>, notesDataService: NotesDataService) {
    this.store = store;
    this.notesDataService = notesDataService;
  }

  initialise(): void {
    this.notesDataService.getNotes().mergeMap(notes => Observable.from(notes)).subscribe(note => {
      this.store.dispatch({ type: "ADD_NOTE_FROM_SERVER", payload: note });
    });
  }

  getNotes(): Observable<Note[]> {
    return this.store.select<Note[]>('notes');
  }

  addNote(text: string, colour: string, left: number, top: number): void {
    this.store.dispatch({ type: "ADD_NOTE", payload: { text: text, colour: colour, left: left, top: top, id:uuid.v1() } });
    this.syncToServer();
  }
  
  changeNoteText(text: string, note: Note): void {
    this.store.dispatch({ type: "UPDATE_NOTE_TEXT", payload: { id: note.id, text: text } });
    this.syncToServer();
  }

  changeNotePosition(left: number, top: number, note: Note): void {
    this.store.dispatch({ type: "UPDATE_NOTE_POSITION", payload: { id: note.id, left: left, top: top } });
    this.syncToServer();
  }

  syncToServer() {
    this.store.take(1).subscribe(appState => {
      appState.notes.forEach(note => {
        if (note.dirty === true) {
          //json-server accepts a Post for a pre-existing id and updates it in place
          this.notesDataService.addNote(note).subscribe(note => {
            this.store.dispatch({ type: "UPDATE_NOTE_FROM_SERVER", payload: { note } });
          });
        }
      })
    });
  }
}