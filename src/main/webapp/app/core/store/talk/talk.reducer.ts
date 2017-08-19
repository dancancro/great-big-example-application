import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { RouterStateSnapshot, Params } from '@angular/router';
import { RouterAction } from '@ngrx/router-store';

import * as fromRoot from '../';
import { typeFor, slices } from '../util';
import { Entities, initialEntities } from '../entity/entity.model';
import { Talk, initialTalk } from './talk.model';
import { Filters } from '../../../features/talks/talks.layout';
// import { TalksUpdated, TalkUpdated, Watch, TalkWatched, Rate, Unrate } from './talk.actions';
import * as functions from '../entity/entity.functions';
import { actions, EntityAction } from '../entity/entity.actions';

// type Action = RouterAction<fromRoot.RootState> | TalksUpdated | TalkUpdated | Watch | TalkWatched | Rate | Unrate;

export function reducer(state: Entities<Talk> = initialEntities<Talk>({}, slices.TALK, actions, initialTalk), action: EntityAction<Talk>): Entities<Talk> {

    switch (action.type) {
        case typeFor(slices.TALK, actions.LOAD_ALL_SUCCESS):
            return functions.newEntities<Talk>(state, <any>action);
        case typeFor(slices.TALK, actions.PATCH):
            // This case has a twist so we can't use the regular update method.
            // It sets the talk.rating field in the store, but the talk.yourRating field on the server
            const entities = Object.assign({}, state.entities);
            const id = action.payload.id;
            entities[id].rating = action.payload.rating;   // <-- special part
            return Object.assign({}, state, {
                ids: Object.keys(entities),
                entities
            });
        case typeFor(slices.TALK, actions.PATCH_FAIL):
            return functions.update<Talk>(state, <any>action);
        default:
            return state;
    }
}

export const getEntities = (state: Entities<Talk>) => state.entities;

export const getIds = (state: Entities<Talk>) => state.ids.filter((id) => state.entities[id] && !state.entities[id].deleteMe);
