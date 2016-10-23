import { Component, Input } from '@angular/core';

@Component({
  selector: 'rio-navigator',
  styles: [require('./navigator.css')],
  template: `
    <nav
      [attr.data-testid]="testid"
      class="flex heading items-center p1 bg-white border-bottom">
      <ng-content></ng-content>
    </nav>
  `
})
export class RioNavigator {
  @Input() testid: string;
};
