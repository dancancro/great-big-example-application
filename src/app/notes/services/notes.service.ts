import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/mergeMap';
import { Note, AppState } from '../../index';
import { NotesDataService } from './notes.data.service';

let uuid = require('node-uuid');

@Injectable()
export class NotesService {
    store: Store<AppState>;

    constructor(store: Store<AppState>){
        this.store = store;
    }

    getNotes(): Observable<Note[]>{
      return this.store.select<Note[]>('notes');
    }
    addNote(text: string, colour: string, left: number, top: number): void{
      this.store.dispatch({ type: "ADD_NOTE", payload: {text, colour, left, top, id:uuid.v1()} });
    }
    changeNoteText(text: string, note: Note): void{console.log('changeNoteText')
      this.store.dispatch({type: "UPDATE_NOTE_TEXT", payload: {id: note.id, text: text}})
    }
    changeNotePosition(left: number, top: number, note: Note): void{
      this.store.dispatch({type: "UPDATE_NOTE_POSITION", payload: {id: note.id, left: left, top: top}})
    }
    
    initialise(): void{
        this.store.dispatch({ type: "INIT_NOTES", payload: { } });
    }

}