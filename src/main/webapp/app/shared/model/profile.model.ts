export interface IProfile {
    id?: number;
    username?: string;
    bio?: any;
    image?: string;
    following?: boolean;
}

export class Profile implements IProfile {
    constructor(public id?: number, public username?: string, public bio?: any, public image?: string, public following?: boolean) {
        this.following = this.following || false;
    }
}
