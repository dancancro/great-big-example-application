// derived from https://gist.github.com/brandonroberts/a7faa171760aacbd7a53ec3d3342304c
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import * as fromRoot from '../core/store';
import * as actions from '../core/store/collection/collection.actions';
import { SharedModule } from '../shared/shared.module';
import { CollectionPage } from './collection.page';

describe('CollectionPageComponent', () => {
  let component: CollectionPage;
  let fixture: ComponentFixture<CollectionPage>;
  let debugElement: DebugElement;
  let store: Store<fromRoot.RootState>;
  let books;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        StoreModule.provideStore(fromRoot.reducer),
        RouterTestingModule
      ],
      declarations: [CollectionPage],
      schemas: [
        NO_ERRORS_SCHEMA // ignore unknown elements
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPage);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    books = [
      {
        id: 'bookId',
        volumeInfo: {
          title: 'Title',
          subtitle: 'subtitle',
          authors: ['author'],
          publisher: 'publisher',
          publishDate: 'publishDate',
          description: 'description',
          averageRating: 5,
          ratingsCount: 1,
          imageLinks: {
            thumbnail: '',
            smallThumbnail: ''
          }
        }
      }
    ];
  });

  it('should create an instance of CollectionPageComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('should display loaded books', () => {
  //   store.dispatch(new actions.LoadSuccess(books));

  //   fixture.detectChanges();

  //   const bookItems = debugElement.queryAll(By.css('bc-book-preview'));
  //   expect(bookItems.length).toEqual(books.length);
  // });
});
