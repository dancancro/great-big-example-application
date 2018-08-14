import { BaseEntity } from './../../shared';

export class Claim implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public sortOrder?: number,
        public imageLabel?: string,
        public imageLink?: string,
    ) {
    }
}
