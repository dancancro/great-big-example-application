import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Note } from './note.model'
import { AppState } from './note.model';
import { NotesDataService } from './services/notes.data.service';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})
export class NotesComponent implements OnInit {
  store: Store<AppState>;
  notes: Observable<Note[]>;
  notesDataService: NotesDataService;

  constructor(store: Store<AppState>, notesDataService: NotesDataService) {
    this.store = store;
    this.notesDataService = notesDataService;
    
    this.notes = store.select<Note[]>('notes');    
  }
  
  onAddNote(noteText){
    //** Store First **
    this.store.dispatch({type: "ADD_NOTE", payload: {text: noteText, colour: "red"}});   
    this.syncToServer();
    
    //** Server First **
    // this.notesDataService.addNote({text: noteText, colour: "red"}).subscribe( note => {
    //   this.store.dispatch({type: "ADD_NOTE_FROM_SERVER", payload: note})
    // });
  }
  
  onChangeNoteText(newText: string, note: Note){
    //client first - Let the reducer handle the mutation, then sync with the DB
    
    //Give the reducer a chance to create a new updated note
    this.store.dispatch({type: "UPDATE_NOTE_TEXT", payload: {id: note.id, newText}});
    
    //now synchronise the mutated state with the DB
    this.syncToServer();
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

  ngOnInit() {
    this.notesDataService.getNotes().mergeMap( notes => Observable.from(notes)).subscribe( note => {
      console.log(`got note from db: ${JSON.stringify(note)}`)
      this.store.dispatch({type: "ADD_NOTE_FROM_SERVER", payload: note});
    });
  }

}
