import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../../../core/store';
import { Article } from '../../../../core/store/article/article.model';
import { Profile } from '../../../../core/store/profile/profile.model';
import { User } from '../../../../core/store/user/user.model';
import { Principal } from '../../../../shared';
import { slices } from '../../../../core/store/util';
import * as EntityActions from '../../../../core/store/entity/entity.actions';

@Component({
    selector: 'jhi-favorite-button',
    templateUrl: './favorite-button.component.html'
})
export class FavoriteButtonComponent implements OnInit {
    identity$: Promise<Account>;
    constructor(
        private store: Store<fromRoot.RootState>,
        private router: Router,
        private principal: Principal
    ) { }

    @Input() article: Article;

    ngOnInit() {
        this.identity$ = this.principal.identity();
    }

    toggleFavorite() {
        if (!this.principal.isAuthenticated()) {
            this.router.navigateByUrl('/');
            return;
        }

        // Favorite the article if it isn't favorited yet
        this.store.dispatch(new EntityActions.Patch(slices.ARTICLE, { id: this.article.id, favorited: !this.article.favorited }));

    }
}
