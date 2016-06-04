import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Note } from './note.model'
import { NotesService } from './services/notes.service';

//import { NotesServiceServerFirstOnAdd } from './services/notes.service.server_first_on_add';
import { NotesServiceStoreFirstOnAddClientId } from './services/notes.service.store_first_on_add_client_id';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Observable<Note[]>;
  notesService: NotesService;

  constructor(notesService: NotesServiceStoreFirstOnAddClientId) {
    this.notesService = notesService;  
    this.notes = notesService.getNotes();    
  }
  
  onAddNote(noteText){
    this.notesService.addNote(noteText);
  }
  
  onChangeNoteText(newText: string, note: Note){
    this.notesService.changeNoteText(newText, note);
  }

  ngOnInit() {
    this.notesService.initialise();
  }

}
