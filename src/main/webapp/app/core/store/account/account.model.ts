export class Account {
    constructor(
        public activated: boolean,
        public authorities: string[],
        public email: string,
        public firstName: string,
        public langKey: string,
        public lastName: string,
        public login: string,
        public imageUrl: string
    ) { }
}

export const initialAccount: Account = {
    activated: false,
    authorities: [],
    email: null,
    firstName: null,
    langKey: null,
    lastName: null,
    login: null,
    imageUrl: null
};
