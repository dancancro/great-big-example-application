export interface Message {
    userLogin: Date;
    message: string;
    createdAt: Date;
}

export const initialMessage = {
    userLogin: null,
    message: null,
    createdAt: null
};
