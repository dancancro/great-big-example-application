import { Profile } from '../profile/profile.model';
import { Entity } from '../entity/entity.model';
import { Comment } from '../comment/comment.model';
// import { normalize, schema } from 'normalizr';

export interface Article extends Entity {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: Array<string>;
    comments: Array<Comment>;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Profile;
}

export const initialArticle = {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    comments: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: null,
    get id() {
        return this.slug;
    },
    set id(slug: string) {
        this.slug = slug;
    }
};

// const comment = new schema.Entity('comments');
// const article = new schema.Entity('articles', { comments: [comment] }, { idAttribute: 'slug' });
// export const articleSchema = { articles: [article] }
