import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
