import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../../core/store';
import { Article } from '../../../../core/store/article/article.model';
import * as EntityActions from '../../../../core/store/entity/entity.actions';
import { slices } from '../../../../core/store/util';

@Component({
    selector: 'jhi-article-preview',
    templateUrl: './article-preview.component.html'
})
export class ArticlePreviewComponent {
    @Input() article: Article;

    constructor(
        private store: Store<fromRoot.RootState>,
    ) { }

    onToggleFavorite(favorited: boolean) {
        let favoritesCount;
        if (favorited) {
            favoritesCount = this.article.favoritesCount + 1;
        } else {
            favoritesCount = this.article.favoritesCount - 1;
        }
        this.store.dispatch(new EntityActions.Update(slices.ARTICLE, { id: this.article.id, favorited, favoritesCount }));
    }
}
