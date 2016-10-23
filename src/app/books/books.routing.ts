import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { BookExistsGuard } from './book-exists.guard';
import { FindBookPage } from './find-book.page';
import { ViewBookPage } from './view-book.page';
import { CollectionPage } from './collection.page';

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
    canActivate: [ BookExistsGuard ],
    component: ViewBookPage
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);