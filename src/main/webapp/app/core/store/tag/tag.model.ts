import { Entity } from '../entity/entity.model';

export interface Tag extends Entity {
    name: string;
};

export const initialTag: Tag = {
    id: null,
    name: null,
};
