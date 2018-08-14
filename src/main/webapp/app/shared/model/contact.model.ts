export interface IContact {
    id?: number;
    name?: string;
}

export class Contact implements IContact {
    constructor(public id?: number, public name?: string) {}
}
