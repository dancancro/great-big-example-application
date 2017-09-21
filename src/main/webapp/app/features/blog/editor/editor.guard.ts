import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../../../core/store';
import { Article } from '../../../core/store/article/article.model';
import { User } from '../../../core/store/user/user.model';

@Injectable()
export class EditorGuard implements CanActivate {
    articles$: Observable<Article[]>;
    user$: Observable<User>;

    constructor(
        private store: Store<fromRoot.RootState>,
        private router: Router
    ) {
        this.articles$ = this.store.select(fromRoot.getArticles);
        this.user$ = this.store.select(fromRoot.getCurrentUser);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        return Observable.combineLatest(this.articles$, this.user$, (articles, user) => {
            const slug = route.params['slug'];
            if (articles.filter((article) => article.slug === slug && article.author.username === user.login).length === 1) {
                return true;
            } else {
                this.router.navigateByUrl('/features/blog');
                return false;
            }
        }).toPromise();
    }
}
