import { Blog } from '../blog';
import { Tag } from '../tag';
export class Entry {
    constructor(
        public id?: number,
        public title?: string,
        public content?: any,
        public date?: any,
        public blog?: Blog,
        public tag?: Tag,
    ) {
    }
}
