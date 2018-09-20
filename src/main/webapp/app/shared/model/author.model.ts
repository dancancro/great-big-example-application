import { IUser } from 'app/core/user/user.model';
import { IArticle } from 'app/shared/model/article.model';
import { IComment } from 'app/shared/model/comment.model';
import { IAuthor } from 'app/shared/model/author.model';

export interface IAuthor {
    id?: number;
    bio?: any;
    user?: IUser;
    articles?: IArticle[];
    comments?: IComment[];
    followers?: IAuthor[];
    favorites?: IArticle[];
    followees?: IAuthor[];
}

export class Author implements IAuthor {
    constructor(
        public id?: number,
        public bio?: any,
        public user?: IUser,
        public articles?: IArticle[],
        public comments?: IComment[],
        public followers?: IAuthor[],
        public favorites?: IArticle[],
        public followees?: IAuthor[]
    ) {}
}
