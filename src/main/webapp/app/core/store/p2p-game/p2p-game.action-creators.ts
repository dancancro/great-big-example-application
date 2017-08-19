import { PARTNER_COMPLETED, PARTNER_PROGRESS } from './p2p-game.actions';
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
