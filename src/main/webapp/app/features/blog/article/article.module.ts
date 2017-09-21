import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared/shared.module';
import { ArticleRouting } from './article.routing';
import { GreatBigExampleApplicationSharedModule } from '../../../shared/shared.module';
import { customHttpProvider } from '../../../core/interceptor/http.provider';

@NgModule({
    imports: [
        ArticleRouting,
        GreatBigExampleApplicationSharedModule,
        SharedModule
    ],
    declarations: [
        ArticleComponent,
        ArticleCommentComponent,
        MarkdownPipe
    ],
    providers: [
        customHttpProvider()
    ]
})
export class ArticleModule { }
