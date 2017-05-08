import { Rebuttal } from '../rebuttal/rebuttal.model';

export interface Claim {
    // data
    id: string;
    name: string;
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
    rebuttalsReordered: false,
    expanded: false

};
