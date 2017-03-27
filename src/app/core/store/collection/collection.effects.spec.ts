import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { CollectionEffects } from './collection.effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Book } from '../book/book.model';
import * as IDActions from '../id/id.actions';
import { slices } from '../util';

describe('CollectionEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      CollectionEffects,
      {
        provide: Database,
        useValue: jasmine.createSpyObj('database', ['open', 'query', 'insert', 'executeWrite'])
      }
    ]
  }));

  function setup() {
    return {
      db: TestBed.get(Database),
      runner: TestBed.get(EffectsRunner),
      collectionEffects: TestBed.get(CollectionEffects)
    };
  }

  describe('openDB$', () => {
    it('should call db.open when initially subscribed to', () => {
      const {db, collectionEffects} = setup();
      collectionEffects.openDB$.subscribe();
      expect(db.open).toHaveBeenCalledWith('books_app');
    });
  });

  describe('loadCollection$', () => {
    it('should return a LoadSuccess action, with the books, on success', () => {
      const book1 = { id: '111', volumeInfo: {} } as Book;
      const book2 = { id: '222', volumeInfo: {} } as Book;

      const {db, runner, collectionEffects} = setup();

      const booksObservable = Observable.of(book1, book2);
      db.query.and.returnValue(booksObservable);

      const expectedResult = new IDActions.LoadSuccess(slices.COLLECTION, [book1, book2]);

      runner.queue(new IDActions.Load(slices.COLLECTION));

      collectionEffects.loadCollection$.subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });

    it('should return a LoadFail action, if the query throws', () => {
      const {db, runner, collectionEffects} = setup();

      const error = new Error('msg');
      db.query.and.returnValue(Observable.throw(error));

      const expectedResult = new IDActions.LoadFail(slices.COLLECTION, error);

      runner.queue(new IDActions.Load(slices.COLLECTION));

      collectionEffects.loadCollection$.subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });
  });

  describe('addBookToCollection$', () => {
    it('should return a AddSuccess action, with the book, on success', () => {
      const book = { id: '111', volumeInfo: {} } as Book;

      const {db, runner, collectionEffects} = setup();
      db.insert.and.returnValue(Observable.of({}));

      const expectedResult = new IDActions.AddSuccess(slices.COLLECTION, book);

      runner.queue(new IDActions.Add(slices.COLLECTION, book));

      collectionEffects.addBookToCollection$.subscribe(result => {
        expect(result).toEqual(expectedResult);
        expect(db.insert).toHaveBeenCalledWith('books', [book]);
      });
    });

    it('should return a AddFail action, with the book, when the db insert throws', () => {
      const book = { id: '111', volumeInfo: {} } as Book;

      const {db, runner, collectionEffects} = setup();
      db.insert.and.returnValue(Observable.throw(new Error()));

      const expectedResult = new IDActions.AddFail(slices.COLLECTION, book);

      runner.queue(new IDActions.Add(slices.COLLECTION, book));

      collectionEffects.addBookToCollection$.subscribe(result => {
        expect(result).toEqual(expectedResult);
        expect(db.insert).toHaveBeenCalledWith('books', [book]);
      });
    });

    describe('removeBookFromCollection$', () => {
      it('should return a DeleteSuccess action, with the book, on success', () => {
        const book = { id: '111', volumeInfo: {} } as Book;

        const {db, runner, collectionEffects} = setup();
        db.executeWrite.and.returnValue(Observable.of({}));

        const expectedResult = new IDActions.DeleteSuccess(slices.COLLECTION, book);

        runner.queue(new IDActions.Delete(slices.COLLECTION, book));

        collectionEffects.removeBookFromCollection$.subscribe(result => {
          expect(result).toEqual(expectedResult);
          expect(db.executeWrite).toHaveBeenCalledWith('books', 'delete', ['111']);
        });
      });

      it('should return a DeleteFail action, with the book, when the db insert throws', () => {
        const book = { id: '111', volumeInfo: {} } as Book;

        const {db, runner, collectionEffects} = setup();
        db.executeWrite.and.returnValue(Observable.throw(new Error()));

        const expectedResult = new IDActions.DeleteFail(slices.COLLECTION, book);

        runner.queue(new IDActions.Delete(slices.COLLECTION, book));

        collectionEffects.removeBookFromCollection$.subscribe(result => {
          expect(result).toEqual(expectedResult);
          expect(db.executeWrite).toHaveBeenCalledWith('books', 'delete', ['111']);
        });
      });
    });
  });
});
