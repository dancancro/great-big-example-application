import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { DebatePage } from './debate.page';

const routes: Routes = [
  { path: '', component: DebatePage }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
