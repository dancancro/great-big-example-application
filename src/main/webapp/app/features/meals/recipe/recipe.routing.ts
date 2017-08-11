/**
 * @module RecipeModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from './recipe.component';
/**
 * Child routes for the lazy-loaded {@link RecipeModule}
 */
const routes: Routes = [
    { path: '', component: RecipeComponent }
];
/**
 * @whatItDoes Responsible for providing additional routes for the {@link RecipeModule}.
 * @consumers {@link RecipeModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class RecipeRouting { }
