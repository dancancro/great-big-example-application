import { Component } from '@angular/core';

@Component({
  selector: 'rio-modal-content',
  styles: ['modal/modal.component.css'],
  template: `
    <div class="p2 z2 bg-white modal relative">
      <ng-content></ng-content>
    </div>
  `
})
export class RioModalContentComponent { };
