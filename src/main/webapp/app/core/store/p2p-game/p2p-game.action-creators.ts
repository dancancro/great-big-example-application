import { PARTNER_PROGRESS, PARTNER_COMPLETED } from './p2p-game.actions';
import { Action } from '@ngrx/store';

export const P2PGameActions = {
    partnerProgress(text: string): Action {
        return {
            payload: { text },
            type: PARTNER_PROGRESS
        };
    },

    partnerCompleted(): Action {
        return {
            payload: null,
            type: PARTNER_COMPLETED
        };
    }
};
