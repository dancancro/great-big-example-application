import { BaseEntity } from './../../shared';

export class Comment implements BaseEntity {
    constructor(
        public id?: number,
        public body?: any,
        public createdAt?: any,
        public updatedAt?: any,
        public article?: BaseEntity,
        public author?: BaseEntity,
    ) {
    }
}
