import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindBookPage } from './find-book.page';
import { ViewBookPage } from './view-book.page';
import { CollectionPage } from './collection.page';
import { SelectivePreloadingStrategy } from '../../shared/selective-preloading-strategy';
import { UserRouteAccessService } from '../../shared';
import { EntityExistsGuard } from '../../core/services/entity-exists.guard';
import { slices } from '../../core/store/util';

const routes: Routes = [
    {
        path: '',
        component: CollectionPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.books.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'find',
        component: FindBookPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.books.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'book/:id',
        component: ViewBookPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.books.home.title',
            slice: slices.BOOK
        },
        canActivate: [UserRouteAccessService, EntityExistsGuard]
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
        EntityExistsGuard,
        SelectivePreloadingStrategy
    ]
})
export class BooksRouting { };
