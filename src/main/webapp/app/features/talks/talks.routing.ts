import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { Store } from '@ngrx/store';

import { StoreAndRouterConnectorGuard } from '../../core/store/store-and-router-connector.guard';
import { TalksPage } from './talks.page';
import { TalksAndFiltersPage } from './talks-and-filters/talks-and-filters.page';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '', component: TalksPage,
        children: [
            {
                path: '', pathMatch: 'full', component: TalksAndFiltersPage,
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'greatBigExampleApplicationApp.talks.home.title'
                },
                canActivate: [UserRouteAccessService]
            },
            {
                path: 'talk/:id', component: TalkDetailsComponent,
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'greatBigExampleApplicationApp.talks.home.title'
                },
                canActivate: [UserRouteAccessService]
            }]
    }
];

export const routedComponents = [TalksAndFiltersPage, TalkDetailsComponent];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TalksRouting { }
