import { ENDPOINTS } from "../config/endpoints";
import { PANELS } from "../config/panels";

// Reglas de negocio del probador: qué endpoints hay, cómo se arma la URL, quién puede ver qué.

export const TIPOS_ARCHIVO = ["imagen", "video", "documento", "gpx", "audio"];

export function pathParams(path) {
  return [...path.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
}

export function buildUrl(path, values) {
  return path.replace(/\{(\w+)\}/g, (_, k) => encodeURIComponent((values[k] ?? "").toString().trim()));
}

export function missingParams(path, values) {
  return pathParams(path).filter((k) => !(values[k] ?? "").toString().trim());
}

export function cleanQuery(query) {
  const out = {};
  Object.entries(query || {}).forEach(([k, v]) => {
    if (v !== "" && v != null) out[k] = v;
  });
  return out;
}

export function parseBody(text) {
  if (!text || !text.trim()) return { ok: true, value: undefined };
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (e) {
    return { ok: false, error: `JSON inválido: ${e.message}` };
  }
}

export function endpointsOfPanel(panelKey) {
  return ENDPOINTS.filter((e) => e.panels.includes(panelKey));
}

// -> [{ nombre, items: [endpoint…] }] respetando el orden de aparición
export function groupsOfPanel(panelKey) {
  const groups = new Map();
  endpointsOfPanel(panelKey).forEach((e) => {
    if (!groups.has(e.grupo)) groups.set(e.grupo, []);
    groups.get(e.grupo).push(e);
  });
  return [...groups.entries()].map(([nombre, items]) => ({ nombre, items }));
}

export function canAccessPanel(panelKey, usuario, bypass = false) {
  const panel = PANELS[panelKey];
  if (!panel.roles) return true;
  if (!usuario) return false;
  if (bypass) return true;
  return panel.roles.includes(usuario.rol);
}

// Valores de rol visibles en la UI (rol de la BD)
export const ETIQUETA_ROL = {
  usuario: "Usuario",
  organizador: "Organizador",
  administrador: "Administrador",
};

// Busca un id "útil" en una respuesta para guardarlo en la memoria de IDs.
export function extractId(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  if (data.id != null) return data.id;
  const firstKey = Object.keys(data).find((k) => k.endsWith("_id") && data[k] != null);
  return firstKey ? data[firstKey] : null;
}
