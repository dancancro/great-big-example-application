import { Action } from '@ngrx/store';
import { Hero } from './hero.model';
import { type } from '../../../shared/util';

export const ActionTypes = {
  ADD_HERO:             type('[Heroes] Add Hero'),
  ADD_HERO_SUCCESS:     type('[Heroes] Add Hero Success'),
  ADD_HERO_FAIL:        type('[Heroes] Add Hero Fail'),
  UPDATE_HERO:          type('[Heroes] Update Hero'),
  UPDATE_HERO_SUCCESS:  type('[Heroes] Update Hero Success'),
  UPDATE_HERO_FAIL:     type('[Heroes] Update Hero Fail'),
  LOAD:                 type('[Heroes] Load'),
  LOAD_SUCCESS:         type('[Heroes] Load Success'),
  LOAD_FAIL:            type('[Heroes] Load Fail'),
  SELECT_HERO:          type('[Heroes] Select Hero')
};

export class AddHeroSuccessAction implements Action {
  type = ActionTypes.ADD_HERO_SUCCESS;

  constructor(public payload: Hero) { }
}

export class UpdateHeroSuccessAction implements Action {
  type = ActionTypes.UPDATE_HERO_SUCCESS;

  constructor(public payload: any) { } // payload: { note }
}

export class UpdateHeroFailAction implements Action {
  type = ActionTypes.UPDATE_HERO_FAIL;

  constructor() { }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Hero) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

export class AddHeroAction implements Action {
  type = ActionTypes.ADD_HERO;

  constructor(public payload: Hero) { }
}

export class UpdateHeroAction implements Action {
  type = ActionTypes.UPDATE_HERO;

  constructor(public payload: any) { }
}

export class SelectHeroAction implements Action {
  type = ActionTypes.SELECT_HERO;

  constructor(public payload: any) { }  // payload: {id}
}

export type Actions
  = AddHeroSuccessAction
  | UpdateHeroSuccessAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | AddHeroAction
  | UpdateHeroAction
  | SelectHeroAction;
