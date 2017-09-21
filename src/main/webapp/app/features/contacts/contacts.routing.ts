import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsPage } from './contacts.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '', component: ContactsPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.contact.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [ContactsPage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRouting { }
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
