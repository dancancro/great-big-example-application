import { Profile } from '../profile/profile.model';
import { Entity } from '../entity/entity.model';

export interface Comment extends Entity {
    articleId: string;
    body: string;
    createdAt: string;
    author: Profile;
}

export const initialComment = {
    id: null,
    articleId: null,
    body: null,
    createdAt: null,
    author: null
};
