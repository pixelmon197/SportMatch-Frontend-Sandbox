import { useAuthContext } from "../context/AuthContext";

export function useAuth() {
  const ctx = useAuthContext();
  return { ...ctx, isAuth: !!ctx.token, esAdmin: ctx.usuario?.rol === "administrador" };
}
