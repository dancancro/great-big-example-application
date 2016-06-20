import { Component, OnInit } from '@angular/core';

import { NotesDataService } from '../services/notes.data.service';
import { Note } from '../note.model';
import { NoteComponent } from './note.component';
import { AddButtonComponent } from './add.button.component';

@Component({
  moduleId: module.id,
  selector: 'app-controller-notes',
  templateUrl: 'notes.controller.component.html',
  directives: [NoteComponent,AddButtonComponent]
})
export class NotesControllerComponent implements OnInit {
  notesDataService: NotesDataService;
  notes: Note[] = [];

  constructor(notesDataService: NotesDataService) {
    this.notesDataService = notesDataService;
  }

  onAddNote(text, colour){
    this.notesDataService.addNote({ text: text, colour: colour, left:100, top:100 }).subscribe(note => {
      this.notes = [...this.notes, note];
    });
  }
  
  onChangeNoteText(text: string, note: Note){
    if(text !== note.text){
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
  }

  onChangeNotePosition(newPosition: any, note: Note){//TODO - Add in the if clause to this and above function and finish off
    if(note.left !== newPosition.left || note.top != newPosition.left){    
      this.notesDataService.updateNote(Object.assign({}, note, {left: newPosition.left, top: newPosition.top})).subscribe(updatedNote => {
        this.notes = this.notes.map(existingNote => {
          if(existingNote.id === updatedNote.id){
            return updatedNote;
          }else{
            return existingNote;
          }
        });
      });
    }
  }

  ngOnInit() {
    this.notesDataService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

}