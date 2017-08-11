/**
 * @module AboutModule
 */ /** */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
/**
 * Child routes for the lazy-loaded {@link AboutModule}
 */
const routes: Routes = [
  { path: '', component: AboutComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link AboutModule}.
 * @consumers {@link AboutModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRouting { }
