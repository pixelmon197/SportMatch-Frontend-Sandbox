import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Field from "../components/ui/Field";
import Button from "../components/ui/Button";
import { useAuth } from "../controllers/useAuth";
import { DEMO_ADMIN } from "../config/api";

export default function LoginView() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await login(correo, password);
    setLoading(false);
    if (!res.ok) return setError(res.data?.error || `Error ${res.status}`);
    nav("/");
  }

  return (
    <div className="auth-wrap">
      <Card title="Iniciar sesión">
        <form className="stack" onSubmit={submit}>
          <Field label="Correo" id="correo" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
          <Field label="Contraseña" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="err">{error}</p>}
          <div className="row">
            <Button type="submit" disabled={loading}>{loading ? "Entrando…" : "Entrar"}</Button>
            <Button type="button" variant="ghost" onClick={() => { setCorreo(DEMO_ADMIN.correo); setPassword(DEMO_ADMIN.password); }}>
              Rellenar admin (seed)
            </Button>
          </div>
        </form>
        <p className="muted" style={{ marginTop: 12 }}>
          <Link to="/registro">Crear cuenta</Link> · <Link to="/publico">Probar endpoints públicos</Link>
        </p>
      </Card>
    </div>
  );
}
