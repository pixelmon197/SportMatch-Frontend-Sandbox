import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../controllers/useAuth";
import { ETIQUETA_ROL } from "../../models/endpointModel";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { API_URL } from "../../config/api";

export default function Topbar() {
  const { usuario, isAuth, logout, bypass, setBypass } = useAuth();
  const nav = useNavigate();
  return (
    <header className="topbar">
      <Link to="/" className="brand">
        SportMatch · Consola de pruebas
      </Link>
      <span className="muted mono">{API_URL}</span>
      {isAuth ? (
        <>
          <span>{usuario?.nombre_completo}</span>
          <Badge tone={usuario?.rol}>{ETIQUETA_ROL[usuario?.rol] || usuario?.rol}</Badge>
          <label className="row" title="Abre todos los paneles para comprobar que la API responde 403">
            <input type="checkbox" style={{ width: "auto" }} checked={bypass} onChange={(e) => setBypass(e.target.checked)} />
            probar 403
          </label>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              logout();
              nav("/login");
            }}
          >
            Salir
          </Button>
        </>
      ) : (
        <Link to="/login">Iniciar sesión</Link>
      )}
    </header>
  );
}
