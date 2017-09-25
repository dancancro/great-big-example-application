import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../../core/store';
import { Article } from '../../../core/store/article/article.model';
import { Account, Principal } from '../../../shared';
import { User } from '../../../core/store/user/user.model';
import * as SliceActions from '../../../core/store/slice/slice.actions';
import * as EntityActions from '../../../core/store/entity/entity.actions';
import { slices, completeAssign } from '../../../core/store/util';
import { BlogPageLayout, initialBlogPageLayout } from '../blog.layout';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit, OnDestroy {
    user$: Observable<User>;
    userSub: Subscription;
    tags$: Observable<string[]>;
    tagsSub: Subscription;
    tags: Array<string> = [];
    tagsLoaded = false;
    blogPageLayout$: Observable<BlogPageLayout>;

    constructor(
        private principal: Principal,
        private store: Store<fromRoot.RootState>,
        private router: Router,
    ) { }

    ngOnInit() {
        this.user$ = this.store.select(fromRoot.getCurrentUser);
        this.tags$ = this.store.select(fromRoot.getTags);
        this.tagsSub = this.tags$.subscribe((tags) => {
            this.tags = tags;
            this.tagsLoaded = true;
        })
        this.blogPageLayout$ = this.store.select(fromRoot.getBlogPageLayout);
        this.userSub = this.user$.subscribe((user) => {
            // set the article list accordingly
            if (this.principal.isAuthenticated()) {
                this.setListTo('feed');
            } else {
                this.setListTo('all');
            }
        });
    }

    setListTo(type = '', filters?: Object) {
        // If feed is requested but user is not authenticated, redirect to login
        if (type === 'feed' && !this.principal.isAuthenticated()) {
            this.router.navigateByUrl('/');
            return;
        }
        // Otherwise, set the list query
        const query: any = { type, currentPage: 1 };
        if (filters) {
            query.offset = 0;
            query.filters = filters;
            query.currentPage = 1;
        }

        this.store.dispatch(new SliceActions.Patch(slices.LAYOUT, ['blogPage'], query));
    }

    ngOnDestroy() {
        this.userSub && this.userSub.unsubscribe();
        this.tagsSub && this.tagsSub.unsubscribe();
    }
}
