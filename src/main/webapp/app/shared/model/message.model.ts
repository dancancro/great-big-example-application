import { Moment } from 'moment';

export interface IMessage {
    id?: number;
    userLogin?: string;
    message?: string;
    createdAt?: Moment;
    updatedAt?: Moment;
}

export class Message implements IMessage {
    constructor(
        public id?: number,
        public userLogin?: string,
        public message?: string,
        public createdAt?: Moment,
        public updatedAt?: Moment
    ) {}
}
