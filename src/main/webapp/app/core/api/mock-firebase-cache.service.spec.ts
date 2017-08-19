import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MockApiData } from './mock-api-data.spec';

@Injectable()
export class MockAngularFireOffline {
  recipeList$;
  input;
  database = {
    list: undefined,
    object: undefined
  };
  private mockArray: Array<Object>;
  constructor() {
    this.database.list = (input: string, query?) => {
      return this.recipeList$.asObservable();
    };
    this.database.object = (input: string) => {
      this.input = input;
      return this.recipeList$.asObservable();
    };
    this.mockArray = MockApiData;
    this.recipeList$ = new Subject();
    this.update();
  }
  update() {
    let nextObj;
    if (this.input === 'client/recipes/slug-2') {
      nextObj = this.mockArray[1];
    } else {
      nextObj = this.mockArray;
    }
    this.recipeList$.next(nextObj);
  }
}
