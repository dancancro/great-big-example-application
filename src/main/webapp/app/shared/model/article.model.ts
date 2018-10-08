import { Moment } from 'moment';
import { IComment } from 'app/shared/model/comment.model';
import { ITag } from 'app/shared/model/tag.model';
import { IAuthor } from 'app/shared/model/author.model';

export interface IArticle {
    id?: number;
    slug?: string;
    title?: string;
    description?: string;
    body?: any;
    createdAt?: Moment;
    updatedAt?: Moment;
    comments?: IComment[];
    tags?: ITag[];
    author?: IAuthor;
    favoriters?: IAuthor[];
}

export class Article implements IArticle {
    constructor(
        public id?: number,
        public slug?: string,
        public title?: string,
        public description?: string,
        public body?: any,
        public createdAt?: Moment,
        public updatedAt?: Moment,
        public comments?: IComment[],
        public tags?: ITag[],
        public author?: IAuthor,
        public favoriters?: IAuthor[]
    ) {}
}
