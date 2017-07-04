import { BaseEntity, User } from './../../shared';

export class Blog implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public handle?: string,
        public user?: User,
    ) {
    }
}
