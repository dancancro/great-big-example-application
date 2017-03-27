import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { CanDeactivateGuard } from './shared/can-deactivate/can-deactivate.guard';
import { SelectivePreloadingStrategy } from './shared/selective-preloading-strategy';

const routes: Routes = [
  { path: 'bernie', loadChildren: 'app/bernie/bernie.module#BernieModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { path: 'contacts', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'counter', loadChildren: 'app/counter/counter.module#CounterModule' },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  { path: 'notes', loadChildren: 'app/notes/notes.module#NotesModule' },
  { path: 'wiki', loadChildren: 'app/wiki/wiki.module#WikiModule' },
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRouting { };


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
