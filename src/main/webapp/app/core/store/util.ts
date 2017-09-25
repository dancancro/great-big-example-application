import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Params, ActivatedRouteSnapshot } from '@angular/router';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { RootState } from './';

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

const typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }

    typeCache[<string>label] = true;

    return <T>label;
}

const typeForCache: { [slice: string]: { [action: string]: string } } = {};

export function typeFor(slice: keyof RootState, action: string) {
    if (typeForCache[slice] && typeForCache[slice][action]) {
        return typeForCache[slice][action];
    } else {
        typeForCache[slice] = typeForCache[slice] || {};
        typeForCache[slice][action] = `[${slice}] ${action}`;
        type(typeForCache[slice][action]);
        return typeForCache[slice][action];
    }
}

export const slices = {
    ARTICLE: 'article' as 'article',
    AUTHOR: 'author' as 'author',
    BOOK: 'book' as 'book',
    CRISIS: 'crisis' as 'crisis',
    CLAIM: 'claim' as 'claim',
    CLAIM_REBUTTAL: 'claimRebuttal' as 'claimRebuttal',
    COLLECTION: 'collection' as 'collection',
    COMMENT: 'comment' as 'comment',
    CONTACT: 'contact' as 'contact',
    COUNTER: 'counter' as 'counter',
    HERO: 'hero' as 'hero',
    LAYOUT: 'layout' as 'layout',
    MESSAGE: 'message' as 'message',
    NOTE: 'note' as 'note',
    PROFILE: 'profile' as 'profile',
    REBUTTAL: 'rebuttal' as 'rebuttal',
    SEARCH: 'search' as 'search',
    SESSION: 'session' as 'session',
    TAG: 'tag' as 'tag',
    TALK: 'talk' as 'talk'
};

export class PayloadAction implements Action {
    public type: string;

    constructor(public payload?: any) {
    }
}

export type QueryPayload = {
    query: string | { [key: string]: string | number }
}

export type PayloadActions = Actions<PayloadAction>;

/**
 * @whatItDoes Use this function to do something in response to routing to a specific route
 *
 * @param segment The url part to watch for
 * @param callback The function to execute after routing to segment
 */
export function handleNavigation(store: Store<RootState>, actions$: Actions, pathOfInterest: string | string[], callback: (a: ActivatedRouteSnapshot, state: RootState) => Observable<any>) {
    let config: string;
    return actions$.ofType(ROUTER_NAVIGATION)
        .map(actionToSnapshot)
        .filter((s) => {
            config = getFullRouteConfigPath('', s);
            return config === pathOfInterest || (Array.isArray(pathOfInterest) && pathOfInterest.indexOf(config) > -1);
        })
        .withLatestFrom(store)
        .switchMap((a) => {
            return callback(a[0], a[1])
        })
        .catch((e) => {
            console.log('Network error', e);
            return of();
        });
}

export function actionToSnapshot(r: RouterNavigationAction): ActivatedRouteSnapshot {    // TODO: figure out what type should go here
    return (<any>r.payload.routerState).root.firstChild;
}

function getFullRouteConfigPath(path, firstChild): string {
    if (!firstChild) {
        return path;
    }

    return getFullRouteConfigPath(path + (firstChild.routeConfig.path ? '/' + firstChild.routeConfig.path : ''), firstChild.firstChild);
}

/**
 * @whatItDoes This is here to copy accessors (getters/setters) of entities which Object.assign doesn't do.
 * It's useful for the case of entities that use slugs for keys instead of ids. When that happens you should
 * use id accessors that get and set the slug
 * @param target
 * @param sources
 */
export function completeAssign(target, ...sources) {
    sources.forEach((source) => {
        if (!source) return;

        const descriptors = Object.keys(source).reduce((descriptors, key) => {
            descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
            return descriptors;
        }, {});
        // by default, Object.assign copies enumerable Symbols too
        Object.getOwnPropertySymbols(source).forEach((sym) => {
            const descriptor = Object.getOwnPropertyDescriptor(source, sym);
            if (descriptor.enumerable) {
                descriptors[sym] = descriptor;
            }
        });
        Object.defineProperties(target, descriptors);
    });
    return target;
}
