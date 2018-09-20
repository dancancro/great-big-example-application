import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Talk } from 'app/shared/model/talk.model';
import { TalkService } from './talk.service';
import { TalkComponent } from './talk.component';
import { TalkDetailComponent } from './talk-detail.component';
import { TalkUpdateComponent } from './talk-update.component';
import { TalkDeletePopupComponent } from './talk-delete-dialog.component';
import { ITalk } from 'app/shared/model/talk.model';

@Injectable({ providedIn: 'root' })
export class TalkResolve implements Resolve<ITalk> {
    constructor(private service: TalkService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((talk: HttpResponse<Talk>) => talk.body));
        }
        return of(new Talk());
    }
}

export const talkRoute: Routes = [
    {
        path: 'talk',
        component: TalkComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'talk/:id/view',
        component: TalkDetailComponent,
        resolve: {
            talk: TalkResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'talk/new',
        component: TalkUpdateComponent,
        resolve: {
            talk: TalkResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'talk/:id/edit',
        component: TalkUpdateComponent,
        resolve: {
            talk: TalkResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const talkPopupRoute: Routes = [
    {
        path: 'talk/:id/delete',
        component: TalkDeletePopupComponent,
        resolve: {
            talk: TalkResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.talk.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
