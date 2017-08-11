/**
 * @module LegalModule
 */ /** */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalComponent } from './legal.component';
/**
 * Child routes for the lazy-loaded {@link LegalModule}
 */
const routes: Routes = [
    { path: '', redirectTo: 'terms' },
    { path: 'terms', component: LegalComponent },
    { path: 'privacy', component: LegalComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link LegalModule}.
 * @consumers {@link LegalModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class LegalRouting { }
