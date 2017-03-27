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

let typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

let typeForCache: { [slice: string]: { [action: string]: string } } = {};

export function typeFor(slice, action) {
  if (typeForCache[slice] && typeForCache[slice][action]) {
    return typeForCache[slice][action];
  } else {
    typeForCache[slice] = typeForCache[slice] || {};
    typeForCache[slice][action] = `[${slice}] ${action}`;
    type(typeForCache[slice][action]);
    return typeForCache[slice][action]
  }
}


export const slices = {
  BOOK: 'book',
  CRISIS: 'crisis',
  CLAIM: 'claim',
  CLAIM_REBUTTAL: 'claimRebuttal',
  COLLECTION: 'collection',
  CONTACT: 'contact',
  COUNTER: 'counter',
  HERO: 'hero',
  LAYOUT: 'layout',
  NOTE: 'note',
  REBUTTAL: 'rebuttal',
  SEARCH: 'search',
  SESSION: 'session'
}
