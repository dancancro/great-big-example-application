import { BaseEntity } from './../../shared';

export class Profile implements BaseEntity {
    constructor(
        public id?: number,
        public username?: string,
        public bio?: any,
        public image?: string,
        public following?: boolean,
    ) {
        this.following = false;
    }
}
