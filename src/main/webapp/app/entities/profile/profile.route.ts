import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'app/shared/model/profile.model';
import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail.component';
import { ProfileUpdateComponent } from './profile-update.component';
import { ProfileDeletePopupComponent } from './profile-delete-dialog.component';
import { IProfile } from 'app/shared/model/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileResolve implements Resolve<IProfile> {
    constructor(private service: ProfileService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((profile: HttpResponse<Profile>) => profile.body));
        }
        return of(new Profile());
    }
}

export const profileRoute: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'profile/:id/view',
        component: ProfileDetailComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'profile/new',
        component: ProfileUpdateComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'profile/:id/edit',
        component: ProfileUpdateComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const profilePopupRoute: Routes = [
    {
        path: 'profile/:id/delete',
        component: ProfileDeletePopupComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
