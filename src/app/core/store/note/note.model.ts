export interface Note {
    text: string,
    colour: string,
    left: number,
    top: number,
    id: string,
    dirty?: boolean
}


export const initialNote = {
    text: null,
    colour: null,
    left: 0,
    top: 0,
    id: null,
    dirty: false
};