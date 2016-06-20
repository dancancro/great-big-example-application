import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Note } from '../note.model'
import { NotesService } from '../services/notes.service';
import { NoteComponent } from './note.component';
import { AddButtonComponent } from './add.button.component';

//Service implementations - only 1 can be used at a time
//import { NotesServiceHttpOnly } from '../services/notes.service.http_only';
//import { NotesServiceServerFirstOnAdd } from '../services/notes.service.server_first_on_add';
//import { NotesServiceStoreFirstOnAdd } from '../services/notes.service.store_first_on_add';
import { NotesServiceStoreOnly } from '../services/notes.service.store_only';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [NoteComponent, AddButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {
  notes: Observable<Note[]>;
  notesService: NotesService;

  constructor(notesService: NotesServiceStoreOnly) {
    this.notesService = notesService;  
    this.notes = notesService.getNotes();    
  }
  
  onAddNote(noteText, colour){
    this.notesService.addNote(noteText, colour, 100, 150);
  }
  
  onChangeNoteText(newText: string, note: Note){
    this.notesService.changeNoteText(newText, note);
  }

  onChangeNotePosition(newPosition: any, note: Note){
    this.notesService.changeNotePosition(newPosition.left, newPosition.top, note);
  }

  ngOnInit() {
    this.notesService.initialise();
  }

}
