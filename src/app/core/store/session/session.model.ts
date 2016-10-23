export interface Session {
  token: string;
  userId: string;
  hasError: boolean;
  isLoading: boolean;
};

export const initialSession: Session = {
  token: null,
  userId: null,
  hasError: false,
  isLoading: false
};