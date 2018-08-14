import { BaseEntity } from './../../shared';

export class Rebuttal implements BaseEntity {
    constructor(
        public id?: number,
        public longName?: string,
        public shortName?: string,
        public date?: any,
        public expires?: any,
        public link?: string,
    ) {
    }
}
