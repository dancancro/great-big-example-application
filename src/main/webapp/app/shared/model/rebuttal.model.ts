import { Moment } from 'moment';

export interface IRebuttal {
    id?: number;
    longName?: string;
    shortName?: string;
    date?: Moment;
    expires?: Moment;
    link?: string;
}

export class Rebuttal implements IRebuttal {
    constructor(
        public id?: number,
        public longName?: string,
        public shortName?: string,
        public date?: Moment,
        public expires?: Moment,
        public link?: string
    ) {}
}
