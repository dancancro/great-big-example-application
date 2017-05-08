import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookExistsGuard } from './services/book-exists.guard';
import { FindBookPage } from './find-book.page';
import { ViewBookPage } from './view-book.page';
import { CollectionPage } from './collection.page';
import { SelectivePreloadingStrategy } from '../../shared/selective-preloading-strategy';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '',
        component: CollectionPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.books.home.title',
            source: 'https://github.com/ngrx/example-app',
            tags: ['local storage']
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'find',
        component: FindBookPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.books.home.title',
            source: 'https://github.com/ngrx/example-app',
            tags: ['API']
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'book/:id',
        component: ViewBookPage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.books.home.title',
            source: 'https://github.com/ngrx/example-app',
            tags: ['API']
        },
        canActivate: [UserRouteAccessService, BookExistsGuard]
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
        BookExistsGuard,
        SelectivePreloadingStrategy
    ]
})
export class BooksRouting { };

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
