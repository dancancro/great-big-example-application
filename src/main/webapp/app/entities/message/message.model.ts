import { BaseEntity } from './../../shared';

export class Message implements BaseEntity {
    constructor(
        public id?: number,
        public userLogin?: string,
        public message?: string,
        public createdAt?: any,
        public updatedAt?: any,
    ) {
    }
}
