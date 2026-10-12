import { useState } from "react";
import Button from "../ui/Button";
import Field from "../ui/Field";
import JsonView from "../ui/JsonView";
import Badge from "../ui/Badge";
import { useEndpointRunner } from "../../controllers/useEndpointRunner";
import { useMemoryContext } from "../../context/MemoryContext";
import { pathParams, TIPOS_ARCHIVO } from "../../models/endpointModel";

export default function EndpointCard({ endpoint }) {
  const mem = useMemoryContext();
  const { run, loading, result, error } = useEndpointRunner(endpoint);
  const [params, setParams] = useState({});
  const [query, setQuery] = useState({});
  const [bodyText, setBodyText] = useState(
    endpoint.body !== undefined ? JSON.stringify(endpoint.body, null, 2) : ""
  );
  const [file, setFile] = useState(null);
  const [fileTipo, setFileTipo] = useState("");
  const [duracion, setDuracion] = useState("");

  const names = pathParams(endpoint.path);
  const submit = (e) => {
    e.preventDefault();
    run({ params, query, bodyText, file, fileTipo, duracion });
  };

  return (
    <details className="card flat ep">
      <summary>
        <span className={`method ${endpoint.method}`}>{endpoint.method}</span>
        <span className="path">{endpoint.path}</span>
        {!endpoint.auth && <Badge tone="publico">sin token</Badge>}
        <span className="sum">{endpoint.summary}</span>
      </summary>
      <form className="body stack" onSubmit={submit}>
        {names.length > 0 && (
          <div className="grid">
            {names.map((n) => (
              <Field key={n} label={`{${n}}`} id={`${endpoint.id}-${n}`}>
                <input
                  id={`${endpoint.id}-${n}`}
                  list={`${endpoint.id}-${n}-ids`}
                  value={params[n] ?? ""}
                  onChange={(e) => setParams({ ...params, [n]: e.target.value })}
                  placeholder={n.includes("codigo") || n === "slug" ? "texto" : "id"}
                />
                <datalist id={`${endpoint.id}-${n}-ids`}>
                  {mem.ids.map((x, i) => (
                    <option key={i} value={x.id}>
                      {x.label}
                    </option>
                  ))}
                </datalist>
              </Field>
            ))}
          </div>
        )}

        {endpoint.query && (
          <div className="grid">
            {endpoint.query.map((q) => (
              <Field
                key={q}
                label={`?${q}`}
                id={`${endpoint.id}-q-${q}`}
                value={query[q] ?? ""}
                onChange={(e) => setQuery({ ...query, [q]: e.target.value })}
              />
            ))}
          </div>
        )}

        {endpoint.multipart && (
          <div className="grid">
            <Field label="archivo" id={`${endpoint.id}-f`}>
              <input id={`${endpoint.id}-f`} type="file" onChange={(e) => setFile(e.target.files[0] || null)} />
            </Field>
            <Field label="tipo (opcional)" id={`${endpoint.id}-t`}>
              <select id={`${endpoint.id}-t`} value={fileTipo} onChange={(e) => setFileTipo(e.target.value)}>
                <option value="">(adivinar por extensión)</option>
                {TIPOS_ARCHIVO.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field
              label="duracion_segundos (video/audio)"
              id={`${endpoint.id}-d`}
              type="number"
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
            />
          </div>
        )}

        {endpoint.body !== undefined && (
          <Field label="Body JSON (editable)" id={`${endpoint.id}-b`}>
            <textarea
              id={`${endpoint.id}-b`}
              value={bodyText}
              rows={Math.min(18, bodyText.split("\n").length + 1)}
              onChange={(e) => setBodyText(e.target.value)}
              spellCheck={false}
            />
          </Field>
        )}

        <div className="row">
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando…" : "Ejecutar"}
          </Button>
          {error && <span className="err">{error}</span>}
          {result && (
            <span className="mono">
              <strong className={`status ${result.ok ? "ok" : "bad"}`}>{result.status || "ERR"}</strong>{" "}
              <span className="muted">
                {result.ms} ms · {result.url}
              </span>
            </span>
          )}
        </div>
        {result && <JsonView data={result.data} />}
      </form>
    </details>
  );
}
