import { Component, Input } from '@angular/core';

@Component({
  selector: 'rio-form-group',
  template: `
    <div
        [attr.data-testid]="testid"
        class="py2">
      <ng-content></ng-content>
    </div>
  `
})
export class RioFormGroupComponent {
  @Input() testid: string;
};
