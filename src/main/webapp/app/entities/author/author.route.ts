import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { AuthorComponent } from './author.component';
import { AuthorDetailComponent } from './author-detail.component';
import { AuthorPopupComponent } from './author-dialog.component';
import { AuthorDeletePopupComponent } from './author-delete-dialog.component';

import { Principal } from '../../shared';

export const authorRoute: Routes = [
    {
        path: 'author',
        component: AuthorComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.author.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'author/:id',
        component: AuthorDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.author.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const authorPopupRoute: Routes = [
    {
        path: 'author-new',
        component: AuthorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.author.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'author/:id/edit',
        component: AuthorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.author.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'author/:id/delete',
        component: AuthorDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.author.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
