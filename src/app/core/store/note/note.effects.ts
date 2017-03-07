import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Note } from './note.model';
import { EntityEffects } from '../entity/entity.effects';
import * as actions from './note.actions';
import { entityNames } from '../util';

@Injectable()
export class NoteEffects {
  @Effect()
  protected load$ = this.entityEffects.load$(this.action$, entityNames.NOTE, actions, 'notes');
  @Effect()
  protected update$ = this.entityEffects.update$(this.action$, entityNames.NOTE, actions, 'notes', this.store);

  constructor(
    private store: Store<Note>,
    private action$: Actions,
    protected entityEffects: EntityEffects<Note>
  ) { }
}

