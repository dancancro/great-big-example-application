import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { NotesComponent } from './components/notes.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
