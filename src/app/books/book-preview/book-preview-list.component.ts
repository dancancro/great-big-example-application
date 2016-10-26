import { Component, Input } from '@angular/core';
import { Book } from '../../core/store/book/book.model';

@Component({
  selector: 'bc-book-preview-list',
  template: `
    <bc-book-preview *ngFor="let book of books" [book]="book"></bc-book-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
