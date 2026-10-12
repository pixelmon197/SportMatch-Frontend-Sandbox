export const API_URL = (import.meta.env.VITE_API_URL || "http://127.0.0.1:5000").replace(/\/$/, "");
export const TOKEN_KEY = "sportmatch_token";
export const USER_KEY = "sportmatch_user";

// Credenciales que crea `python seed.py` en la API
export const DEMO_ADMIN = { correo: "admin@sportmatch.com", password: "Admin123!" };
