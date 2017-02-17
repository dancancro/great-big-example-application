import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookExistsGuard } from './book-exists/book-exists.guard';
import { FindBookPage } from './find-book.page';
import { ViewBookPage } from './view-book.page';
import { CollectionPage } from './collection.page';
import { SelectivePreloadingStrategy } from '../shared/selective-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    component: CollectionPage
  },
  {
    path: 'book/find',
    component: FindBookPage
  },
  {
    path: 'book/:id',
    canActivate: [BookExistsGuard],
    component: ViewBookPage
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