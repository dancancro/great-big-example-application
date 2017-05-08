export interface User {
  firstName: string;
  lastName: string;
};

export const initialUser: User = {
  firstName: '',
  lastName: '',
};

export interface Session {
  token: string;
  user: User;
  hasError: boolean;
  loading: boolean;
};

export function initialSession(vals: any = {}): Session {
  return Object.assign({},
    {
      token: null,
      user: initialUser,
      hasError: false,
      loading: false
    }, vals);
};
