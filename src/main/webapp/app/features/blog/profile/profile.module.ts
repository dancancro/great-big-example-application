import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';
import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites/profile-favorites.component';
import { ProfileRouting } from './profile.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        ProfileRouting,
        SharedModule
    ],
    declarations: [
        ProfileArticlesComponent,
        ProfileComponent,
        ProfileFavoritesComponent
    ],

    providers: [
    ]
})
export class ProfileModule { }
