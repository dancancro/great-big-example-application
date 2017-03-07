import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import { Note } from '../core/store/note/note.model';
import * as actions from '../core/store/note/note.actions';
import { entityNames } from '../core/store/util'

let uuid = require('uuid');

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesPage implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private store: Store<fromRoot.RootState>) {
  }

  onAddNote(colour) {
    this.store.dispatch(new actions.Add({
      text: '',
      colour: colour,
      left: 200,
      top: 300
    }, entityNames.NOTE));
  }

  onChangeNoteText(newText: string, note: Note) {
    this.store.dispatch(new actions.Update({ text: newText, id: note.id }, entityNames.NOTE));
  }

  onChangeNotePosition(newPosition: any, note: Note) {
    this.store.dispatch(new actions.Update({ id: note.id, left: newPosition.left, top: newPosition.top }, entityNames.NOTE));
  }

  ngOnInit() {
    this.notes$ = this.store.select(fromRoot.getNotes);
    // probably don't need this.
    // this.store.dispatch(new noteActions.InitializeAction());
  }

}
