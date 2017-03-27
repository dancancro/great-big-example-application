import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BookEffects } from './book.effects';
import { GoogleBooksService } from './google-books.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'

// import { SearchAction, SearchComplete } from './book.actions';
import { Book } from './book.model';
import * as IDActions from '../id/id.actions';
import { slices } from '../util';

describe('BookEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      BookEffects,
      {
        provide: GoogleBooksService,
        useValue: jasmine.createSpyObj('googleBooksService', ['searchBooks'])
      }
    ]
  }));

  function setup(params?: { searchBooksReturnValue: any }) {
    const googleBooksService = TestBed.get(GoogleBooksService);
    if (params) googleBooksService.searchBooks.and.returnValue(params.searchBooksReturnValue);

    return {
      runner: TestBed.get(EffectsRunner),
      bookEffects: TestBed.get(BookEffects)
    };
  }

  describe('search$', () => {
    it('should return a new LoadSuccess action, with the books, on success, after the de-bounce', fakeAsync(() => {
      const book1 = { id: '111', volumeInfo: {} } as Book;
      const book2 = { id: '222', volumeInfo: {} } as Book;
      const books = [book1, book2];

      const {runner, bookEffects} = setup({ searchBooksReturnValue: Observable.of(books) });

      const expectedResult = new IDActions.LoadSuccess(slices.SEARCH, books);

      runner.queue(new IDActions.Load(slices.SEARCH, 'query'));

      let result = null;
      bookEffects.search$.subscribe(_result => result = _result);
      tick(299); // test de-bounce
      expect(result).toBe(null);
      tick(300);
      expect(result).toEqual(expectedResult);
    }));

    it('should return a new LoadSuccess action, with an empty array, if the books service throws', fakeAsync(() => {
      const {runner, bookEffects} = setup({ searchBooksReturnValue: Observable.throw(new Error()) });

      const expectedResult = new IDActions.LoadSuccess(slices.SEARCH, []);
      runner.queue(new IDActions.Load(slices.SEARCH, 'query'));

      let result = null;
      bookEffects.search$.subscribe(_result => result = _result);
      tick(299); // test de-bounce
      expect(result).toBe(null);
      tick(300);
      expect(result).toEqual(expectedResult);
    }));

    it(`should not do anything if the query is an empty string`, fakeAsync(() => {
      const {runner, bookEffects} = setup();

      runner.queue(new IDActions.Load(slices.SEARCH, ''));
      let result = null;
      bookEffects.search$.subscribe({
        next: () => result = false,
        complete: () => result = false,
        error: () => result = false
      });

      tick(300);
      expect(result).toBe(null);
    }));

  });
});
