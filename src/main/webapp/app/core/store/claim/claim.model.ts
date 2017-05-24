import { Rebuttal } from '../rebuttal/rebuttal.model';

export interface Claim {
    // data
    id: string;
    name: string;
    sortOrder: number;
    rebuttalIds?: string[];
    rebuttals?: Rebuttal[];
    imageLink?: string;

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
