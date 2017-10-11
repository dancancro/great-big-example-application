import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../../core/store';
import { Article } from '../../../core/store/article/article.model';
import { User } from '../../../core/store/user/user.model';
import { Entities } from '../../../core/store/entity/entity.model';

@Injectable()
export class EditorGuard implements CanActivate {
    // articles$: Observable<Article[]>;
    articles$: Observable<Entities<Article>>;
    user$: Observable<User>;

    constructor(
        private store: Store<fromRoot.RootState>,
        private router: Router
    ) {
        this.articles$ = this.store.select(fromRoot.getArticlesState);
        this.user$ = this.store.select(fromRoot.getCurrentUser);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return Observable.combineLatest(this.articles$, this.user$, (articles, user) => {
            const slug = route.params['slug'];
            if (articles.ids.filter((id) => articles.entities[id].slug === slug && articles.entities[id].author.username === user.login).length === 1) {
                return true;
                // } else if (!articles.loaded) {
                //     return true;
            } else {
                console.log('EDITOR GUARD FALSE');
                this.router.navigateByUrl('/features/blog');
                return false;
            }
        });
    }
}
