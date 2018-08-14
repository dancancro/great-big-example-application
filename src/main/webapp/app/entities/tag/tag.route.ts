import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TagComponent } from './tag.component';
import { TagDetailComponent } from './tag-detail.component';
import { TagPopupComponent } from './tag-dialog.component';
import { TagDeletePopupComponent } from './tag-delete-dialog.component';

export const tagRoute: Routes = [
    {
        path: 'tag',
        component: TagComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.tag.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tag/:id',
        component: TagDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.tag.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tagPopupRoute: Routes = [
    {
        path: 'tag-new',
        component: TagPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.tag.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tag/:id/edit',
        component: TagPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.tag.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tag/:id/delete',
        component: TagDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.tag.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
