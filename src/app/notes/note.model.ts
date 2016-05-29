export interface Note{
    text: string;
    colour: string;
    
    //-- metadata TODO I wonder if I can compose these into another interface and share with other models)
    id?: number;
    dirty?: boolean;
}

export interface AppState {
  notes: Note[];
}
