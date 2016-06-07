import { Component, OnInit } from '@angular/core';

import { NotesDataService } from '../services/notes.data.service';
import { Note } from '../note.model';
import { NoteComponent } from './note.component';

@Component({
  moduleId: module.id,
  selector: 'app-controller-notes',
  templateUrl: 'notes.controller.component.html',
  directives: [NoteComponent]
})
export class NotesControllerComponent implements OnInit {
  notesDataService: NotesDataService;
  notes: Note[] = [];

  constructor(notesDataService: NotesDataService) {
    this.notesDataService = notesDataService;
  }

  onAddNote(text){
    this.notesDataService.addNote({ text: text, colour: "red" }).subscribe(note => {
      this.notes = [...this.notes, note];
    });
  }
  
  onChangeNoteText(text: string, note: Note){
    this.notesDataService.updateNote(Object.assign({}, note, {text: text})).subscribe(updatedNote => {
      this.notes = this.notes.map(existingNote => {
        if(existingNote.id === updatedNote.id){
          return updatedNote;
        }else{
          return existingNote;
        }
      });  
    });
  }

  ngOnInit() {
    this.notesDataService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

}