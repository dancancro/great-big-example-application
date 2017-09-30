import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Note, initialNote } from './note.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';
import { EntityAction } from '../entity/entity.actions';

@Injectable()
export class NoteEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.NOTE, this.dataService, this.store, initialNote);
    @Effect()
    private updateToRemote$ = entityFunctions.updateToRemote$(this.actions$, slices.NOTE, this.dataService, this.store, initialNote);
    @Effect()
    private deleteFromRemote$ = entityFunctions.deleteFromRemote$(this.actions$, slices.NOTE, this.dataService, this.store);
    @Effect()
    private addToRemote$ = entityFunctions.addToRemote$(this.actions$, slices.NOTE, this.dataService, this.store, initialNote);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions<EntityAction<Note>>,
        private dataService: RESTService
    ) { }
}
