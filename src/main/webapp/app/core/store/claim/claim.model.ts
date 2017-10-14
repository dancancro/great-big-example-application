import { Rebuttal } from '../rebuttal/rebuttal.model';
import { Entity } from '../entity/entity.model';

export interface ClaimFields {
    // data
    name?: string;
    sortOrder?: number;
    rebuttalIds?: string[];
    rebuttals?: Rebuttal[];
    imageLink?: string;

    // UI state
    rebuttalsReordered: boolean;
    expanded: boolean;
};

export interface Claim extends Entity {
    // data
    name: string;
    sortOrder: number;
    rebuttalIds?: string[];
    rebuttals?: Rebuttal[];
    imageLink?: string;
    imageLabel?: string;

    // UI state
    rebuttalsReordered: boolean;
    expanded: boolean;
};

export const initialClaim: Claim = {
    id: null,
    name: null,
    sortOrder: 0,
    rebuttalsReordered: false,
    expanded: false
};
