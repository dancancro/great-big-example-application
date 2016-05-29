import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Note } from './note.model'
import { AppState } from './note.model';
import { NotesService } from './notes.service';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})
export class NotesComponent implements OnInit {
  store: Store<AppState>;
  notes: Observable<Note[]>;
  notesService: NotesService;

  constructor(store: Store<AppState>, notesService: NotesService) {
    this.store = store;
    this.notesService = notesService;
    
    this.notes = store.select<Note[]>('notes');    
  }
  
  onAddNote(noteText){
    this.store.dispatch({type: "ADD_NOTE", payload: {text: noteText, colour: "red"}});
    
    this.syncToServer();
    
    //server first
    // this.notesService.addNote({text: noteText, colour: "red"}).subscribe( note => {
    //   this.store.dispatch({type: "ADD_NOTE_FROM_SERVER", payload: note})
    // });
  }
  
  onChangeNoteText(newText: string, id: number){
    //Local first approach.. let the reducer handle the mutation, then sync with the DB
    
    //Give the reducer a chance to mutate the state
    this.store.dispatch({type: "UPDATE_NOTE_TEXT", payload: {id, newText}});
    
    //now synchronise the mutated state with the DB
    this.syncToServer();
  }
  
  syncToServer(){
    this.store.getState().notes.forEach(note => {
      if(note.dirty === true){
        //Update on the DB and dispatch a 'patch' event to reflect any changes that the DB might have made (e.g. audit timestamps)
        delete note['dirty'];//server doesn't want to know about this
        if(note.id){
          this.notesService.updateNote(note).subscribe( serverNote => {
            this.store.dispatch({type: "UPDATE_NOTE_FROM_SERVER", payload: {originalNote: note, serverNote}});
          });
        }else{
          this.notesService.addNote(note).subscribe( serverNote => {
            this.store.dispatch({type: "UPDATE_NOTE_FROM_SERVER", payload: {originalNote: note, serverNote}});
          });          
        }
      }
    });    
  }

  ngOnInit() {
    this.notesService.getNotes().mergeMap( notes => Observable.from(notes)).subscribe( note => {
      console.log(`got note from db: ${JSON.stringify(note)}`)
      this.store.dispatch({type: "ADD_NOTE_FROM_SERVER", payload: note});
    });
  }

}
