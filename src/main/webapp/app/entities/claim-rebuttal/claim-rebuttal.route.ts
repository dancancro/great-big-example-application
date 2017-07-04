import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ClaimRebuttalComponent } from './claim-rebuttal.component';
import { ClaimRebuttalDetailComponent } from './claim-rebuttal-detail.component';
import { ClaimRebuttalPopupComponent } from './claim-rebuttal-dialog.component';
import { ClaimRebuttalDeletePopupComponent } from './claim-rebuttal-delete-dialog.component';

import { Principal } from '../../shared';

export const claimRebuttalRoute: Routes = [
    {
        path: 'claim-rebuttal',
        component: ClaimRebuttalComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'claim-rebuttal/:id',
        component: ClaimRebuttalDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const claimRebuttalPopupRoute: Routes = [
    {
        path: 'claim-rebuttal-new',
        component: ClaimRebuttalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'claim-rebuttal/:id/edit',
        component: ClaimRebuttalPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'claim-rebuttal/:id/delete',
        component: ClaimRebuttalDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
