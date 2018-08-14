import { BaseEntity } from './../../shared';

export class Talk implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public speaker?: string,
        public description?: any,
        public yourRating?: number,
        public rating?: number,
    ) {
    }
}
