import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() text: string;
  @Input() top: number;
  @Input() left: number;
  @Input() colour: string;
  @Input() disabled: boolean;

  @Output() changeNoteText = new EventEmitter(false);
  @Output() changeNotePosition = new EventEmitter(false);

  constructor() { }

  handleChangeNotePosition(newPosition) {
    if (newPosition.left != this.left || newPosition.top != this.top) {
      this.changeNotePosition.emit(newPosition);
    }
  }
  handleChangeNoteText(text) {
    if (text != this.text) {
      this.changeNoteText.emit(text);
    }
  }
}
