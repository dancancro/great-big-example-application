import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Crisis } from 'app/shared/model/crisis.model';
import { CrisisService } from './crisis.service';
import { CrisisComponent } from './crisis.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisUpdateComponent } from './crisis-update.component';
import { CrisisDeletePopupComponent } from './crisis-delete-dialog.component';
import { ICrisis } from 'app/shared/model/crisis.model';

@Injectable({ providedIn: 'root' })
export class CrisisResolve implements Resolve<ICrisis> {
    constructor(private service: CrisisService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((crisis: HttpResponse<Crisis>) => crisis.body));
        }
        return of(new Crisis());
    }
}

export const crisisRoute: Routes = [
    {
        path: 'crisis',
        component: CrisisComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'crisis/:id/view',
        component: CrisisDetailComponent,
        resolve: {
            crisis: CrisisResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'crisis/new',
        component: CrisisUpdateComponent,
        resolve: {
            crisis: CrisisResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'crisis/:id/edit',
        component: CrisisUpdateComponent,
        resolve: {
            crisis: CrisisResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const crisisPopupRoute: Routes = [
    {
        path: 'crisis/:id/delete',
        component: CrisisDeletePopupComponent,
        resolve: {
            crisis: CrisisResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.crisis.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
