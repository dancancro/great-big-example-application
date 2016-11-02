import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Rebuttal, initialRebuttal } from './rebuttal.model';
import * as rebuttal from './rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';

export function reducer(state = initialEntities<Rebuttal>(), action: rebuttal.Actions): Entities<Rebuttal> {
  let entities = {};
  switch (action.type) {

    case rebuttal.ActionTypes.LOAD_SUCCESS: {
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = singleReducer(null, action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities,
        loaded: true,
        loading: false,
      });
    }

    case rebuttal.ActionTypes.MAKE_REBUTTAL_EDITABLE: {

    }

    default:
      return state;
  }

  function singleReducer(state: Rebuttal = initialRebuttal,
    action: rebuttal.Actions): Rebuttal {
    switch (action.type) {

      // case rebuttal.ActionTypes.CANCEL_REBUTTAL: {

      // }

      case rebuttal.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialRebuttal, action.payload, { dirty: false });

      case rebuttal.ActionTypes.SAVE_REBUTTAL: {
        if (state.id == action.payload.id) {
          return Object.assign({}, state, {
            id: action.payload.rebuttal.id,
            shortName: action.payload.newRebuttal.shortName.value,
            longName: action.payload.newRebuttal.longName.value,
            link: action.payload.newRebuttal.link.value,
            comments: action.payload.newRebuttal.comments.value,
            //          original: state.original || state }
            original: state
          }
          );
        } else {
          return state;
        }
      }

      case rebuttal.ActionTypes.MAKE_REBUTTAL_EDITABLE: {
        if (state.id == action.payload.id) {
          return Object.assign({}, state, { editing: true });
        } else {
          return state;
        }
      }

      default: {
        return state;
      }
    }
  }
};

export function getRebuttalEntities(state$: Observable<Entities<Rebuttal>>) {
  return state$.select(state => state.entities);
}

export function getRebuttalIds(state$: Observable<Entities<Rebuttal>>) {
  return state$.select(state => state.ids);
}