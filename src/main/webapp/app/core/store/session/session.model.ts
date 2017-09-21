import { Account, initialAccount } from '../account/account.model';
import { initialSlice, Slice } from '../slice/slice.model';
import { slices } from '../util';

export interface Session extends Slice {
    token: string;
    account: Account;
};

export function initialSession(vals: any = {}): Session {
    return Object.assign({}, initialSlice(slices.SESSION),
        {
            token: null,
            account: initialAccount,
        }, vals);
};
