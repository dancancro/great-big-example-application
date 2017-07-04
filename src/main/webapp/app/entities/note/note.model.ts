import { BaseEntity } from './../../shared';

export class Note implements BaseEntity {
    constructor(
        public id?: number,
        public text?: string,
        public colour?: string,
        public left?: number,
        public top?: number,
    ) {
    }
}
