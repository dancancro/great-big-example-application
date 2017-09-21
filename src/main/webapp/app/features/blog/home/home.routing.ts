import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { UserRouteAccessService } from '../../../shared';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.blog.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [HomePage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouting { }
