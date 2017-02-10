import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'core', pathMatch: 'full' },
      { path: 'notes', loadChildren: 'app/notes/notes.module#NotesModule' },
      { path: 'debate', loadChildren: 'app/debate/debate.module#DebateModule' },
      { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
      { path: 'counter', loadChildren: 'app/counter/counter.module#CounterModule' },
      { path: 'contacts', loadChildren: 'app/contact/contact.module#ContactModule' },
      { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
      { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
      { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule] // re-export the module declarations
})
export class AppRoutingModule { };


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/