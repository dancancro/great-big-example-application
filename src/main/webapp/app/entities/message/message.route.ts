import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from 'app/shared/model/message.model';
import { MessageService } from './message.service';
import { MessageComponent } from './message.component';
import { MessageDetailComponent } from './message-detail.component';
import { MessageUpdateComponent } from './message-update.component';
import { MessageDeletePopupComponent } from './message-delete-dialog.component';
import { IMessage } from 'app/shared/model/message.model';

@Injectable({ providedIn: 'root' })
export class MessageResolve implements Resolve<IMessage> {
    constructor(private service: MessageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((message: HttpResponse<Message>) => message.body));
        }
        return of(new Message());
    }
}

export const messageRoute: Routes = [
    {
        path: 'message',
        component: MessageComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.message.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'message/:id/view',
        component: MessageDetailComponent,
        resolve: {
            message: MessageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.message.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'message/new',
        component: MessageUpdateComponent,
        resolve: {
            message: MessageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.message.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'message/:id/edit',
        component: MessageUpdateComponent,
        resolve: {
            message: MessageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.message.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const messagePopupRoute: Routes = [
    {
        path: 'message/:id/delete',
        component: MessageDeletePopupComponent,
        resolve: {
            message: MessageResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.message.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
