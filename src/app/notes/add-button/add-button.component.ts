import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {
  @Input() colour: string;
  @Output() add: EventEmitter<string> = new EventEmitter<string>();

  onClick($event) {
    $event.preventDefault();
    this.add.emit(this.colour);
  }
}
