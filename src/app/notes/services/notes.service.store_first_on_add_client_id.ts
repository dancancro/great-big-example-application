import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

//TODO - implement client first uid generation
//import 'node-uuid';
//declare let uuid;
//uuid.v1()

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
    
    getNotes(): Observable<Note[]> {
        return this.store.select<Note[]>('notes');
    }
    
    addNote(noteText: string): void {
        this.store.dispatch({type: "ADD_NOTE", payload: {text: noteText, colour: "red"}});   
        this.syncToServer();
    }
    changeNoteText(newText: string, note: Note): void {
        //Give the reducer a chance to create a new updated note
        this.store.dispatch({type: "UPDATE_NOTE_TEXT", payload: {id: note.id, newText}});
        
        //now synchronise the mutated state with the DB
        this.syncToServer();        
    }
    initialise(): void {
        this.notesDataService.getNotes().mergeMap( notes => Observable.from(notes)).subscribe( note => {
        console.log(`got note from db: ${JSON.stringify(note)}`)
        this.store.dispatch({type: "ADD_NOTE_FROM_SERVER", payload: note});
        });        
    }
    
  syncToServer(){
    this.store.getState().notes.forEach(note => {
      if(note.dirty === true){
        console.log(`syncing note ${note.text} id:${note.id}`)
        //Update on the DB and dispatch a 'patch' event to reflect any changes that the DB might have made (e.g. audit timestamps)
        if(note.id){
          console.log("sync chose to update");
          this.notesDataService.updateNote(note).subscribe( serverNote => {
            this.store.dispatch({type: "UPDATE_NOTE_FROM_SERVER", payload: {originalNote: note, serverNote}});
          });
        }else{
          console.log("sync chose to add new");
          this.notesDataService.addNote(note).subscribe( serverNote => {
            this.store.dispatch({type: "UPDATE_NOTE_FROM_SERVER", payload: {originalNote: note, serverNote}});
          });          
        }
      }
    });    
  }
}