export interface LoginResponse {
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  __v: number;
}

export interface RegisterResponse {
  name: string;
  email: string;
  __v: number;
}
