import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail.component';
import { ProfilePopupComponent } from './profile-dialog.component';
import { ProfileDeletePopupComponent } from './profile-delete-dialog.component';

export const profileRoute: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'profile/:id',
        component: ProfileDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const profilePopupRoute: Routes = [
    {
        path: 'profile-new',
        component: ProfilePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'profile/:id/edit',
        component: ProfilePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'profile/:id/delete',
        component: ProfileDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
