import { NavLink, useLocation } from "react-router-dom";
import { PANELS, PANEL_ORDER } from "../../config/panels";
import { canAccessPanel } from "../../models/endpointModel";
import { useAuth } from "../../controllers/useAuth";
import { groupsOfPanel } from "../../models/endpointModel";
import { useSearchParams } from "react-router-dom";

export default function Sidebar() {
  const { usuario, bypass } = useAuth();
  const { pathname } = useLocation();
  const [sp, setSp] = useSearchParams();
  const activePanel = PANEL_ORDER.find((k) => pathname.startsWith(PANELS[k].path));
  const groups = activePanel ? groupsOfPanel(activePanel) : [];
  const selected = sp.get("g") || groups[0]?.nombre;

  return (
    <aside className="sidebar">
      <h3>Paneles</h3>
      <NavLink to="/" end>
        Inicio
      </NavLink>
      {PANEL_ORDER.map((k) => {
        const ok = canAccessPanel(k, usuario, bypass);
        return (
          <NavLink key={k} to={PANELS[k].path} className={ok ? "" : "locked"} title={ok ? "" : "Tu rol no tiene acceso"}>
            <span>{PANELS[k].label}</span>
            {!ok && <span>🔒</span>}
          </NavLink>
        );
      })}
      {groups.length > 0 && (
        <>
          <h3>Funciones</h3>
          {groups.map((g) => (
            <button
              key={g.nombre}
              className={`nav ${g.nombre === selected ? "active" : ""}`}
              onClick={() => setSp({ g: g.nombre })}
            >
              <span>{g.nombre}</span>
              <span className="muted">{g.items.length}</span>
            </button>
          ))}
        </>
      )}
    </aside>
  );
}
