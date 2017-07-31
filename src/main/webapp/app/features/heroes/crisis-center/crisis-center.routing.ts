import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from '../../../shared/can-deactivate/can-deactivate.guard';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterPage } from './crisis-center.page';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisDetailResolver } from './crisis-detail/crisis-detail.resolver';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const routes: Routes = [
    {
        path: '',
        component: CrisisCenterPage,
        children: [
            {
                path: '',
                component: CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent,
                        canDeactivate: [CanDeactivateGuard],
                        resolve: {
                            crisis: CrisisDetailResolver
                        }
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            },
            {
                path: 'compose',
                component: ComposeMessageComponent,
                outlet: 'popup'
            }
        ]
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
        CrisisDetailResolver
    ]
})
export class CrisisCenterRouting { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
