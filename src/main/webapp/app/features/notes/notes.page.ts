import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as uuid from 'uuid/uuid';

import * as fromRoot from '../../core/store';
import { Note } from '../../core/store/note/note.model';
import { slices } from '../../core/store/util';
import * as EntityActions from '../../core/store/entity/entity.actions';

@Component({
    selector: 'jhi-notes',
    templateUrl: './notes.page.html',
    styleUrls: ['./notes.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesPage implements OnInit {
    notes$: Store<Note[]>;

    constructor(private store: Store<fromRoot.RootState>) {
    }

    onAddNote(colour) {
        this.store.dispatch(new EntityActions.AddOptimistically(slices.NOTE, {
            id: uuid.v1(),
            text: '',
            colour,
            left: 200,
            top: 300
        }));
    }

    onChangeNoteText(newText: string, note: Note) {
        this.store.dispatch(new EntityActions.Patch(slices.NOTE, { id: note.id, text: newText }));
    }

    onChangeNotePosition(newPosition: any, note: Note) {
        this.store.dispatch(new EntityActions.Patch(slices.NOTE, { id: note.id, left: newPosition.left, top: newPosition.top }));
    }

    onDelete(note: Note) {
        this.store.dispatch(new EntityActions.Delete(slices.NOTE, note))
    }

    ngOnInit() {
        this.notes$ = this.store.select(fromRoot.getNotes);
        this.store.dispatch(new EntityActions.Load(slices.NOTE));
    }

}
