import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from 'app/shared/model/comment.model';
import { CommentService } from './comment.service';
import { CommentComponent } from './comment.component';
import { CommentDetailComponent } from './comment-detail.component';
import { CommentUpdateComponent } from './comment-update.component';
import { CommentDeletePopupComponent } from './comment-delete-dialog.component';
import { IComment } from 'app/shared/model/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentResolve implements Resolve<IComment> {
    constructor(private service: CommentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((comment: HttpResponse<Comment>) => comment.body));
        }
        return of(new Comment());
    }
}

export const commentRoute: Routes = [
    {
        path: 'comment',
        component: CommentComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'comment/:id/view',
        component: CommentDetailComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'comment/new',
        component: CommentUpdateComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'comment/:id/edit',
        component: CommentUpdateComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const commentPopupRoute: Routes = [
    {
        path: 'comment/:id/delete',
        component: CommentDeletePopupComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.comment.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
