/**
 * @module HomeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './filter/filter.pipe';
import { FilterUtilitiesService } from './filter/filter-utilities.service';
import { RemapPipe } from './filter/remap.pipe';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { LimitToPipe } from './limit-to.pipe';
import { RecipeAdComponent } from './recipe-ad/recipe-ad.component';
import { StickyScrollComponent } from './sticky-scroll/sticky-scroll.component';
import { MealsSharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the home page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
    imports: [
        HomeRouting,
        InfiniteScrollModule,
        MealsSharedModule
    ],
    declarations: [
        FilterComponent,
        FilterPipe,
        HomeComponent,
        LimitToPipe,
        RecipeAdComponent,
        RemapPipe,
        StickyScrollComponent
    ],
    providers: [FilterUtilitiesService]
})
export class HomeModule { }
