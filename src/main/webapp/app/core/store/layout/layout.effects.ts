import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { Layout } from './layout.model';
import { slices, PayloadAction, typeFor } from '../util';
import { actions, SliceAction } from '../slice/slice.actions';
import { RESTService } from '../../services/rest.service';
import * as SliceActions from '../slice/slice.actions';
import * as EntityActions from '../entity/entity.actions';
import { WatchService } from '../../../features/talks/services/watch.service';
import { RootState } from '../';

/**
 * @whatItDoes Calls the WatchService with the provided talk id and then dispatches
 * another action with a different type and the same payload
 */
@Injectable()
export class LayoutEffects {
    @Effect() watchTalk = this.actions$.ofType('WATCH')
        .map((a: PayloadAction) => {
            this.watchService.watch(a.payload.id);
            return { type: 'TALK_WATCHED', payload: a.payload };
        });

    @Effect()
    private loadForQueryFromRemote = this.actions$
        .ofType(typeFor(slices.LAYOUT, SliceActions.actions.UPDATE))
        .filter((action: SliceAction) => action.payload.filters)   // TODO: make this a better test for this being the blog page layout
        .withLatestFrom(this.store)
        .switchMap(([action, state]) => {
            return this.dataService.getEntities(slices.ARTICLE, { query: state.layout.blogPage.filters }, state)
                .mergeMap((fetchedEntities) => Observable.from(fetchedEntities))
                .map((fetchedEntity) => new EntityActions.LoadSuccess(slices.ARTICLE, fetchedEntity))  // one action per entity
                .catch((err) => {
                    console.log(err);
                    return Observable.of(new EntityActions.AddUpdateFail(slices.ARTICLE, null));
                })
        }
        );

    // ADD COMMENT SUCCESS
    // this.commentControl.reset(''); // TODO: clear control on success

    // this.commentsService
    //     .add(this.article.slug, commentBody)
    //     .subscribe(
    //     (comment) => {
    //         this.comments.unshift(comment);
    //         this.commentControl.reset('');
    //         this.isSubmitting = false;
    //     },
    //     (errors) => {
    //         this.isSubmitting = false;
    //         this.commentFormErrors = errors;
    //     }
    //     );

    constructor(
        private watchService: WatchService,
        private actions$: Actions,
        private store: Store<RootState>,
        private dataService: RESTService
    ) { }
}
