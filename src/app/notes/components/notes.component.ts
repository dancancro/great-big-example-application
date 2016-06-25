import { Component, OnInit } from '@angular/core';

import { NoteComponent } from './note.component';
import { AddButtonComponent } from './add.button.component';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  directives: [NoteComponent, AddButtonComponent]
})
export class NotesComponent implements OnInit {
  
  constructor() {}
  
  onAddNote(colour){
    console.log(`adding note colour: ${colour}`);
  }
  
  onChangeNoteText(newText: string){
    console.log(`note text has changed to ${newText}`);
  }

  onChangeNotePosition(newPosition: any){
    console.log(`note has moved, new position is ${JSON.stringify(newPosition)}`);
  }

  ngOnInit() {
    console.log('onInit')
  }

}
