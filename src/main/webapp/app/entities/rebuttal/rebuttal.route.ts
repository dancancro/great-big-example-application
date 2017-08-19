import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';

import { RebuttalComponent } from './rebuttal.component';
import { RebuttalDetailComponent } from './rebuttal-detail.component';
import { RebuttalPopupComponent } from './rebuttal-dialog.component';
import { RebuttalDeletePopupComponent } from './rebuttal-delete-dialog.component';

export const rebuttalRoute: Routes = [
    {
        path: 'rebuttal',
        component: RebuttalComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'rebuttal/:id',
        component: RebuttalDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const rebuttalPopupRoute: Routes = [
    {
        path: 'rebuttal-new',
        component: RebuttalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'rebuttal/:id/edit',
        component: RebuttalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'rebuttal/:id/delete',
        component: RebuttalDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
