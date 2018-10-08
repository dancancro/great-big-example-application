import { Moment } from 'moment';
import { IArticle } from 'app/shared/model/article.model';
import { IAuthor } from 'app/shared/model/author.model';

export interface IComment {
    id?: number;
    body?: any;
    createdAt?: Moment;
    updatedAt?: Moment;
    article?: IArticle;
    author?: IAuthor;
}

export class Comment implements IComment {
    constructor(
        public id?: number,
        public body?: any,
        public createdAt?: Moment,
        public updatedAt?: Moment,
        public article?: IArticle,
        public author?: IAuthor
    ) {}
}
