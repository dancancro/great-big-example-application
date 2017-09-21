import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';
import { ProfileComponent } from './profile.component';
import { UserRouteAccessService } from '../../../shared';
import { slices } from '../../../core/store/util';
import { EntityExistsGuard } from '../../../core/services/entity-exists.guard';

const routes: Routes = [
    {
        path: ':username',
        component: ProfileComponent,
        children: [
            {
                path: '',
                component: ProfileArticlesComponent
            },
            {
                path: 'favorites',
                component: ProfileFavoritesComponent
            }
        ],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.profile.home.title',
            slice: slices.PROFILE
        },
        canActivate: [UserRouteAccessService, EntityExistsGuard]
    }
];

export const routedComponents = [ProfileComponent];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRouting { }
