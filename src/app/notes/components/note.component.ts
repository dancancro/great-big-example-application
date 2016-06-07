import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../note.model'

@Component({
  moduleId: module.id,
  selector: 'app-note',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.css']
})
export class NoteComponent {
  @Input() note: Note;
  @Output() changeNoteText = new EventEmitter(false);

  constructor() {}
}
