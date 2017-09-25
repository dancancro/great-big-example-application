import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { JhiEventManager } from 'ng-jhipster';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { JhiAlertService } from 'ng-jhipster';

import * as fromRoot from '../../../core/store';
import { Article } from '../../../core/store/article/article.model';
import { Comment } from '../../../core/store/comment/comment.model';
import { Profile } from '../../../core/store/profile/profile.model';
import { slices } from '../../../core/store/util';
import * as EntityActions from '../../../core/store/entity/entity.actions';
import { Account, Principal } from '../../../shared';

@Component({
    selector: 'jhi-article-component',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit, OnDestroy {
    comments$: Observable<Comment[]>;
    commentsSub: Subscription;
    article$: Observable<Article>;
    article: Article;
    articleSub: Subscription;
    canModify: boolean;
    comments: Comment[];
    commentControl = new FormControl();
    commentFormErrors = {};
    isSubmitting = false;
    isDeleting = false;
    currentUserProfile: Profile;
    currentUserProfile$: Observable<Profile>;
    currentUserProfileSub: Subscription;
    newComment$: Observable<Comment>;
    newCommentSub: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private store: Store<fromRoot.RootState>,
        private alertService: JhiAlertService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        // this.identity = this.principal.identity();
        this.currentUserProfile$ = this.store.select(fromRoot.getCurrentProfile);
        this.article$ = this.store.select(fromRoot.getSelectedArticle);
        this.articleSub = this.article$.subscribe((article) => {
            this.store.dispatch(new EntityActions.Load(slices.COMMENT, { query: { slug: article.slug } }));
            this.article = article;
        });
        this.comments$ = this.store.select(fromRoot.getCommentsForSelectedArticle);
        this.commentsSub = this.comments$.subscribe((comments) => this.comments = comments);
        this.newCommentSub = this.store.select(fromRoot.getCleanTempComment).subscribe((comment) =>
            this.commentControl.setValue(comment ? comment.body : '')
        )

        this.currentUserProfileSub = Observable.combineLatest(this.currentUserProfile$, this.article$).subscribe(
            ([profile, article]) => {
                this.currentUserProfile = profile;

                this.canModify = article && article.author && (this.currentUserProfile.username === article.author.username);
            }
        );
    }

    onToggleFavorite(favorited: boolean) {
        this.store.dispatch(new EntityActions.Patch(slices.ARTICLE, { id: this.article.id, favorited }));
    }

    onToggleFollowing(following: boolean) {
        this.store.dispatch(new EntityActions.Patch(slices.PROFILE, { id: this.article.author.username, following }));
    }

    deleteArticle() {
        this.isDeleting = true;
        this.store.dispatch(new EntityActions.Delete(slices.ARTICLE, this.article));
    }

    addComment() {
        if (!this.commentControl.value) return;

        this.commentFormErrors = {};
        this.store.dispatch(new EntityActions.AddTemp(slices.COMMENT, { body: this.commentControl.value }));
        this.store.dispatch(new EntityActions.Add(slices.COMMENT, { articleId: this.article.id, body: this.commentControl.value }));
        this.commentControl.reset('');
    }

    onDeleteComment(comment) {
        this.store.dispatch(new EntityActions.Delete(slices.COMMENT, comment));
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    ngOnDestroy() {
        this.commentsSub && this.commentsSub.unsubscribe();
        this.currentUserProfileSub && this.currentUserProfileSub.unsubscribe();
        this.articleSub && this.articleSub.unsubscribe();
        this.newCommentSub && this.newCommentSub.unsubscribe();
    }
}
