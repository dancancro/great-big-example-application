export interface Hero {
    id: string;
    name: string;
    clone: Function;
    deleteMe?: boolean;
}

export const initialHero: Hero = {
    id: null,
    name: null,
    clone: () => Object.assign({}, { id: this.id, name: this.name })
};
