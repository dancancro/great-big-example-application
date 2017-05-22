import { fromJS, Map } from 'immutable';

export const initialGame: Map<string, Object> = fromJS({
    games: [],
    partnerText: ''
});
