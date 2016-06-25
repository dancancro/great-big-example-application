import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Draggable } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-note',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.css'],
  directives: [Draggable, NgClass]
})
export class NoteComponent {
  @Input() text: string;
  @Input() top: number;
  @Input() left: number;
  @Input() colour: string;
  @Input() disabled: boolean;
  
  @Output() changeNoteText = new EventEmitter(false);
  @Output() changeNotePosition = new EventEmitter(false);

  constructor() {}
}