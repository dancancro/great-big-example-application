import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from '../../shared/can-deactivate/can-deactivate.guard';
import { SelectivePreloadingStrategy } from '../../shared/selective-preloading-strategy';
import { DashboardComponent } from './dashboard.component';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.dashboard.home.title',
            source: 'https://github.com/implustech/famn',
            tags: ['todo list']
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
