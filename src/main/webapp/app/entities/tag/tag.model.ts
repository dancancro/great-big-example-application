import { Entry } from '../entry';
export class Tag {
    constructor(
        public id?: number,
        public name?: string,
        public entry?: Entry,
    ) {
    }
}
