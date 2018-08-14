export interface ICrisis {
    id?: number;
    name?: string;
}

export class Crisis implements ICrisis {
    constructor(public id?: number, public name?: string) {}
}
