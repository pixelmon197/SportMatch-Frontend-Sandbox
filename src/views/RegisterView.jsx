import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Field from "../components/ui/Field";
import Button from "../components/ui/Button";
import { authService } from "../services/authService";
import { useAuth } from "../controllers/useAuth";

const INICIAL = {
  nombre_completo: "",
  nombre_usuario: "",
  correo: "",
  password: "",
  telefono: "",
  sexo: "masculino",
  fecha_nacimiento: "2000-01-01",
  ciudad_id: 1,
};

export default function RegisterView() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [f, setF] = useState(INICIAL);
  const [error, setError] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setError(null);
    const payload = { ...f, ciudad_id: Number(f.ciudad_id) || undefined };
    if (!payload.telefono) delete payload.telefono;
    const res = await authService.register(payload);
    if (!res.ok) return setError(JSON.stringify(res.data));
    const lg = await login(f.correo, f.password);
    if (lg.ok) nav("/");
    else nav("/login");
  }

  return (
    <div className="auth-wrap">
      <Card title="Crear cuenta (rol usuario)">
        <form className="stack" onSubmit={submit}>
          <Field label="Nombre completo" id="n" value={f.nombre_completo} onChange={set("nombre_completo")} required />
          <Field label="Nombre de usuario" id="u" value={f.nombre_usuario} onChange={set("nombre_usuario")} required />
          <Field label="Correo" id="c" type="email" value={f.correo} onChange={set("correo")} required />
          <Field label="Contraseña" id="p" type="password" value={f.password} onChange={set("password")} required />
          <Field label="Teléfono" id="t" value={f.telefono} onChange={set("telefono")} />
          <Field label="Sexo" id="s">
            <select id="s" value={f.sexo} onChange={set("sexo")}>
              {["masculino", "femenino", "otro", "prefiero_no_decir"].map((x) => <option key={x}>{x}</option>)}
            </select>
          </Field>
          <Field label="Fecha de nacimiento" id="d" type="date" value={f.fecha_nacimiento} onChange={set("fecha_nacimiento")} required />
          <Field label="ciudad_id (el seed crea Toluca = 1)" id="ci" type="number" value={f.ciudad_id} onChange={set("ciudad_id")} />
          {error && <p className="err mono">{error}</p>}
          <Button type="submit">Registrarme</Button>
        </form>
        <p className="muted" style={{ marginTop: 12 }}><Link to="/login">Ya tengo cuenta</Link></p>
      </Card>
    </div>
  );
}
