import 'rxjs/add/operator/let';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import { Note } from '../core/store/note/note.model';
import * as noteActions from '../core/store/note/note.actions';

let uuid = require('node-uuid');

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.page.html',
  styleUrls: ['notes.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesPage {
  notes$: Observable<Note[]>;

  constructor(private store: Store<fromRoot.RootState>) {
  }

  onAddNote(colour) {
    this.store.dispatch(new noteActions.AddNoteAction({
      id: uuid.v1(),
      text: '',
      colour: colour,
      left: 200,
      top: 300
      }));
  }

  onChangeNoteText(newText: string, note: Note) {
    this.store.dispatch(new noteActions.UpdateNoteTextAction({text: newText, id: note.id}));
  }

  onChangeNotePosition(newPosition: any, note: Note) {
    this.store.dispatch(new noteActions.UpdateNotePositionAction({id: note.id, left: newPosition.left, top: newPosition.top}));
  }

  ngOnInit() {
    this.notes$ = this.store.let(fromRoot.getNotes);
    // probably don't need this.
    // this.store.dispatch(new noteActions.InitializeAction());
  }

}
