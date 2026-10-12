import { PANELS } from "../config/panels";
import { usePanel } from "../controllers/usePanel";
import EndpointCard from "../components/endpoints/EndpointCard";
import MemoryBar from "../components/endpoints/MemoryBar";
import Badge from "../components/ui/Badge";

export default function PanelView({ panelKey }) {
  const panel = PANELS[panelKey];
  const { actual } = usePanel(panelKey);
  return (
    <div className="stack">
      <div>
        <div className="row">
          <h1>Panel {panel.label}</h1>
          <Badge tone={panelKey}>{panel.label}</Badge>
        </div>
        <p className="muted">{panel.help}</p>
      </div>
      <MemoryBar />
      {actual && (
        <>
          <h2>{actual.nombre}</h2>
          {actual.items.map((e) => (
            <EndpointCard key={e.id} endpoint={e} />
          ))}
        </>
      )}
    </div>
  );
}
