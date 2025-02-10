export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  cellphone: string;
}
