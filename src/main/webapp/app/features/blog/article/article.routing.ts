import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { EntityExistsGuard } from '../../../core/services/entity-exists.guard';
import { UserRouteAccessService } from '../../../shared';
import { slices } from '../../../core/store/util';

const routes: Routes = [
    {
        path: ':slug',
        component: ArticleComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.blog.home.title',
            slice: slices.ARTICLE
        },
        canActivate: [UserRouteAccessService, EntityExistsGuard],
    }
];

export const routedComponents = [ArticleComponent];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRouting { }
