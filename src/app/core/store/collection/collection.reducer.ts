import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as collection from './collection.actions';
import { IDs, initialIDs } from '../entity/entity.model';

export function reducer(state = initialIDs(),
                        action: collection.Actions ):IDs {
  switch (action.type) {
    case collection.ActionTypes.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case collection.ActionTypes.LOAD_SUCCESS: {
      const books = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: books.map(book => book.id)
      };
    }

    case collection.ActionTypes.ADD_BOOK_SUCCESS:
    case collection.ActionTypes.REMOVE_BOOK_FAIL: {
      const book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, book.id ]
      });
    }

    case collection.ActionTypes.REMOVE_BOOK_SUCCESS:
    case collection.ActionTypes.ADD_BOOK_FAIL: {
      const book = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== book.id)
      });
    }

    default: {
      return state;
    }
  }
}


export function getLoaded(state$: Observable<IDs>) {
  return state$.select(s => s.loaded);
}

export function getLoading(state$: Observable<IDs>) {
  return state$.select(s => s.loading);
}

export function getBookIds(state$: Observable<IDs>) {
  return state$.select(s => s.ids);
}
