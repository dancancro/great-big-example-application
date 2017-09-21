import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { CommentComponent } from './comment.component';
import { CommentDetailComponent } from './comment-detail.component';
import { CommentPopupComponent } from './comment-dialog.component';
import { CommentDeletePopupComponent } from './comment-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class CommentResolvePagingParams implements Resolve<any> {

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

export const commentRoute: Routes = [
    {
        path: 'comment',
        component: CommentComponent,
        resolve: {
            'pagingParams': CommentResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'comment/:id',
        component: CommentDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const commentPopupRoute: Routes = [
    {
        path: 'comment-new',
        component: CommentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'comment/:id/edit',
        component: CommentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'comment/:id/delete',
        component: CommentDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
