import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorPage } from './editor.page';
import { AddPage } from './add.page';
import { EditorGuard } from './editor.guard';
import { EntityExistsGuard } from '../../../core/services/entity-exists.guard';
import { UserRouteAccessService } from '../../../shared';
import { slices } from '../../../core/store/util';

const routes: Routes = [
    {
        path: '',
        component: AddPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.blog.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':slug',
        component: EditorPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.blog.home.title',
            slice: slices.ARTICLE
        },
        canActivate: [UserRouteAccessService, EditorGuard, EntityExistsGuard]
    }
];

export const routedComponents = [
    AddPage,
    EditorPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRouting { }
