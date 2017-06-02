import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from '../../core/services/auth.guard';
import { CanDeactivateGuard } from '../../shared/can-deactivate/can-deactivate.guard';
import { SelectivePreloadingStrategy } from '../../shared/selective-preloading-strategy';
import { HeroesPage } from './heroes.page';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: HeroesPage,
        children: [
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule',
                // canLoad: [AuthGuard]
            },
            {
                path: 'crisis-center',
                loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
                data: { preload: true },
                // canLoad: [AuthGuard]
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'hero/:id', component: HeroDetailComponent,
                // canLoad: [AuthGuard]
            },
            { path: 'list', loadChildren: './hero/hero.module#HeroModule' },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.heroes.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
        SelectivePreloadingStrategy
    ]
})
export class HeroesRouting { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
