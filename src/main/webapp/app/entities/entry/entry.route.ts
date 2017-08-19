import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';

import { EntryComponent } from './entry.component';
import { EntryDetailComponent } from './entry-detail.component';
import { EntryPopupComponent } from './entry-dialog.component';
import { EntryDeletePopupComponent } from './entry-delete-dialog.component';

export const entryRoute: Routes = [
    {
        path: 'entry',
        component: EntryComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'entry/:id',
        component: EntryDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const entryPopupRoute: Routes = [
    {
        path: 'entry-new',
        component: EntryPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'entry/:id/edit',
        component: EntryPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'entry/:id/delete',
        component: EntryDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.entry.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
