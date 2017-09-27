import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Recipe } from './api-interfaces';
import { FilterOptions } from '../../features/meals/home/filter/filter-options';

@Injectable()
export class MockApiService {
    options$;
    recipe$;
    recipes$;
    recipes: FirebaseListObservable<any[]>;
    filterOptions: Observable<FilterOptions>;
    private filterOptionsData = {
        searchFields: []
    };
    private recipesData = [];
    private recipeData = {
        id: 0,
        blurb: 'blurb text'
    };
    private id = 0;
    constructor() {
        this.recipe$ = new ReplaySubject();
        this.options$ = new Subject();
        this.recipes$ = new Subject();
        this.filterOptions = this.options$.asObservable();
        this.recipes = this.recipes$.asObservable();
        this.update();
    }
    recipe(key: number): Observable<Recipe> {
        this.update();
        return this.recipe$.asObservable();
    }
    slugToRecipe(slug: string): Observable<Recipe> {
        this.update();
        return this.recipe$.asObservable();
    }
    update() {
        this.addRecipe();
        this.options$.next(this.filterOptionsData);
        this.recipe$.next(this.recipeData);
        this.recipes$.next(this.recipesData);
    }
    private addRecipe() {
        this.id++;
        const newRecipe = this.recipeData;
        newRecipe.id = this.id;
        this.recipesData.push(newRecipe);
    }
}
