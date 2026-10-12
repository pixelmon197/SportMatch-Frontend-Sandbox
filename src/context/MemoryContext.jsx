import { createContext, useCallback, useContext, useMemo, useState } from "react";

// Estado global del probador: historial de llamadas y "memoria de IDs"
// (los ids que devuelven los POST, para reutilizarlos en otros endpoints).
const MemoryContext = createContext(null);

export function MemoryProvider({ children }) {
  const [ids, setIds] = useState([]); // { id, label }
  const [history, setHistory] = useState([]); // { n, method, url, status, ms, at }
  const [extras, setExtras] = useState({}); // p. ej. token_reseteo

  const rememberId = useCallback((id, label) => {
    setIds((prev) => [{ id, label }, ...prev.filter((x) => !(x.id === id && x.label === label))].slice(0, 30));
  }, []);

  const logCall = useCallback((entry) => {
    setHistory((prev) => [{ ...entry, n: (prev[0]?.n ?? 0) + 1, at: new Date() }, ...prev].slice(0, 50));
  }, []);

  const setExtra = useCallback((k, v) => setExtras((p) => ({ ...p, [k]: v })), []);
  const clear = useCallback(() => {
    setIds([]);
    setHistory([]);
    setExtras({});
  }, []);

  const value = useMemo(
    () => ({ ids, history, extras, rememberId, logCall, setExtra, clear }),
    [ids, history, extras, rememberId, logCall, setExtra, clear]
  );
  return <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>;
}

export const useMemoryContext = () => useContext(MemoryContext);
