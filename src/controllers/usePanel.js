import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { groupsOfPanel } from "../models/endpointModel";

// Grupo seleccionado de un panel (guardado en ?g=… para poder recargar).
export function usePanel(panelKey) {
  const [sp, setSp] = useSearchParams();
  const groups = useMemo(() => groupsOfPanel(panelKey), [panelKey]);
  const actual = groups.find((g) => g.nombre === sp.get("g")) || groups[0];
  return { groups, actual, selectGroup: (nombre) => setSp({ g: nombre }) };
}
