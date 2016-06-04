import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Note } from '../note.model'
import { AppState } from '../note.model';
import { NotesService } from './notes.service';
import { NotesDataService } from './notes.data.service';

@Injectable()
export class NotesServiceServerFirstOnAdd implements NotesService {
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
    this.notesDataService.addNote({ text: text, colour: "red" }).subscribe(note => {
      this.store.dispatch({ type: "ADD_NOTE_FROM_SERVER", payload: note })
    });
  }

  changeNoteText(text: string, note: Note): void {
    this.store.dispatch({ type: "UPDATE_NOTE_TEXT", payload: { id: note.id, text: text } });
    this.syncToServer();
  }

  syncToServer() {
    this.store.getState().notes.forEach(note => {
      if (note.dirty === true) {
        this.notesDataService.updateNote(note).subscribe(serverNote => {
          this.store.dispatch({ type: "UPDATE_NOTE_FROM_SERVER", payload: { note } });
        });
      }
    });
  }
}