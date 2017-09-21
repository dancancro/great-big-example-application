import { Component, Input } from '@angular/core';

import { Article } from '../../../../core/store/article/article.model';

@Component({
    selector: 'article-meta',
    templateUrl: './article-meta.component.html'
})
export class ArticleMetaComponent {
    @Input() article: Article;
}
