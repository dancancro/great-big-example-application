import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Comment, initialComment } from './comment.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import { RootState } from '../';
import { EntityAction } from '../entity/entity.actions';

@Injectable()
export class CommentEffects {
    @Effect()
    private updateToRemote$ = entityFunctions.updateToRemote$(this.actions$, slices.COMMENT, this.dataService, this.store, initialComment);
    @Effect()
    private addToRemote$ = entityFunctions.addToRemote$(this.actions$, slices.COMMENT, this.dataService, this.store, initialComment);
    @Effect()
    private deleteFromRemote$ = entityFunctions.deleteFromRemote$(this.actions$, slices.COMMENT, this.dataService, this.store);
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.COMMENT, this.dataService, this.store, initialComment);

    constructor(
        private store: Store<RootState>,
        private actions$: Actions<EntityAction<Comment>>,
        private dataService: RESTService
    ) { }
}
