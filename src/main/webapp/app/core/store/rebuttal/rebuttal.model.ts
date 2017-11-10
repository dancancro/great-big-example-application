import { Entity } from '../entity/entity.model';

export interface RebuttalFields {
    // data
    shortName?: string;
    longName?: string;
    link?: string;
    comments?: string;

    // UI state
    dirty: boolean;
    editing: boolean;
    original?: Rebuttal;
}

export interface Rebuttal extends Entity {
    // data
    shortName: string;
    longName: string;
    link?: string;
    comments?: string;

    // UI state
    dirty: boolean;
    editing: boolean;
    original?: Rebuttal;
}

export const initialRebuttal = {
    // data
    id: null,
    shortName: null,
    longName: null,
    link: null,
    comments: null,

    // UI state
    dirty: false,
    editing: false,
    original: null
    // isTouched: function () {
    //   return this.original && (this.original.shortName !== this.shortName ||
    //     this.original.longName !== this.longName ||
    //     this.original.link !== this.link ||
    //     (this.original.comments || '') !== (this.comments || ''));
    // }
}
