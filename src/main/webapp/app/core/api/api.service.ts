/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import {
    AngularFireOffline,
    AfoListObservable,
    AfoObjectObservable
} from 'angularfire2-offline';
import { Observable } from 'rxjs/Observable';
/**
 * @whatItDoes Reponsible for returning data from an API.
 * @consumers {@link HomeComponent}, {@link RecipeComponent}, {@link RecipeAdComponent}
 * @providerScope {@link AppComponent}
 *
 * --------------------------------------------------------
 * --------------------------------------------------------
 *
 * **Features:**
 * - Currently uses Firebase
 * - Consumers don't need to know which API is used to get the data.
 * - Could easily switch to use another API in the future without changing any of the API
 * consumers.
 */
@Injectable()
export class ApiService {
    /**
     * Observable of about data.
     */
    about: AfoObjectObservable<any>;
    /**
     * Observable of a list of recipes.
     */
    recipes: AfoListObservable<any[]>;
    /**
     * Observable of filter options. Used to set up the {@link FilterComponent}
     */
    filterOptions: AfoObjectObservable<any>;
    /**
     * Observable of the latest recipe published.
     */
    latest: Observable<any>;
    /**
     * Creates the {@link ApiService}
     * @param afo AngularFireOffline is used to connect to Firebase and cache data for offline use
     */
    constructor(
        private afo: AngularFireOffline) {
        this.onInit();
    }
    /**
     * Called when creating the service.
     * - Gets the required items from Firebase to use in the app
     */
    onInit() {
        this.about = this.afo.database.object('client/about');
        this.recipes = this.afo.database.list('client/recipes', {
            query: {
                orderByChild: 'revStamp'
            }
        });
        this.filterOptions = this.afo.database.object('client/filter');
        this.latest = this.recipes.pluck('0');

    }
    /**
     * @returns the recipe associated with the slug
     * @param slug a unique string associated with a recipe
     */
    slugToRecipe(slug: string): AfoObjectObservable<any> {
        return this.afo.database.object(`client/recipes/${slug}`);
    }
}
