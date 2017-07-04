import { BaseEntity } from './../../shared';

export class Crisis implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
    ) {
    }
}
