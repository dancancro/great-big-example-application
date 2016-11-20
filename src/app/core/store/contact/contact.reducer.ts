import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Contact, initialContact } from './contact.model';
import * as contact from './contact.actions';
import { Entities, initialEntities } from '../entity/entity.model';

// This reduces a set of contacts
export function reducer(state = initialEntities<Contact>({ selectedEntityId: 21 }),
  action: contact.Actions): Entities<Contact> {
  let entities = {};
  switch (action.type) {
    case contact.ActionTypes.ADD_CONTACT:
    case contact.ActionTypes.ADD_CONTACT_SUCCESS:
    case contact.ActionTypes.LOAD_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = contactReducer(null, action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities,
        selectedEntityId: action.payload.id,
        loaded: true,
        loading: false
      });

    case contact.ActionTypes.UPDATE_CONTACT:
    case contact.ActionTypes.UPDATE_CONTACT_SUCCESS:
      entities = Object.assign({}, state.entities);
      entities[action.payload.id] = contactReducer(entities[action.payload.id], action);
      return Object.assign({}, state, {
        ids: Object.keys(entities),
        entities: entities
      });

    case contact.ActionTypes.NEXT_CONTACT:
      let ix = 1 + state.ids.indexOf(state.selectedEntityId);
      if (ix >= state.ids.length) { ix = 0; }
      return Object.assign({}, state, { selectedEntityId: state.ids[ix] });

    default:
      return state;
  }


  // This reduces a single contact
  function contactReducer(state: Contact = null, action: contact.Actions): Contact {
    switch (action.type) {

      case contact.ActionTypes.ADD_CONTACT:
        return Object.assign({}, action.payload, { dirty: true });
      case contact.ActionTypes.UPDATE_CONTACT:
        if (state.id == action.payload.id) {
          return Object.assign({}, state, action.payload, { dirty: true });
        } else {
          return state;
        }
      case contact.ActionTypes.ADD_CONTACT_SUCCESS:
      case contact.ActionTypes.LOAD_SUCCESS:
        return Object.assign({}, initialContact, action.payload, { dirty: false });
      case contact.ActionTypes.UPDATE_CONTACT_SUCCESS:
        if (state.id == action.payload.id) {
          return Object.assign({}, action.payload, { dirty: false });
        } else {
          return state;
        }
      default:
        return state;
    }
  };

};

export function getContactEntities(state$: Observable<Entities<Contact>>) {
  return state$.select(state => state.entities);
}

export function getContactIds(state$: Observable<Entities<Contact>>) {
  return state$.select(state => state.ids);
}

export function getContact(state$: Observable<Entities<Contact>>) {
  return state$.select(state => {
    return state.entities[state.selectedEntityId]
  });
}
