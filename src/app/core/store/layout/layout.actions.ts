import * as entityActions from '../entity/entity.actions';
import { Layout } from './layout.model';
import { entityNames, BaseAction } from '../util';

// Special actions
export class OpenSidenav extends BaseAction<Layout> {
  _name = 'OpenSidenav';
}

export class CloseSidenav extends BaseAction<Layout> {
  _name = 'CloseSidenav';
  constructor() {
    super(null, entityNames.LAYOUT)
  }
}

export class SearchForHero extends BaseAction<Layout> {
  _name: string = 'SearchForHero';
  constructor(payload: { term: string }) {
    super(payload, entityNames.LAYOUT)
  }
}

// Entity actions
// nothing

// Action types
export type Actions = OpenSidenav | CloseSidenav | SearchForHero;
