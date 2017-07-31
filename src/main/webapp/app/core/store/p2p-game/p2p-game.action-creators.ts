import { PARTNER_PROGRESS, PARTNER_COMPLETED } from './p2p-game.actions';
import { PayloadAction } from '../util';

export const P2PGameActions = {
    partnerProgress(text: string): PayloadAction {
        return {
            payload: { text },
            type: PARTNER_PROGRESS
        };
    },

    partnerCompleted(): PayloadAction {
        return {
            payload: null,
            type: PARTNER_COMPLETED
        };
    }
};
