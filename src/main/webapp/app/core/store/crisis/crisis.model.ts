export interface Crisis {
    id: string;
    name: string;
    clone: Function;
}

export const initialCrisis: Crisis = {
    id: null,
    name: null,
    clone: () => Object.assign({}, { id: this.id, name: this.name })
};
