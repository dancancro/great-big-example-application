/**
 * @module RecipeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { RecipeComponent } from './recipe.component';
import { RecipeRouting } from './recipe.routing';
import { MealsSharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the recipe page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
    imports: [
        MomentModule,
        RecipeRouting,
        MealsSharedModule
    ],
    declarations: [RecipeComponent]
})
export class RecipeModule { }
