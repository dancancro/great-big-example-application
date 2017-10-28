/**
 * @module MealsModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MealsRouting } from './meals.routing';
import { MealsSharedModule } from './shared/shared.module';

/**
 * @whatItDoes The module for the meals feature
 * @see [Angular 2 docs - the feature module](https://angular.io/guide/ngmodule#feature-modules)
 */
@NgModule({
    imports: [
        MealsSharedModule,
        MealsRouting,
        CommonModule
    ]
})
export class MealsModule { }
