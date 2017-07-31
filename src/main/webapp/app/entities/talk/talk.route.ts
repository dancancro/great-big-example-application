import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { TalkComponent } from './talk.component';
import { TalkDetailComponent } from './talk-detail.component';
import { TalkPopupComponent } from './talk-dialog.component';
import { TalkDeletePopupComponent } from './talk-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class TalkResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const talkRoute: Routes = [
    {
        path: 'talk',
        component: TalkComponent,
        resolve: {
            'pagingParams': TalkResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'talk/:id',
        component: TalkDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const talkPopupRoute: Routes = [
    {
        path: 'talk-new',
        component: TalkPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'talk/:id/edit',
        component: TalkPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'talk/:id/delete',
        component: TalkDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
