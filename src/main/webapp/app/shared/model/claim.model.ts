export interface IClaim {
    id?: number;
    name?: string;
    sortOrder?: number;
    imageLabel?: string;
    imageLink?: string;
}

export class Claim implements IClaim {
    constructor(
        public id?: number,
        public name?: string,
        public sortOrder?: number,
        public imageLabel?: string,
        public imageLink?: string
    ) {}
}
