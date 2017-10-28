/**
 * @module MealsModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Parent routes for the {@link MealsRouting}
 */
const routes: Routes = [
    {
        path: '',
        data: {
            layout: {
                paddingTop: false,
                zIndex: 0
            }
        },
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'recipe/:slug',
        loadChildren: './recipe/recipe.module#RecipeModule'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
/**
 * @whatItDoes The {@link MealsRouting} is a
 * [Routing Module](https://angular.io/docs/ts/latest/guide/router.html#routing-module) that
 * handles the app's routing concerns.
 * @consumers {@link AppModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 *
 * The returned {@link MealsRouting} class is a Routing Module containing both the RouterModule
 * directives and the Dependency Injection providers that produce a configured Router.
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class MealsRouting { }
