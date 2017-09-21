export interface Note {
    text: string;
    colour: string;
    left: number;
    top: number;
    id: string;
    deleteMe?: boolean;
}

export const initialNote: Note = {
    text: null,
    colour: null,
    left: 0,
    top: 0,
    id: null
};
