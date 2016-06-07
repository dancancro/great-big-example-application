import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Note } from '../note.model'
import { NotesService } from '../services/notes.service';
import { NoteComponent } from './note.component';

//Service implementations - only 1 can be used at a time
//import { NotesServiceHttpOnly } from '../services/notes.service.http_only';
//import { NotesServiceServerFirstOnAdd } from './services/notes.service.server_first_on_add';
import { NotesServiceStoreFirstOnAdd } from '../services/notes.service.store_first_on_add';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [NoteComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {
  notes: Observable<Note[]>;
  notesService: NotesService;

  constructor(notesService: NotesServiceStoreFirstOnAdd) {
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
