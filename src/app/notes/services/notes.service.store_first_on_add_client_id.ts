import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import 'node-uuid';
declare let uuid; //this is a hack stop Typescript compilation problems when addressing the globally available uuid interface

import { Note } from '../note.model'
import { AppState } from '../note.model';
import { NotesService } from './notes.service';
import { NotesDataService } from './notes.data.service';

@Injectable()
export class NotesServiceStoreFirstOnAddClientId implements NotesService {
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

  addNote(text: string): void {
    this.store.dispatch({ type: "ADD_NOTE", payload: { text: text, colour: "red", id:uuid.v1() } });
    this.syncToServer();
  }
  
  changeNoteText(text: string, note: Note): void {
    this.store.dispatch({ type: "UPDATE_NOTE_TEXT", payload: { id: note.id, text: text } });
    this.syncToServer();
  }

  syncToServer() {
    this.store.getState().notes.forEach(note => {
      if (note.dirty === true) {
        //json-server accepts a Post for a pre-existing id and updates it in place
        this.notesDataService.addNote(note).subscribe(note => {
          this.store.dispatch({ type: "UPDATE_NOTE_FROM_SERVER", payload: { note } });
        });
      }
    });
  }
}