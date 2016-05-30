import { Component } from '@angular/core';
import { NotesComponent } from './notes';
import { NotesService } from './notes';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NotesComponent],
  providers: [NotesService]
})
export class AppComponent {
  title = 'Angular2 State Management Demo';
}
