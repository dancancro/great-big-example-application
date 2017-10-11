import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MockApiData } from '../app/core/api/mock-api-data.spec';

@Injectable()
export class MockAngularFire {
    recipeList$;
    input;
    database = {
        list: (input: string, query?) => {
            return this.recipeList$.asObservable();
        },
        object: (input: string, query?) => {
            this.input = input;
            return this.recipeList$.asObservable();
        }
    };
    private mockArray: Array<Object>;
    constructor() {
        this.mockArray = MockApiData;
        this.recipeList$ = new Subject();
        this.update();
    }
    update(newValue?) {
        let nextObj;
        if (this.input === 'client/recipes/slug-2') {
            nextObj = this.mockArray[1];
        } else {
            nextObj = this.mockArray;
        }
        nextObj = { val: () => { return nextObj; } };
        if (newValue) {
            nextObj = newValue;
        }
        this.recipeList$.next(nextObj);
    }
}
