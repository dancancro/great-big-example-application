/**
 * @module RecipeModule
 */ /** */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AfoObjectObservable } from 'angularfire2-offline';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../../../core/api/api-interfaces';
import { ApiService } from '../../../core/api/api.service';
/**
 * @whatItDoes Returns the {@link RecipeComponent} view.
 * @consumers {@link RecipeModule}, {@link RecipeRouting}
 */
@Component({
    selector: 'c2c-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnDestroy, OnInit {
    /**
     * Data used in the recipe view.
     */
    recipe: AfoObjectObservable<Recipe>;
    /**
     *
     */
    routerSubscription: Subscription;
    /**
     * Creates the {@link RecipeComponent}
     * @param activatedRoute provides a snapshot of the current route including the url slug
     * @param apiService provides data for the current recipe
     */
    constructor(
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService,
        private router: Router) {
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const slug: string = this.activatedRoute.snapshot.params['slug'];
                this.recipe = this.apiService.slugToRecipe(slug);
            }
        });
    }

    /**
     * Gets the current recipe slug on init
     */
    ngOnInit() {
        this.apiService.latest.subscribe((recipe) => {
            console.log(recipe.image);
        });
    }
    /**
     *
     */
    ngOnDestroy() {
        this.routerSubscription && this.routerSubscription.unsubscribe();
    }
}
