import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';
import { ClaimRebuttalComponent } from './claim-rebuttal.component';
import { ClaimRebuttalDetailComponent } from './claim-rebuttal-detail.component';
import { ClaimRebuttalUpdateComponent } from './claim-rebuttal-update.component';
import { ClaimRebuttalDeletePopupComponent } from './claim-rebuttal-delete-dialog.component';
import { IClaimRebuttal } from 'app/shared/model/claim-rebuttal.model';

@Injectable({ providedIn: 'root' })
export class ClaimRebuttalResolve implements Resolve<IClaimRebuttal> {
    constructor(private service: ClaimRebuttalService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((claimRebuttal: HttpResponse<ClaimRebuttal>) => claimRebuttal.body));
        }
        return of(new ClaimRebuttal());
    }
}

export const claimRebuttalRoute: Routes = [
    {
        path: 'claim-rebuttal',
        component: ClaimRebuttalComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'claim-rebuttal/:id/view',
        component: ClaimRebuttalDetailComponent,
        resolve: {
            claimRebuttal: ClaimRebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'claim-rebuttal/new',
        component: ClaimRebuttalUpdateComponent,
        resolve: {
            claimRebuttal: ClaimRebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'claim-rebuttal/:id/edit',
        component: ClaimRebuttalUpdateComponent,
        resolve: {
            claimRebuttal: ClaimRebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const claimRebuttalPopupRoute: Routes = [
    {
        path: 'claim-rebuttal/:id/delete',
        component: ClaimRebuttalDeletePopupComponent,
        resolve: {
            claimRebuttal: ClaimRebuttalResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claimRebuttal.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
