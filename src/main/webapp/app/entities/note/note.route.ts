import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { NoteComponent } from './note.component';
import { NoteDetailComponent } from './note-detail.component';
import { NotePopupComponent } from './note-dialog.component';
import { NoteDeletePopupComponent } from './note-delete-dialog.component';

export const noteRoute: Routes = [
    {
        path: 'note',
        component: NoteComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.note.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'note/:id',
        component: NoteDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.note.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const notePopupRoute: Routes = [
    {
        path: 'note-new',
        component: NotePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.note.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'note/:id/edit',
        component: NotePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.note.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'note/:id/delete',
        component: NoteDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.note.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
