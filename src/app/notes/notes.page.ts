import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../core/store';
import { Note } from '../core/store/note/note.model';
import { slices } from '../core/store/util'
import * as EntityActions from '../core/store/entity/entity.actions';

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
    this.store.dispatch(new EntityActions.Add(slices.NOTE, {
      text: '',
      colour: colour,
      left: 200,
      top: 300
    }));
  }

  onChangeNoteText(newText: string, note: Note) {
    this.store.dispatch(new EntityActions.Update(slices.NOTE, { text: newText, id: note.id }));
  }

  onChangeNotePosition(newPosition: any, note: Note) {
    this.store.dispatch(new EntityActions.Update(slices.NOTE, { id: note.id, left: newPosition.left, top: newPosition.top }));
  }

  ngOnInit() {
    this.notes$ = this.store.select(fromRoot.getNotes);
    // probably don't need this.
    // this.store.dispatch(new noteActions.InitializeAction());
  }

}
