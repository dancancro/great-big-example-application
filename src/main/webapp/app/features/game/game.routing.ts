import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { SinglePlayerComponent } from './single-player/single-player.component';
import { MultiPlayerComponent } from './multi-player/multi-player.component';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.game.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'single-player',
        component: SinglePlayerComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.game.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'multi-player',
        component: MultiPlayerComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.game.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRouting { }
