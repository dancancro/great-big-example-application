import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WikiPage } from './wiki.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '', component: WikiPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.wiki.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [WikiPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WikiRouting { }
