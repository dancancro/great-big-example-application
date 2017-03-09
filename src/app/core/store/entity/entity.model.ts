import * as commonActions from '../entity/entity.actions';
import { getActionTypes } from '../util';

export interface Entities<T> {
  ids: string[];
  entities: { [id: string]: T };
  loaded?: boolean;
  loading?: boolean;
  selectedEntityId?: string;
  actionTypes: any;
  deleteEntity: Function;
  updateEntity: Function;
  updateAllEntities: Function;
  addLoadEntity: Function;
  selectEntity: Function;
  getData: Function;
};


export let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export function initialEntities<T>(vals: any = {}, entityTypeName?: string, actionNames?: any, initialEntity?): Entities<T> {

  return Object.assign({
    ids: [],
    entities: {},
    loaded: false,
    loading: false,
    selectedEntityId: null,
    actionTypes: getActionTypes(entityTypeName, actionNames),
    initialEntity: initialEntity,

    /*
     * Delete the property from this.entities, the element from this.ids and
     * set selectedEntityId to null if it was the deleted one
     */
    deleteEntity: function (action: commonActions.Update<T>): Entities<T> {
      let entities = Object.assign({}, this.entities);
      delete entities[action.payload['id']];
      let selectedEntityId = this.ids.indexOf(this.selectedEntityId) > -1 ? null : this.selectedEntityId;
      let i = this.ids.findIndex(id => id == action.payload['id']);
      let ids = [...this.ids.slice(0, i), ...this.ids.slice(i + 1)];
      return Object.assign({}, this, { entities, ids, selectedEntityId });
    },

    updateEntity: function (action: commonActions.Update<T>): Entities<T> {
      let entities = Object.assign({}, this.entities);
      entities[action.payload['id']] =
        Object.assign({},
          entities[action.payload['id']],
          this.reduceOne(this, entities[action.payload['id']], action))
      return Object.assign({}, this, {
        ids: Object.keys(entities),
        entities: entities
      });
    },

    // this only fires with ToggleAllRebuttals, so skip making an UpdateAllEntities action for now
    updateAllEntities: function (action: any): Entities<T> {
      let id: string;
      let entities = Object.assign({}, this.entities);
      for (id in entities) {
        entities[id] = Object.assign(entities[id], action.payload);
      }
      return Object.assign({}, this, {
        entities: entities
      });
    },

    addLoadEntity: function (action: commonActions.Add<T> | commonActions.Load<T>): Entities<T> {
      let entities = Object.assign({}, this.entities);
      entities[action.payload['id']] = Object.assign({}, this.reduceOne(this, null, action));
      return Object.assign({}, this, {
        ids: Object.keys(entities),
        entities: entities,
        loaded: true,
        loading: false,
      });
    },

    selectEntity: function (action: commonActions.Select<T>): Entities<T> {
      return Object.assign({}, this, {
        selectedEntityId: action.payload['id']
      });
    },

    reduceOne: function (state, entity: T = null, action: any): T {  //TODO: would be nice if this wasn't any
      switch (action.type) {

        case state.actionTypes.Add:
          return Object.assign({}, action.payload, { dirty: true });
        case state.actionTypes.Update:
          if (entity['id'] == action.payload['id']) {
            return Object.assign({}, entity, action.payload, { dirty: true });
          } else {
            return entity;
          }
        case state.actionTypes.AddSuccess:
        case state.actionTypes.LoadSuccess:
          return Object.assign({}, initialEntity, action.payload, { dirty: false });
        case state.actionTypes.UpdateSuccess:
          if (entity['id'] == action.payload['id']) {
            return Object.assign({}, action.payload, { dirty: false });
          } else {
            return entity;
          }
        default:
          return entity;
      }
    }
  }, vals);
};

export interface IDs {
  loaded: boolean;
  loading: boolean;
  ids: string[];
};

export function initialIDs(): IDs {
  return {
    loaded: false,
    loading: false,
    ids: []
  }
};
