export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  role: string;
  token: string;
}
