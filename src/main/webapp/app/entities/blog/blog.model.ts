import { User } from '../../shared';
export class Blog {
    constructor(
        public id?: number,
        public name?: string,
        public handle?: string,
        public user?: User,
    ) {
    }
}
