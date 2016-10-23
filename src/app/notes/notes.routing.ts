import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { NotesPage } from './notes.page';

const routes: Routes = [
  { path: '', component: NotesPage }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
