import { Component } from '@angular/core';
import { NotesComponent } from './notes';
import { NotesControllerComponent } from './notes';
import { NotesDataService } from './notes';
import { NotesServiceServerFirstOnAdd } from './notes';
import { NotesServiceStoreFirstOnAdd } from './notes';
import { NotesServiceHttpOnly } from './notes';
import { NotesServiceStoreOnly } from './notes';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NotesComponent, NotesControllerComponent],
  providers: [NotesDataService, NotesServiceServerFirstOnAdd, NotesServiceStoreFirstOnAdd, NotesServiceHttpOnly, NotesServiceStoreOnly]
})
export class AppComponent {
  title = 'Angular2 State Management Demo';
}
