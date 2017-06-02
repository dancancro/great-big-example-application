import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesPage } from './notes.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: NotesPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.notes.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [NotesPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotesRouting { }
