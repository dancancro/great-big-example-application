import { fromJS } from 'immutable';
import { PayloadAction } from '../util';

import { initialGame } from './game.model';
export { initialGame } from './game.model';
import { COMPLETE_GAME, INVALID_GAME, START_GAME, GAME_PROGRESS } from './game.actions';
import { PARTNER_PROGRESS, PARTNER_COMPLETED } from '../p2p-game/p2p-game.actions';

export function gamesReducer(state: any = initialGame.get('games'), action: PayloadAction) {
    switch (action.type) {
        case COMPLETE_GAME:
            state = state.push(fromJS(action.payload));
            break;
    }
    return state;
};

// Fixes error: Error encountered resolving symbol values statically. Function calls are not
// supported. Consider replacing the function or lambda with a reference to an exported function
// const initialGameValue = initialGame.get('game');

export function gameReducer(state: any = initialGame.get('game'), action: PayloadAction) {
    switch (action.type) {
        case START_GAME:
            state = fromJS({});
            break;
        case INVALID_GAME:
            state = state.set('invalid', true);
            break;
        case GAME_PROGRESS:
            state = state.set('currentText', action.payload.text);
            break;
    }
    return state;
};

// Can't move to +multi-player yet because of `provideStore`.
export function p2pGameReducer(state: any = initialGame.get('p2pGame'), action: PayloadAction) {
    switch (action.type) {
        case START_GAME:
            state = fromJS({});
            break;
        case PARTNER_PROGRESS:
            state = state.set('partnerProgress', action.payload.text);
            break;
        case PARTNER_COMPLETED:
            state = state.set('partnerCompleted', true);
            break;
    }
    return state;
};
