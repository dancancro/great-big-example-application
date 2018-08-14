import { BaseEntity } from './../../shared';

export class Article implements BaseEntity {
    constructor(
        public id?: number,
        public slug?: string,
        public title?: string,
        public description?: string,
        public body?: any,
        public createdAt?: any,
        public updatedAt?: any,
        public comments?: BaseEntity[],
        public tags?: BaseEntity[],
        public author?: BaseEntity,
        public favoriters?: BaseEntity[],
    ) {
    }
}
