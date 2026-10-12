import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { TOKEN_KEY, USER_KEY } from "../config/api";
import { authService } from "../services/authService";

const AuthContext = createContext(null);

function readUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [usuario, setUsuario] = useState(readUser);
  // Permite abrir paneles fuera del rol para comprobar que la API responde 403.
  const [bypass, setBypass] = useState(false);

  const setSession = useCallback((accessToken, user) => {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    setToken(accessToken);
    setUsuario(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setToken(null);
    setUsuario(null);
    setBypass(false);
  }, []);

  const login = useCallback(
    async (correo, password) => {
      const res = await authService.login(correo, password);
      if (res.ok) setSession(res.data.access_token, res.data.usuario);
      return res;
    },
    [setSession]
  );

  const refreshMe = useCallback(async () => {
    const res = await authService.me();
    if (res.ok) {
      localStorage.setItem(USER_KEY, JSON.stringify(res.data));
      setUsuario(res.data);
    }
    return res;
  }, []);

  const value = useMemo(
    () => ({ token, usuario, bypass, setBypass, login, logout, setSession, refreshMe }),
    [token, usuario, bypass, login, logout, setSession, refreshMe]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
