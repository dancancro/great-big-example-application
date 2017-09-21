import { Entity } from '../entity/entity.model';

export interface Profile extends Entity {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export const initialProfile = {
    username: '',
    bio: '',
    image: '',
    following: false,
    get id() {
        return this.username;
    },
    set id(username: string) {
        this.username = username;
    }
};
