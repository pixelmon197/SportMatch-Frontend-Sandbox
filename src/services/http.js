import axios from "axios";
import { API_URL, TOKEN_KEY } from "../config/api";

// Capa HTTP pura. validateStatus => nunca lanza por 4xx/5xx: queremos VER el error.
export const http = axios.create({
  baseURL: API_URL,
  validateStatus: () => true,
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Ejecuta una petición y devuelve un resultado normalizado (con tiempo y URL final).
export async function request({ method, url, params, data, isForm, noAuth }) {
  const started = performance.now();
  const headers = {};
  if (noAuth) headers.Authorization = "";
  try {
    const res = await http.request({
      method,
      url,
      params,
      data,
      headers: isForm ? headers : { "Content-Type": "application/json", ...headers },
    });
    return {
      status: res.status,
      ok: res.status >= 200 && res.status < 300,
      ms: Math.round(performance.now() - started),
      data: res.data === "" ? null : res.data,
      url: http.getUri({ url, params }),
    };
  } catch (err) {
    return {
      status: 0,
      ok: false,
      ms: Math.round(performance.now() - started),
      data: { error: `No se pudo conectar con la API (${API_URL}). ¿Está corriendo? ${err.message}` },
      url,
    };
  }
}
