import { BaseEntity, User } from './../../shared';

export class Author implements BaseEntity {
    constructor(
        public id?: number,
        public bio?: any,
        public user?: User,
        public articles?: BaseEntity[],
        public comments?: BaseEntity[],
        public followers?: BaseEntity[],
        public favorites?: BaseEntity[],
        public followees?: BaseEntity[],
    ) {
    }
}
