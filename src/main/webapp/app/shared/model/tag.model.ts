import { IArticle } from 'app/shared/model/article.model';

export interface ITag {
    id?: number;
    name?: string;
    articles?: IArticle[];
}

export class Tag implements ITag {
    constructor(public id?: number, public name?: string, public articles?: IArticle[]) {}
}
