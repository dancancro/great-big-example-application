import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full'},
  { path: 'notes', loadChildren: 'app/notes/notes.module#NotesModule' },
  { path: 'debate', loadChildren: 'app/debate/debate.module#DebateModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { path: 'counter', loadChildren: 'app/counter/counter.module#CounterModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
  { path: '**', redirectTo: 'core/not-found', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
