import { Action } from '@ngrx/store';
import { PayloadAction } from '../util';

import {
    COMPLETE_GAME, GAME_PROGRESS, INVALID_GAME, START_GAME
} from './game.actions';

export const GameActions = {
    completeGame(text: string, time: number): PayloadAction {
        return {
            payload: { text, time },
            type: COMPLETE_GAME
        };
    },

    gameProgress(text: string, time: number): PayloadAction {
        return {
            payload: { text, time },
            type: GAME_PROGRESS
        };
    },

    invalidateGame(): PayloadAction {
        return {
            payload: null,
            type: INVALID_GAME
        };
    },

    startGame(): PayloadAction {
        return {
            payload: null,
            type: START_GAME
        };
    }
};
