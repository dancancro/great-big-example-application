import { BaseEntity } from './../../shared';

export class Hero implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
    ) {
    }
}
