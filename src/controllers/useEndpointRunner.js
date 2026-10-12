import { useState } from "react";
import { useAuth } from "./useAuth";
import { useMemoryContext } from "../context/MemoryContext";
import { runEndpoint } from "../services/endpointService";
import { buildUrl, cleanQuery, extractId, missingParams, parseBody } from "../models/endpointModel";

// Controlador de una tarjeta de endpoint: valida, ejecuta y reparte efectos
// (sesión si es login, memoria de IDs, historial).
export function useEndpointRunner(endpoint) {
  const { setSession } = useAuth();
  const mem = useMemoryContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function run({ params, query, bodyText, file, fileTipo, duracion }) {
    setError(null);
    const faltan = missingParams(endpoint.path, params);
    if (faltan.length) return setError(`Falta: ${faltan.join(", ")}`);

    let body;
    let form;
    if (endpoint.multipart) {
      if (!file) return setError("Selecciona un archivo");
      form = new FormData();
      form.append("archivo", file);
      if (fileTipo) form.append("tipo", fileTipo);
      if (duracion) form.append("duracion_segundos", duracion);
    } else if (endpoint.body !== undefined) {
      let text = bodyText;
      if (mem.extras.token_reseteo) text = text.replaceAll("<token_reseteo>", mem.extras.token_reseteo);
      const parsed = parseBody(text);
      if (!parsed.ok) return setError(parsed.error);
      body = parsed.value;
    }

    setLoading(true);
    const url = buildUrl(endpoint.path, params);
    const res = await runEndpoint({ endpoint, url, query: cleanQuery(query), body, form });
    setLoading(false);
    setResult(res);

    mem.logCall({ method: endpoint.method, url: res.url, status: res.status, ms: res.ms });
    if (res.ok && res.data) {
      if (res.data.access_token && res.data.usuario) setSession(res.data.access_token, res.data.usuario);
      if (res.data.token_reseteo) mem.setExtra("token_reseteo", res.data.token_reseteo);
      if (endpoint.method === "POST") {
        const id = extractId(res.data);
        if (id != null) mem.rememberId(id, `${endpoint.method} ${endpoint.path.replace("/api/", "")}`);
      }
    }
  }

  return { run, loading, result, error };
}
