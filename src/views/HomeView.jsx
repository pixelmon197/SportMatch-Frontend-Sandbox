import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import JsonView from "../components/ui/JsonView";
import { useAuth } from "../controllers/useAuth";
import { useMemoryContext } from "../context/MemoryContext";
import { authService } from "../services/authService";
import { ENDPOINTS } from "../config/endpoints";
import { PANEL_ORDER, PANELS } from "../config/panels";
import { endpointsOfPanel } from "../models/endpointModel";

export default function HomeView() {
  const { usuario, token, isAuth, refreshMe } = useAuth();
  const { history } = useMemoryContext();
  const [health, setHealth] = useState(null);
  const [me, setMe] = useState(null);

  return (
    <div className="stack">
      <h1>Consola de pruebas de la API</h1>
      <p className="muted">
        {ENDPOINTS.length} endpoints agrupados por panel. Abre una tarjeta, ajusta el JSON y pulsa «Ejecutar».
      </p>

      <Card title="Estado de la API">
        <div className="row">
          <Button onClick={async () => setHealth(await authService.health())}>GET /api/health</Button>
          {health && (
            <span className={`status ${health.ok ? "ok" : "bad"}`}>
              {health.status || "ERR"} · {health.ms} ms
            </span>
          )}
        </div>
        {health && <JsonView data={health.data} />}
      </Card>

      <Card title="Sesión">
        {isAuth ? (
          <div className="stack">
            <div className="row">
              <Button
                variant="ghost"
                onClick={async () => setMe(await refreshMe())}
              >
                GET /api/auth/me
              </Button>
            </div>
            <JsonView data={me ? me.data : usuario} />
            <details>
              <summary className="muted">JWT</summary>
              <pre className="json mono">{token}</pre>
            </details>
          </div>
        ) : (
          <p className="muted">Sin sesión. Inicia sesión o regístrate para usar los paneles Usuario, Organizador y Admin.</p>
        )}
      </Card>

      <Card title="Paneles">
        <table>
          <tbody>
            {PANEL_ORDER.map((k) => (
              <tr key={k}>
                <td><Link to={PANELS[k].path}>{PANELS[k].label}</Link></td>
                <td>{endpointsOfPanel(k).length} endpoints</td>
                <td className="muted">{PANELS[k].help}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card title="Historial de llamadas">
        {history.length === 0 ? (
          <p className="muted">Aún no hay llamadas.</p>
        ) : (
          <table>
            <tbody>
              {history.map((h) => (
                <tr key={h.n}>
                  <td className="muted">{h.at.toLocaleTimeString()}</td>
                  <td><span className={`method ${h.method}`}>{h.method}</span></td>
                  <td className="mono">{h.url}</td>
                  <td className={`status ${h.status >= 200 && h.status < 300 ? "ok" : "bad"}`}>{h.status || "ERR"}</td>
                  <td className="muted">{h.ms} ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
