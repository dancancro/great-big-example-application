export interface INote {
    id?: number;
    text?: string;
    colour?: string;
    left?: number;
    top?: number;
}

export class Note implements INote {
    constructor(public id?: number, public text?: string, public colour?: string, public left?: number, public top?: number) {}
}
