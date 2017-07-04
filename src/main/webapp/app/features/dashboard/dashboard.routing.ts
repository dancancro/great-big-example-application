import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from '../../shared/can-deactivate/can-deactivate.guard';
import { SelectivePreloadingStrategy } from '../../shared/selective-preloading-strategy';
import { DashboardPage } from './dashboard.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dashboard.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
        SelectivePreloadingStrategy
    ]
})
export class DashboardRouting { }
