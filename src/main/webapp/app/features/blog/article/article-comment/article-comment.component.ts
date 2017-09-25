import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../../../core/store';
import { Article } from '../../../../core/store/article/article.model';
import { Comment } from '../../../../core/store/comment/comment.model';
import { User } from '../../../../core/store/user/user.model';

@Component({
    selector: 'jhi-article-comment',
    templateUrl: './article-comment.component.html'
})
export class ArticleCommentComponent implements OnInit, OnDestroy {
    article$: Observable<Article>;
    article: Article;
    currentUser$: Observable<User>;
    currentUserSub: Subscription;
    currentUser: User;

    @Input() comment: Comment;
    @Output() deleteComment = new EventEmitter<boolean>();

    canModify: boolean;

    constructor(
        private store: Store<fromRoot.RootState>
    ) { }

    ngOnInit() {
        this.currentUser$ = this.store.select(fromRoot.getCurrentUser);
        this.article$ = this.store.select(fromRoot.getSelectedArticle);

        // Load the current user's data
        this.currentUserSub = Observable.combineLatest(this.currentUser$, this.article$).subscribe(
            ([user, article]) => {
                this.currentUser = user;

                this.canModify = this.comment && (this.currentUser.login === this.comment.author.username);
            }
        );
    }

    deleteClicked() {
        this.deleteComment.emit(true);
    }

    ngOnDestroy() {
        this.currentUserSub && this.currentUserSub.unsubscribe();
    }

}
