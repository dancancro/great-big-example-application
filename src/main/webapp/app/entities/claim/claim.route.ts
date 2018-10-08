import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Claim } from 'app/shared/model/claim.model';
import { ClaimService } from './claim.service';
import { ClaimComponent } from './claim.component';
import { ClaimDetailComponent } from './claim-detail.component';
import { ClaimUpdateComponent } from './claim-update.component';
import { ClaimDeletePopupComponent } from './claim-delete-dialog.component';
import { IClaim } from 'app/shared/model/claim.model';

@Injectable({ providedIn: 'root' })
export class ClaimResolve implements Resolve<IClaim> {
    constructor(private service: ClaimService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((claim: HttpResponse<Claim>) => claim.body));
        }
        return of(new Claim());
    }
}

export const claimRoute: Routes = [
    {
        path: 'claim',
        component: ClaimComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claim.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'claim/:id/view',
        component: ClaimDetailComponent,
        resolve: {
            claim: ClaimResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claim.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'claim/new',
        component: ClaimUpdateComponent,
        resolve: {
            claim: ClaimResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claim.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'claim/:id/edit',
        component: ClaimUpdateComponent,
        resolve: {
            claim: ClaimResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claim.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const claimPopupRoute: Routes = [
    {
        path: 'claim/:id/delete',
        component: ClaimDeletePopupComponent,
        resolve: {
            claim: ClaimResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.claim.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
