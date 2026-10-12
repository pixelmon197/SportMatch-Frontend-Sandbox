import { request } from "./http";

export const authService = {
  login: (correo, password) =>
    request({ method: "POST", url: "/api/auth/login", data: { correo, password }, noAuth: true }),
  register: (payload) =>
    request({ method: "POST", url: "/api/auth/register", data: payload, noAuth: true }),
  me: () => request({ method: "GET", url: "/api/auth/me" }),
  health: () => request({ method: "GET", url: "/api/health", noAuth: true }),
};
