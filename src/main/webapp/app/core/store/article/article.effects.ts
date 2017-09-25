import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { Article, initialArticle } from './article.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as entityFunctions from '../entity/entity.functions';
import * as sliceFunctions from '../slice/slice.functions';
import { typeFor } from '../util';
import { actions, EntityAction } from '../entity/entity.actions';
import { SliceAction } from '../slice/slice.actions';
import * as EntityActions from '../entity/entity.actions';
import { initialBlogPageLayout } from '../../../features/blog/blog.layout';
import * as SliceActions from '../slice/slice.actions';
import * as fromRoot from '../../../core/store';
import { handleNavigation } from '../util';
import { RootState } from '../';

@Injectable()
export class ArticleEffects {
    @Effect()
    private loadFromRemote$ = entityFunctions.loadFromRemote$(this.actions$, slices.ARTICLE, this.dataService, this.store, initialArticle);
    @Effect()
    private updateToRemote$ = entityFunctions.updateToRemote$(this.actions$, slices.ARTICLE, this.dataService, this.store, initialArticle);
    @Effect()
    private addToRemote$ = entityFunctions.addToRemote$(this.actions$, slices.ARTICLE, this.dataService, this.store, initialArticle);
    @Effect()
    private deleteFromRemote$ = entityFunctions.deleteFromRemote$(this.actions$, slices.ARTICLE, this.dataService, this.store);
    @Effect()
    private selectArticle$ = entityFunctions.select$(this.actions$, slices.ARTICLE, this.dataService, this.store, initialArticle);

    @Effect({ dispatch: false })
    private navigateOnArticleAddSuccess = this.actions$
        .ofType(typeFor(slices.ARTICLE, actions.ADD_SUCCESS), typeFor(slices.ARTICLE, actions.UPDATE_SUCCESS))
        .map((action) => {
            this.router.navigateByUrl('/features/blog/article/' + action.payload.slug);
        });

    // TODO: This is kinda dodgey. It will forward after ANY update - probably not what we want.
    @Effect({ dispatch: false })  // Without { dispatch: false } you get 'Actions must be objects' error
    private navigateOnArticleDeleteSuccess = this.actions$
        .ofType(typeFor(slices.ARTICLE, actions.DELETE_SUCCESS))
        .map((action) => {
            this.router.navigateByUrl('/features/blog');   // don't include a trailing '/'
        });

    /*
     * Select the article whose slug is contained in the route
     */
    // @Effect()
    // navigateToArticle$ = handleNavigation(this.store, this.actions$, ['/features/blog/article/:slug', '/features/blog/editor/:slug'], (r: ActivatedRouteSnapshot, state: RootState) => {
    //     const slug = r.firstChild.firstChild.firstChild.firstChild.paramMap.get('slug');
    //     this.store.dispatch(new EntityActions.Select(slices.ARTICLE, { id: slug }));
    //     return of();
    // });

    constructor(
        private store: Store<RootState>,
        private actions$: Actions<EntityAction<Article>>,
        private router: Router,
        private dataService: RESTService
    ) { }
}
