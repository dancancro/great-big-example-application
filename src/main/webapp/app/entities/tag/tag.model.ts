import { BaseEntity } from './../../shared';

export class Tag implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public articles?: BaseEntity[],
    ) {
    }
}
