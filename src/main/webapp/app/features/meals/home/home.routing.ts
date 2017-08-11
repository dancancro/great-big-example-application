/**
 * @module HomeModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
/**
 * Child routes for the lazy-loaded {@link HomeModule}
 */
const routes: Routes = [
  { path: '', component: HomeComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link HomeModule}.
 * @consumers {@link HomeModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRouting { }
