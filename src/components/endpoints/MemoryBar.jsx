import { useMemoryContext } from "../../context/MemoryContext";
import Button from "../ui/Button";

// Muestra los IDs capturados de los POST; sirven de sugerencia en los campos {id}.
export default function MemoryBar() {
  const { ids, extras, clear } = useMemoryContext();
  if (!ids.length && !extras.token_reseteo) return null;
  return (
    <div className="note row">
      <strong>IDs recordados:</strong>
      {ids.slice(0, 10).map((x, i) => (
        <span key={i} className="mono" title={x.label}>
          {x.label.split(" ")[1]?.split("/").pop()}#{x.id}
        </span>
      ))}
      {extras.token_reseteo && <span className="mono">token_reseteo ✓ (se usa en restablecer-contrasena)</span>}
      <Button variant="ghost" size="sm" onClick={clear}>
        Limpiar
      </Button>
    </div>
  );
}
