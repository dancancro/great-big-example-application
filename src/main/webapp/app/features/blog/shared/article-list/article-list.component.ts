import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../../../core/store';
import { Article } from '../../../../core/store/article/article.model';
import { Layout } from '../../../../core/store/layout/layout.model';
import { BlogPageLayout } from '../../blog.layout';
import * as SliceActions from '../../../../core/store/slice/slice.actions';
import * as EntityActions from '../../../../core/store/entity/entity.actions';
import { slices } from '../../../../core/store/util';
import { Entities } from '../../../../core/store/entity/entity.model';

@Component({
    selector: 'jhi-article-list',
    templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit, OnDestroy {
    articles$: Store<Entities<Article>>;
    articlesSub: Subscription;
    articles: Article[] = [];
    loading = false;
    totalPages: Array<number> = [1];
    layout$: Store<BlogPageLayout>;
    layoutSub: Subscription;
    layout: BlogPageLayout;

    constructor(
        private store: Store<fromRoot.RootState>
    ) { }

    @Input() limit: number;

    ngOnInit() {
        const self = this;  // because we need to refer to this.limit inside a function
        this.articles$ = this.store.select(fromRoot.getArticlesState);
        this.articlesSub = this.articles$.subscribe((articles) => {
            this.loading = articles.loading;
            this.articles = articles.ids.map((id) => articles.entities[id]) || [];

            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            this.totalPages = Array.from(new Array(Math.ceil(articles.totalItems / self.limit)), (val, index) => index + 1);
        })
        this.layout$ = this.store.select(fromRoot.getBlogPageLayout);
        this.layoutSub = this.layout$
            .distinctUntilChanged((prev, next) => JSON.stringify(prev) === JSON.stringify(next))
            .subscribe((layout) => {
                this.layout = layout;
                this.store.dispatch(new EntityActions.Unload(slices.ARTICLE));
                this.store.dispatch(new EntityActions.Load(slices.ARTICLE, { query: layout.filters }));
            })
        this.setPageTo(1);
    }

    setPageTo(pageNumber) {

        // Create limit and offset filter (if necessary)
        const query: any = {}
        if (this.limit) {
            query.filters = {
                limit: this.limit,
                offset: (this.limit * (pageNumber - 1))
            }
        }

        this.store.dispatch(new SliceActions.Patch(slices.LAYOUT, ['blogPage'], query));
    }

    ngOnDestroy() {
        this.articlesSub && this.articlesSub.unsubscribe();
        this.layoutSub && this.layoutSub.unsubscribe();
    }
}
