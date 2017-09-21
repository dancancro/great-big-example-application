import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPage } from './blog.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '', component: BlogPage,
        children: [
            {
                path: '',
                loadChildren: './home/home.module#HomeModule',
            },
            {
                path: 'article',
                loadChildren: './article/article.module#ArticleModule'
            },
            {
                path: 'editor',
                loadChildren: './editor/editor.module#EditorModule'
            },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.blog.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [BlogPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRouting { }
