import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgClass } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: "add-button",
  templateUrl: 'add.button.component.html',
  styleUrls: ['add.button.component.css'], 
  directives: [NgClass]
})
export class AddButtonComponent {
  @Input() colour: string;
  @Output() add: EventEmitter<string> = new EventEmitter<string>();

  onClick($event) {
    $event.preventDefault();
    this.add.emit(this.colour);
  }
}