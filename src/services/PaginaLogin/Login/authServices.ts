import { type LoginRequest, type LoginResponse } from "./user";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(`${backendUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return await response.json();
};
