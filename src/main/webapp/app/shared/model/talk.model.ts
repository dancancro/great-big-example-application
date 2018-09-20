export interface ITalk {
    id?: number;
    title?: string;
    speaker?: string;
    description?: any;
    yourRating?: number;
    rating?: number;
}

export class Talk implements ITalk {
    constructor(
        public id?: number,
        public title?: string,
        public speaker?: string,
        public description?: any,
        public yourRating?: number,
        public rating?: number
    ) {}
}
