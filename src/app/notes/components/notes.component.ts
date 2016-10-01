import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NoteComponent } from './note.component';
import { Note } from '../../index';
import { NotesService } from '../services/notes.service'

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  providers: [NotesService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {
  $notes: Observable<Note[]>
  notesService: NotesService;
  
  constructor(notesService: NotesService) {
    this.notesService = notesService;
    this.$notes = this.notesService.getNotes();
  }
  
  onAddNote(colour){
    this.notesService.addNote("", colour, 200, 100);
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
