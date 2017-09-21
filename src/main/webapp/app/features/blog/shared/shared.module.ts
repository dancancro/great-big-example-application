import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleMetaComponent } from './article-meta/article-meta.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { FollowButtonComponent } from './follow-button/follow-button.component';
import { ShowAuthedDirective } from './show-authed/show-authed.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        FavoriteButtonComponent,
        FollowButtonComponent,
        ShowAuthedDirective
    ],
    exports: [
        ArticleListComponent,
        ArticleMetaComponent,
        ArticlePreviewComponent,
        CommonModule,
        FavoriteButtonComponent,
        FollowButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        ShowAuthedDirective
    ]
})
export class SharedModule { }
