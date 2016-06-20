import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Draggable } from '../../shared';
import { Note } from '../note.model'

@Component({
  moduleId: module.id,
  selector: 'app-note',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.css'],
  directives: [Draggable, NgClass]
})
export class NoteComponent {
  @Input() note: Note;
  @Output() changeNoteText = new EventEmitter(false);
  @Output() changeNotePosition = new EventEmitter(false);

  constructor() {}
}
