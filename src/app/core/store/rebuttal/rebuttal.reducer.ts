import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Rebuttal, initialRebuttal } from './rebuttal.model';
import * as actions from './rebuttal.actions';
import { Entities, initialEntities } from '../entity/entity.model';

export function reducer(state: Entities<Rebuttal> = initialEntities<Rebuttal>({},
  'Rebuttal', actions, initialRebuttal), action: actions.Actions): Entities<Rebuttal> {

  let edits = {};
  switch (action.type) {
    case state.actionTypes.MakeRebuttalEditable:
      edits = { editing: true }; break;
    case state.actionTypes.CancelChanges:
    case state.actionTypes.SaveRebuttal:
      edits = { editing: false }; break;
    default:
      edits = {};
  }
  action.payload && (action.payload = Object.assign(action.payload, edits));

  switch (action.type) {
    case state.actionTypes.Add:
    case state.actionTypes.AddSuccess:
    case state.actionTypes.LoadSuccess:
      return state.addLoadEntity(action);
    case state.actionTypes.MakeRebuttalEditable:
    case state.actionTypes.SaveRebuttal:
    case state.actionTypes.CancelChanges:
      return state.updateEntity(action);
    default:
      return state;
  }
  // checkout https://github.com/omnidan/redux-undo for undo features

}

export const getEntities = (state: Entities<Rebuttal>) => {
  return state.entities;
}

export const getIds = (state: Entities<Rebuttal>) => state.ids;
