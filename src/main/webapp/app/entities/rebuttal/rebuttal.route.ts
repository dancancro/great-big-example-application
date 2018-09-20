import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rebuttal } from 'app/shared/model/rebuttal.model';
import { RebuttalService } from './rebuttal.service';
import { RebuttalComponent } from './rebuttal.component';
import { RebuttalDetailComponent } from './rebuttal-detail.component';
import { RebuttalUpdateComponent } from './rebuttal-update.component';
import { RebuttalDeletePopupComponent } from './rebuttal-delete-dialog.component';
import { IRebuttal } from 'app/shared/model/rebuttal.model';

@Injectable({ providedIn: 'root' })
export class RebuttalResolve implements Resolve<IRebuttal> {
    constructor(private service: RebuttalService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((rebuttal: HttpResponse<Rebuttal>) => rebuttal.body));
        }
        return of(new Rebuttal());
    }
}

export const rebuttalRoute: Routes = [
    {
        path: 'rebuttal',
        component: RebuttalComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rebuttal/:id/view',
        component: RebuttalDetailComponent,
        resolve: {
            rebuttal: RebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rebuttal/new',
        component: RebuttalUpdateComponent,
        resolve: {
            rebuttal: RebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rebuttal/:id/edit',
        component: RebuttalUpdateComponent,
        resolve: {
            rebuttal: RebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const rebuttalPopupRoute: Routes = [
    {
        path: 'rebuttal/:id/delete',
        component: RebuttalDeletePopupComponent,
        resolve: {
            rebuttal: RebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.rebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
