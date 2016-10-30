export interface User {
  firstName: string;
  lastName: string;
  fullName: Function;
};

export const initialUser: User = {
  firstName: '',
  lastName: '',
  fullName: function() { return this.firstName + ' ' + this.lastName }
};
