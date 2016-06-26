import { Component, OnInit } from '@angular/core';

import { NoteComponent } from './note.component';
import { AddButtonComponent } from './add.button.component';
import { Note } from '../../index';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [NoteComponent, AddButtonComponent]
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  
  constructor() {}
  
  onAddNote(colour){
    this.notes.push({
        "text": "",
        "colour": colour,
        "left": 200,
        "top": 100
      })
  }
  
  onChangeNoteText(newText: string, note: Note){
    this.notes.forEach((anote: Note) =>{
      if(anote==note){
        anote.text = newText;
      }
    })
  }

  onChangeNotePosition(newPosition: any, note: Note){
    this.notes.forEach((anote: Note) =>{
      if(anote==note){
        anote.left = newPosition.left;
        anote.top = newPosition.top;
      }
    })
  }

  ngOnInit() {
    console.log('onInit')
  }

}
