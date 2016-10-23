import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rio-button',
  template: `
    <button
      [attr.data-testid]="testid"
      [id]="qaid"
      (click)="handleClick($event)"
      type="{{type || 'button'}}"
      class="btn btn-primary {{className}}">

      <ng-content></ng-content>
    </button>
  `
})
export class RioButtonComponent {
  @Input() className: string;
  @Input() type: string;
  @Input() qaid: string;
  @Input() testid: string;
  @Output() onClick = new EventEmitter<any>();

  handleClick(event) {
    this.onClick.emit(event);
  }
};
