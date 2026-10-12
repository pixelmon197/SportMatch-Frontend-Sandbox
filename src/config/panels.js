// Catálogo de paneles. `roles` = quién puede entrar (null = cualquiera, incluso sin sesión).
// Nota: "organizador" NO es un rol de login en la API: es un perfil (tabla organizadores)
// ligado a cualquier usuario. Por eso el panel lo puede abrir cualquier usuario con sesión.
export const PANELS = {
  publico: {
    key: "publico",
    label: "Público",
    path: "/publico",
    roles: null,
    help: "Endpoints sin token: salud, registro, login, recuperación de contraseña y catálogos públicos.",
  },
  usuario: {
    key: "usuario",
    label: "Usuario",
    path: "/usuario",
    roles: ["usuario", "organizador", "administrador"],
    help: "Cuenta propia, deportes, cuestionario, inscripciones, valoraciones, calendario, rutas, reportes y tickets.",
  },
  organizador: {
    key: "organizador",
    label: "Organizador",
    path: "/organizador",
    roles: ["usuario", "organizador", "administrador"],
    help: "Perfil de organizador, validación, equipo, cuentas de cobro, eventos y su estructura, inscritos y resultados. Crear/publicar eventos exige un organizador aprobado (o ser admin).",
  },
  admin: {
    key: "admin",
    label: "Administrador",
    path: "/admin",
    roles: ["administrador"],
    help: "Usuarios, catálogo de deportes, cuestionarios, validación de organizadores, moderación, soporte y auditoría.",
  },
};

export const PANEL_ORDER = ["publico", "usuario", "organizador", "admin"];
