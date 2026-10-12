# Frontend SportMatch · Consola de pruebas

Interfaz web (React + Vite) para **probar todas las funciones** de `Api-SportMatch`
(114 rutas del código, incluidas las que no están en `openapi.yaml`).
Sin estilos elaborados: cada endpoint es una tarjeta con sus parámetros, un body JSON
editable ya prellenado y la respuesta cruda. Todo el marcado sale de componentes React;
el único `index.html` es el punto de montaje de Vite.

## Cómo probarlo

1. Levanta la API (`Api-SportMatch`):
   ```
   python seed.py        # crea ciudad Toluca (id=1) y admin@sportmatch.com / Admin123!
   python app.py         # http://127.0.0.1:5000
   ```
2. En esta carpeta:
   ```
   npm install
   cp .env.example .env      # ajusta VITE_API_URL si tu API corre en otro puerto
   npm run dev               # http://localhost:5173
   ```

## Paneles (separación de modos)

| Panel | Quién entra | Qué prueba |
|---|---|---|
| **Público** (`/publico`) | cualquiera, sin sesión | health, registro, login, recuperar contraseña, catálogos públicos (deportes, cuestionarios, eventos, rutas, organizadores) |
| **Usuario** (`/usuario`) | cualquier sesión | mi cuenta, mis deportes, cuestionario, inscripciones, valoraciones, calendario, mis rutas, reportes, tickets, archivos |
| **Organizador** (`/organizador`) | cualquier sesión | perfil de organizador, equipo, cuentas de cobro, solicitud de validación, eventos y su estructura (deportes/requisitos/sedes/fechas/categorías/boletos), paquetes, inscritos/resultados, rutas ligadas |
| **Administrador** (`/admin`) | solo `rol = administrador` | usuarios, catálogo de deportes, cuestionarios, validación de organizadores, moderación de reportes, tickets, auditoría |

Importante: en la API **organizador no es un rol de login**, es un perfil (tabla `organizadores`)
ligado a un usuario. Por eso el panel Organizador se abre con cualquier sesión; para crear/publicar
eventos el organizador debe estar **aprobado** (lo aprueba un admin en el panel Admin →
Validación de organizadores).

La casilla **«probar 403»** de la barra superior abre todos los paneles aunque tu rol no
corresponda, para comprobar que la API rechaza lo que debe.

## Flujo sugerido de prueba completa

1. Admin: `Público → login` con el admin del seed (o `/login` → «Rellenar admin»).
2. Admin → Catálogo de deportes: crear un deporte.
3. Cierra sesión, regístrate (`/registro`) como usuario normal.
4. Organizador → Mi organizador: `POST /api/organizadores` → Validación: enviar solicitud.
5. Admin → Validación de organizadores: revisar (`aprobar`).
6. Organizador → Eventos: crear evento (con `organizador_id`), luego `PUT estado: publicado`.
7. Usuario → Inscripciones: inscribirse; Organizador → Inscritos y resultados: cambiar estado / resultado
   (`completada: true`); Usuario: valorar; Organizador: responder la valoración.

Los **IDs que devuelven los POST se recuerdan** y aparecen como sugerencias en los campos `{id}`
(barra «IDs recordados»). El `token_reseteo` de `olvide-contrasena` se inyecta solo en
`restablecer-contrasena`. Si ejecutas un login/registro desde una tarjeta, la sesión cambia sola.

## Estructura (patrón vista-controlador)

```
src/
├── config/         # api.js (URL base), panels.js (paneles/roles), endpoints.js (catálogo de 114 endpoints)
├── services/       # capa HTTP pura (axios + JWT): http, authService, endpointService
├── models/         # reglas: params de ruta, validación de JSON, agrupación por panel, acceso por rol
├── context/        # AuthContext (sesión) y MemoryContext (IDs recordados + historial)
├── controllers/    # hooks: useAuth, usePanel, useEndpointRunner (la "lógica")
├── routes/         # AppRoutes + ProtectedRoute por rol
├── components/
│   ├── layout/      # AppLayout, Sidebar, Topbar
│   ├── endpoints/   # EndpointCard (probador genérico), MemoryBar
│   └── ui/          # Button, Field, Card, Badge, JsonView
├── views/          # Home, Login, Register, PanelView (el mismo para los 4 paneles)
└── styles/         # tokens.css (paleta) y global.css
```

## Agregar o cambiar un endpoint

Edita `src/config/endpoints.js`: cada entrada define `method`, `path` (con `{params}`),
`panels` donde aparece, `grupo` (sección del menú lateral), `body` (plantilla JSON) y `query`.
No hay que tocar ninguna vista.

## Notas

- Los campos `portada_id`, `logo_id`, `gpx_archivo_id` y `archivo_id` requieren un archivo previo:
  sube uno en «Archivos» (`POST /api/archivos`, multipart) y pega el `id` en el body.
- `PUT /api/valoraciones/{inscripcion_id}/responder` usa el id de la **inscripción** (así lo
  implementa el código, aunque `openapi.yaml` lo llama `valoracion_id`).
- `POST /api/cuestionarios/preguntas/{id}/opciones` y las opciones anidadas exigen `codigo`
  (el yaml no lo documenta).
