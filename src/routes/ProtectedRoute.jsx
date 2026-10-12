import { Navigate } from "react-router-dom";
import { useAuth } from "../controllers/useAuth";
import { canAccessPanel } from "../models/endpointModel";
import Card from "../components/ui/Card";

export default function ProtectedRoute({ panel, children }) {
  const { usuario, isAuth, bypass } = useAuth();
  if (!isAuth && canAccessPanel(panel, null) === false) return <Navigate to="/login" replace />;
  if (!canAccessPanel(panel, usuario, bypass)) {
    return (
      <Card title="Sin acceso">
        <p>Tu rol (<b>{usuario?.rol}</b>) no puede abrir este panel.</p>
        <p className="muted">Activa «probar 403» arriba si quieres comprobar cómo responde la API a un rol no autorizado.</p>
      </Card>
    );
  }
  return children;
}
