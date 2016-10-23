import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { RioAboutPage } from './about/about.page';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
      { path: '', redirectTo: 'about', pathMatch: 'full'},
      { path: 'about', component: RioAboutPage },
      { path: 'not-found', component: NotFoundPage }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
