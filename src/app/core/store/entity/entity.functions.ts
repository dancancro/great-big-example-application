import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { toPayload, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Entities } from './entity.model';
import { typeFor } from '../util';
import { actions, EntityAction } from './entity.actions';
import * as EntityActions from './entity.actions';


export function addLoadEntity<T>(state: Entities<T>, action: EntityActions.Add<T> | EntityActions.Load<T>): Entities<T> {
  let entities = Object.assign({}, state.entities);
  entities[action.payload.id] = reduceOne(state, null, action);
  return Object.assign({}, state, {
    ids: Object.keys(entities),
    entities: entities,
    selectedEntityId: action.payload.id,
    loaded: true,
    loading: false,
  });
};

/*
 * Delete the property from state.entities, the element from state.ids and
 * set selectedEntityId to null if it was the deleted one
 */
export function deleteEntity<T>(state: Entities<T>, action: EntityActions.Update<T>): Entities<T> {
  let entities = Object.assign({}, state.entities);
  delete entities[action.payload.id];
  let selectedEntityId = state.ids.indexOf(state.selectedEntityId) > -1 ? null : state.selectedEntityId;
  let i = state.ids.findIndex(id => id == action.payload.id);
  let ids = [...state.ids.slice(0, i), ...state.ids.slice(i + 1)];
  return Object.assign({}, state, { entities, ids, selectedEntityId });
};


export function select<T>(state: Entities<T>, action: EntityActions.Select<T>): Entities<T> {
  return Object.assign({}, state, {
    selectedEntityId: action.payload.id || action.payload
  });
};

export function selectNext<T>(state: Entities<T>, action: EntityActions.SelectNext<T>): Entities<T> {
  let ix = 1 + state.ids.indexOf(state.selectedEntityId);
  if (ix >= state.ids.length) { ix = 0; }
  return Object.assign({}, state, { selectedEntityId: state.ids[ix] });
};

export function union<T>(state: Entities<T>, action: EntityActions.LoadSuccess<T>) {
  const entities = action.payload;
  let newEntities = entities.filter(entity => !state.entities[entity.id]);

  const newEntityIds = newEntities.map(entity => entity.id);
  newEntities = newEntities.reduce((entities: { [id: string]: T }, entity: T) => {
    return Object.assign(entities, {
      [entity['id']]: entity
    });
  }, {});

  return Object.assign({}, state, {
    ids: [...state.ids, ...newEntityIds],
    entities: Object.assign({}, state.entities, newEntities),
    selectedEntityId: state.selectedEntityId
  });
}

export function update<T>(state: Entities<T>, action: EntityActions.Update<T>): Entities<T> {
  let entities = Object.assign({}, state.entities);
  entities[action.payload.id] = reduceOne(state, entities[action.payload.id], action);
  return Object.assign({}, state, {
    ids: Object.keys(entities),
    entities: entities
  });
};

export function updateEach<T>(state: Entities<T>, action: any): Entities<T> {
  let id: string;
  let entities = Object.assign({}, state.entities);
  for (id in entities) {
    entities[id] = Object.assign(entities[id], action.payload);
  }
  return Object.assign({}, state, {
    entities: entities
  });
};

function reduceOne<T>(state: Entities<T>, entity: T = null, action: EntityAction<T>): T {
  switch (action.type) {

    case typeFor(state.slice, actions.ADD):
      return Object.assign({}, state.initialEntity, action.payload, { dirty: true });
    case typeFor(state.slice, actions.UPDATE):
      if (entity['id'] == action.payload.id) {
        return Object.assign({}, entity, action.payload, { dirty: true });
      } else {
        return entity;
      }
    case typeFor(state.slice, actions.ADD_SUCCESS):
    case typeFor(state.slice, actions.LOAD_SUCCESS):
      return Object.assign({}, state.initialEntity, action.payload, { dirty: false });
    case typeFor(state.slice, actions.UPDATE_SUCCESS):
      if (entity['id'] == action.payload.id) {
        return Object.assign({}, entity, action.payload, { dirty: false });
      } else {
        return entity;
      }
    default:
      return entity;
  }
};

/**
 *
 * Effects
 *
 */



export function loadFromRemote$(actions$: Actions, slice: string, dataService): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, actions.LOAD))
    .startWith(new EntityActions.Load(slice, null))
    .switchMap(() =>
      dataService.getEntities(slice)
        .mergeMap(fetchedEntities => Observable.from(fetchedEntities))
        .map((fetchedEntity) => new EntityActions.LoadSuccess(slice, fetchedEntity))  // one action per entity
        .catch(() => Observable.of(new EntityActions.AddUpdateFail(slice, null)))
    );
}

export function updateToRemote$(actions$: Actions, slice: string, dataService, store): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, actions.UPDATE), typeFor(slice, actions.ADD))
    .withLatestFrom(store.select(slice))
    .switchMap(([{}, entities]) =>  // first element is action, but it isn't used
      Observable
        .from((<any>entities).ids)
        .filter((id: string) => (<any>entities).entities[id].dirty)
        .switchMap((id: string) => dataService.addOrUpdate((<any>entities).entities[id], slice))
        .map((responseEntity) => new EntityActions.UpdateSuccess(slice, responseEntity))
    );
}
