import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rio-form',
  template: `
    <form [formGroup]="group"
      (ngSubmit)="onSubmit.emit($event)">
      <ng-content></ng-content>
    </form>
  `
})
export class RioFormComponent {
  @Input() group: FormGroup;
  @Output() onSubmit = new EventEmitter<Event>();
};
