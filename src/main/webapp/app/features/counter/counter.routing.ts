import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterPage } from './counter.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: CounterPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.contact.home.counter'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [CounterPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CounterRouting { }
