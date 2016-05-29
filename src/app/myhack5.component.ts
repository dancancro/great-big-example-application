import { Component } from '@angular/core';
import { NotesComponent } from './notes';
import { NotesService } from './notes';

@Component({
  moduleId: module.id,
  selector: 'myhack5-app',
  templateUrl: 'myhack5.component.html',
  styleUrls: ['myhack5.component.css'],
  directives: [NotesComponent],
  providers: [NotesService]
})
export class Myhack5AppComponent {
  title = 'myhack5 works!';
}
