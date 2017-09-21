export interface Message {
    id: string,
    userLogin: Date;
    message: string;
    createdAt: Date;
}

export const initialMessage = {
    id: null,
    userLogin: null,
    message: null,
    createdAt: null
};
