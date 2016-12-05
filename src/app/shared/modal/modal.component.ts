import { Component } from '@angular/core';

@Component({
  selector: 'rio-modal',
  styles: ['modal.component.css'],
  template: `
    <div class="fixed top-0 bottom-0 left-0 right-0 z1 bg-darken-3">
      <ng-content></ng-content>
    </div>
  `
})
export class RioModalComponent { };
