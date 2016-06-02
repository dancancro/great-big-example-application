export interface Note{
    text: string;
    colour: string;
    id?: number;      //only optional when using server-first-on-add    
    dirty?: boolean;  //only used on client
}

export interface AppState {
  notes: Note[];
}
