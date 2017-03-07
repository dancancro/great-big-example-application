import { Action } from '@ngrx/store';

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

export let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export function typeFor(entityName, actionName) {
  return `[${entityName}] ${actionName}`
}

export function getActionTypes(entityName, actionNames) {
  let actionTypes = {};
  for (let actionName in actionNames) {
    if (actionName === 'ActionNames') continue;
    actionTypes[actionName] = typeFor(entityName, actionName);
  }
  return actionTypes;
}

export const entityNames = {
  BOOK: 'Book',
  CRISIS: 'Crisis',
  CLAIM: 'Claim',
  CLAIM_REBUTTAL: 'ClaimRebuttal',
  COLLECTION: 'Collection',
  CONTACT: 'Contact',
  HERO: 'Hero',
  LAYOUT: 'Layout',
  NOTE: 'Note',
  REBUTTAL: 'Rebuttal'
}

export class BaseAction<T> implements Action {
  _name: string = 'BASE ACTION - THIS SHOULD NOT APPEAR. YOU MUST FIRST SET TYPE';
  get type() {
    return typeFor(this.entityName, this._name)
  }
  set type(type) {
    this._name = type;
  }
  constructor(public payload: any, public entityName: string) { }
}

