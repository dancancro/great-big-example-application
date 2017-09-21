import { Entity } from '../entity/entity.model';

export interface Contact extends Entity {
    name: string;
}

export const initialContact = {
    id: null,
    name: null
};
