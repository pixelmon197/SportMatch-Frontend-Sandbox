// GENERADO a partir de static/openapi.yaml + rutas del código. Edita libremente.
// panels: en qué panel aparece | auth: requiere JWT | body: plantilla JSON editable
export const ENDPOINTS = [
  {
    "id": "get/api/health",
    "method": "GET",
    "path": "/api/health",
    "summary": "Estado del servicio",
    "panels": [
      "publico"
    ],
    "grupo": "Sesión",
    "auth": false
  },
  {
    "id": "post/api/auth/register",
    "method": "POST",
    "path": "/api/auth/register",
    "summary": "Autoregistro (siempre crea rol \"usuario\")",
    "panels": [
      "publico"
    ],
    "grupo": "Sesión",
    "auth": false,
    "body": {
      "nombre_completo": "Ana Pérez",
      "nombre_usuario": "anaperez",
      "correo": "ana@correo.com",
      "password": "MiClave123!",
      "telefono": "5512345678",
      "sexo": "femenino",
      "fecha_nacimiento": "2000-05-10",
      "ciudad_id": 1
    }
  },
  {
    "id": "post/api/auth/login",
    "method": "POST",
    "path": "/api/auth/login",
    "summary": "Iniciar sesión",
    "panels": [
      "publico"
    ],
    "grupo": "Sesión",
    "auth": false,
    "body": {
      "correo": "admin@sportmatch.com",
      "password": "Admin123!"
    }
  },
  {
    "id": "post/api/auth/olvide-contrasena",
    "method": "POST",
    "path": "/api/auth/olvide-contrasena",
    "summary": "Solicitar recuperación de contraseña (genera token de un solo uso)",
    "panels": [
      "publico"
    ],
    "grupo": "Sesión",
    "auth": false,
    "body": {
      "correo": "ana@correo.com"
    }
  },
  {
    "id": "post/api/auth/restablecer-contrasena",
    "method": "POST",
    "path": "/api/auth/restablecer-contrasena",
    "summary": "Cambiar la contraseña usando el token de /olvide-contrasena",
    "panels": [
      "publico"
    ],
    "grupo": "Sesión",
    "auth": false,
    "body": {
      "token": "<token_reseteo>",
      "nueva_password": "OtraClave456"
    }
  },
  {
    "id": "get/api/auth/me",
    "method": "GET",
    "path": "/api/auth/me",
    "summary": "Datos del usuario autenticado",
    "panels": [
      "usuario"
    ],
    "grupo": "Mi cuenta",
    "auth": true
  },
  {
    "id": "put/api/usuarios/me",
    "method": "PUT",
    "path": "/api/usuarios/me",
    "summary": "Actualizar mi propio perfil",
    "panels": [
      "usuario"
    ],
    "grupo": "Mi cuenta",
    "auth": true,
    "body": {
      "nombre_completo": "Ana Pérez",
      "telefono": "5512345678",
      "sexo": "femenino",
      "idioma": "es",
      "zona_horaria": "America/Mexico_City",
      "ciudad_id": 1
    }
  },
  {
    "id": "put/api/usuarios/me/password",
    "method": "PUT",
    "path": "/api/usuarios/me/password",
    "summary": "Cambiar mi contraseña",
    "panels": [
      "usuario"
    ],
    "grupo": "Mi cuenta",
    "auth": true,
    "body": {
      "password_actual": "",
      "password_nueva": ""
    }
  },
  {
    "id": "get/api/usuarios",
    "method": "GET",
    "path": "/api/usuarios",
    "summary": "Listar usuarios (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Usuarios",
    "auth": true,
    "query": [
      "page",
      "per_page",
      "rol",
      "estado_cuenta",
      "q"
    ]
  },
  {
    "id": "get/api/usuarios/{usuario_id}",
    "method": "GET",
    "path": "/api/usuarios/{usuario_id}",
    "summary": "Obtener un usuario por id (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Usuarios",
    "auth": true
  },
  {
    "id": "put/api/usuarios/{usuario_id}/rol",
    "method": "PUT",
    "path": "/api/usuarios/{usuario_id}/rol",
    "summary": "Cambiar el rol de un usuario (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Usuarios",
    "auth": true,
    "body": {
      "rol": "usuario"
    }
  },
  {
    "id": "put/api/usuarios/{usuario_id}/estado",
    "method": "PUT",
    "path": "/api/usuarios/{usuario_id}/estado",
    "summary": "Activar, suspender o eliminar (borrado suave) un usuario (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Usuarios",
    "auth": true,
    "body": {
      "estado_cuenta": "activa"
    }
  },
  {
    "id": "post/api/usuarios/admins",
    "method": "POST",
    "path": "/api/usuarios/admins",
    "summary": "Crear otro administrador (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Usuarios",
    "auth": true,
    "body": {
      "nombre_completo": "Segundo Admin",
      "nombre_usuario": "admin2",
      "correo": "admin2@sportmatch.com",
      "password": "ClaveSegura123",
      "fecha_nacimiento": "1995-01-01",
      "sexo": "femenino"
    }
  },
  {
    "id": "get/api/deportes",
    "method": "GET",
    "path": "/api/deportes",
    "summary": "Listar catálogo de deportes (público; ?incluir_inactivos=1 para admin)",
    "panels": [
      "publico"
    ],
    "grupo": "Deportes",
    "auth": false,
    "query": [
      "incluir_inactivos"
    ]
  },
  {
    "id": "post/api/deportes",
    "method": "POST",
    "path": "/api/deportes",
    "summary": "Crear un deporte (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Catálogo de deportes",
    "auth": true,
    "body": {
      "nombre": "Running",
      "categoria": "resistencia",
      "activo": true
    }
  },
  {
    "id": "get/api/deportes/{deporte_id}",
    "method": "GET",
    "path": "/api/deportes/{deporte_id}",
    "summary": "Obtener un deporte",
    "panels": [
      "publico"
    ],
    "grupo": "Deportes",
    "auth": false
  },
  {
    "id": "put/api/deportes/{deporte_id}",
    "method": "PUT",
    "path": "/api/deportes/{deporte_id}",
    "summary": "Actualizar un deporte (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Catálogo de deportes",
    "auth": true,
    "body": {
      "nombre": "Running",
      "categoria": "resistencia",
      "activo": true
    }
  },
  {
    "id": "delete/api/deportes/{deporte_id}",
    "method": "DELETE",
    "path": "/api/deportes/{deporte_id}",
    "summary": "Desactivar un deporte (borrado suave, solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Catálogo de deportes",
    "auth": true
  },
  {
    "id": "get/api/deportes/me",
    "method": "GET",
    "path": "/api/deportes/me",
    "summary": "Listar mis deportes",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis deportes",
    "auth": true
  },
  {
    "id": "post/api/deportes/me",
    "method": "POST",
    "path": "/api/deportes/me",
    "summary": "Agregar un deporte a mi perfil",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis deportes",
    "auth": true,
    "body": {
      "deporte_id": 1,
      "nivel": "intermedio",
      "es_principal": true
    }
  },
  {
    "id": "put/api/deportes/me/{deporte_id}",
    "method": "PUT",
    "path": "/api/deportes/me/{deporte_id}",
    "summary": "Actualizar nivel / es_principal de uno de mis deportes",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis deportes",
    "auth": true,
    "body": {
      "nivel": "avanzado",
      "es_principal": true
    }
  },
  {
    "id": "delete/api/deportes/me/{deporte_id}",
    "method": "DELETE",
    "path": "/api/deportes/me/{deporte_id}",
    "summary": "Quitar un deporte de mi perfil",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis deportes",
    "auth": true
  },
  {
    "id": "get/api/cuestionarios",
    "method": "GET",
    "path": "/api/cuestionarios",
    "summary": "Listar cuestionarios (público; ?incluir_inactivos=1 para admin)",
    "panels": [
      "publico"
    ],
    "grupo": "Cuestionarios",
    "auth": false,
    "query": [
      "incluir_inactivos"
    ]
  },
  {
    "id": "post/api/cuestionarios",
    "method": "POST",
    "path": "/api/cuestionarios",
    "summary": "Crear un cuestionario (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Cuestionarios",
    "auth": true,
    "body": {
      "codigo": "registro_v1",
      "titulo": "Cuestionario de registro",
      "descripcion": "Conoce al deportista"
    }
  },
  {
    "id": "get/api/cuestionarios/{codigo}",
    "method": "GET",
    "path": "/api/cuestionarios/{codigo}",
    "summary": "Obtener un cuestionario completo (preguntas + opciones) por su código",
    "panels": [
      "publico"
    ],
    "grupo": "Cuestionarios",
    "auth": false
  },
  {
    "id": "post/api/cuestionarios/{cuestionario_id}/preguntas",
    "method": "POST",
    "path": "/api/cuestionarios/{cuestionario_id}/preguntas",
    "summary": "Agregar una pregunta a un cuestionario, opcionalmente con sus opciones (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Cuestionarios",
    "auth": true,
    "body": {
      "codigo": "deporte_fav",
      "texto": "¿Cuál es tu deporte favorito?",
      "tipo": "opcion_unica",
      "obligatoria": true,
      "opciones": [
        {
          "codigo": "running",
          "texto": "Running",
          "deporte_id": 1
        }
      ]
    }
  },
  {
    "id": "post/api/cuestionarios/{codigo}/responder",
    "method": "POST",
    "path": "/api/cuestionarios/{codigo}/responder",
    "summary": "Responder un cuestionario (usuario autenticado)",
    "panels": [
      "usuario"
    ],
    "grupo": "Cuestionario",
    "auth": true,
    "body": {
      "respuestas": [
        {
          "pregunta_id": 1,
          "opcion_id": 1
        }
      ]
    }
  },
  {
    "id": "get/api/cuestionarios/me/respuestas",
    "method": "GET",
    "path": "/api/cuestionarios/me/respuestas",
    "summary": "Ver mis respuestas",
    "panels": [
      "usuario"
    ],
    "grupo": "Cuestionario",
    "auth": true
  },
  {
    "id": "get/api/eventos",
    "method": "GET",
    "path": "/api/eventos",
    "summary": "Listar eventos (público; por defecto solo estado=publicado). Filtros - Query params - estado, tipo, deporte_id, ciudad_id, q, page, per_page",
    "panels": [
      "publico"
    ],
    "grupo": "Eventos",
    "auth": false,
    "query": [
      "estado",
      "tipo",
      "deporte_id",
      "ciudad_id",
      "q",
      "page",
      "per_page"
    ]
  },
  {
    "id": "post/api/eventos",
    "method": "POST",
    "path": "/api/eventos",
    "summary": "Crear un evento, opcionalmente con deportes/requisitos/sedes/fechas/categorías+boletos anidados (admin, o miembro de un organizador aprobado)",
    "panels": [
      "organizador"
    ],
    "grupo": "Eventos",
    "auth": true,
    "body": {
      "organizador_id": 1,
      "titulo": "5K Nocturna",
      "tipo": "carrera",
      "slug": "5k-nocturna",
      "dificultad": "moderada",
      "descripcion": "Carrera nocturna por el centro de la ciudad",
      "edad_minima": 12,
      "es_publico": true,
      "deportes": [
        1
      ],
      "requisitos": [
        {
          "descripcion": "Certificado médico",
          "orden": 1
        }
      ],
      "sedes": [
        {
          "tipo": "salida",
          "nombre": "Parque Central",
          "direccion": "Av. Principal 123",
          "ciudad_id": 1,
          "latitud": 19.2826,
          "longitud": -99.6557
        }
      ],
      "fechas": [
        {
          "inicia_en": "2026-11-15T19:00:00",
          "termina_en": "2026-11-15T22:00:00"
        }
      ],
      "categorias": [
        {
          "nombre": "5K Varonil",
          "distancia_km": 5,
          "edad_minima": 18,
          "edad_maxima": 45,
          "cupo_total": 100,
          "permite_lista_espera": false,
          "boletos": [
            {}
          ]
        }
      ]
    }
  },
  {
    "id": "get/api/eventos/{evento_id}",
    "method": "GET",
    "path": "/api/eventos/{evento_id}",
    "summary": "Detalle de un evento (con deportes/requisitos/sedes/fechas/categorías/boletos)",
    "panels": [
      "publico"
    ],
    "grupo": "Eventos",
    "auth": false
  },
  {
    "id": "put/api/eventos/{evento_id}",
    "method": "PUT",
    "path": "/api/eventos/{evento_id}",
    "summary": "Actualizar un evento, incl. cambiar `estado` (borrador/en_revision/publicado/cancelado/finalizado) (admin o miembro del organizador dueño)",
    "panels": [
      "organizador"
    ],
    "grupo": "Eventos",
    "auth": true,
    "body": {
      "titulo": "5K Nocturna 2026",
      "tipo": "carrera",
      "dificultad": "moderada",
      "descripcion": "Carrera nocturna por el centro de la ciudad",
      "edad_minima": 12,
      "es_publico": true,
      "estado": "publicado"
    }
  },
  {
    "id": "delete/api/eventos/{evento_id}",
    "method": "DELETE",
    "path": "/api/eventos/{evento_id}",
    "summary": "Eliminar un evento (borrado suave, queda cancelado; admin o miembro del organizador dueño)",
    "panels": [
      "organizador"
    ],
    "grupo": "Eventos",
    "auth": true
  },
  {
    "id": "get/api/eventos/slug/{slug}",
    "method": "GET",
    "path": "/api/eventos/slug/{slug}",
    "summary": "Detalle de un evento por su slug",
    "panels": [
      "publico"
    ],
    "grupo": "Eventos",
    "auth": false
  },
  {
    "id": "post/api/eventos/{evento_id}/deportes",
    "method": "POST",
    "path": "/api/eventos/{evento_id}/deportes",
    "summary": "Asociar un deporte a un evento (admin o miembro del organizador dueño)",
    "panels": [
      "admin"
    ],
    "grupo": "Catálogo de deportes",
    "auth": true,
    "body": {
      "deporte_id": 1
    }
  },
  {
    "id": "delete/api/eventos/{evento_id}/deportes/{deporte_id}",
    "method": "DELETE",
    "path": "/api/eventos/{evento_id}/deportes/{deporte_id}",
    "summary": "Quitar un deporte de un evento",
    "panels": [
      "admin"
    ],
    "grupo": "Catálogo de deportes",
    "auth": true
  },
  {
    "id": "post/api/eventos/{evento_id}/requisitos",
    "method": "POST",
    "path": "/api/eventos/{evento_id}/requisitos",
    "summary": "Agregar un requisito a un evento (admin o miembro del organizador dueño)",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "descripcion": "Certificado médico vigente",
      "orden": 1
    }
  },
  {
    "id": "put/api/eventos/requisitos/{requisito_id}",
    "method": "PUT",
    "path": "/api/eventos/requisitos/{requisito_id}",
    "summary": "Editar un requisito",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "descripcion": "Certificado médico vigente",
      "orden": 2
    }
  },
  {
    "id": "delete/api/eventos/requisitos/{requisito_id}",
    "method": "DELETE",
    "path": "/api/eventos/requisitos/{requisito_id}",
    "summary": "Eliminar un requisito",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true
  },
  {
    "id": "post/api/eventos/{evento_id}/sedes",
    "method": "POST",
    "path": "/api/eventos/{evento_id}/sedes",
    "summary": "Agregar una sede a un evento (admin o miembro del organizador dueño)",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "tipo": "salida",
      "nombre": "Parque Central",
      "direccion": "Av. Principal 123",
      "ciudad_id": 1,
      "latitud": 19.2826,
      "longitud": -99.6557
    }
  },
  {
    "id": "put/api/eventos/sedes/{sede_id}",
    "method": "PUT",
    "path": "/api/eventos/sedes/{sede_id}",
    "summary": "Editar una sede",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "tipo": "meta",
      "nombre": "Arco de meta",
      "direccion": "Av. Principal 456",
      "ciudad_id": 1,
      "latitud": 19.2826,
      "longitud": -99.6557
    }
  },
  {
    "id": "delete/api/eventos/sedes/{sede_id}",
    "method": "DELETE",
    "path": "/api/eventos/sedes/{sede_id}",
    "summary": "Eliminar una sede",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true
  },
  {
    "id": "post/api/eventos/{evento_id}/fechas",
    "method": "POST",
    "path": "/api/eventos/{evento_id}/fechas",
    "summary": "Agregar una fecha a un evento (admin o miembro del organizador dueño)",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "inicia_en": "2026-11-15T19:00:00",
      "termina_en": "2026-11-15T22:00:00"
    }
  },
  {
    "id": "put/api/eventos/fechas/{fecha_id}",
    "method": "PUT",
    "path": "/api/eventos/fechas/{fecha_id}",
    "summary": "Editar una fecha (incl. marcarla como cancelada con cancelada_en)",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "inicia_en": "2026-11-16T19:00:00",
      "termina_en": "2026-11-16T22:00:00",
      "cancelada_en": null
    }
  },
  {
    "id": "delete/api/eventos/fechas/{fecha_id}",
    "method": "DELETE",
    "path": "/api/eventos/fechas/{fecha_id}",
    "summary": "Eliminar una fecha",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true
  },
  {
    "id": "post/api/eventos/{evento_id}/categorias",
    "method": "POST",
    "path": "/api/eventos/{evento_id}/categorias",
    "summary": "Agregar una categoría a un evento existente (admin o miembro del organizador dueño)",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "nombre": "5K Varonil",
      "distancia_km": 5,
      "edad_minima": 18,
      "edad_maxima": 45,
      "cupo_total": 100,
      "permite_lista_espera": false
    }
  },
  {
    "id": "put/api/eventos/categorias/{categoria_id}",
    "method": "PUT",
    "path": "/api/eventos/categorias/{categoria_id}",
    "summary": "Editar una categoría",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "nombre": "5K Femenil",
      "distancia_km": 5,
      "edad_minima": 18,
      "edad_maxima": 45,
      "cupo_total": 150,
      "permite_lista_espera": true
    }
  },
  {
    "id": "delete/api/eventos/categorias/{categoria_id}",
    "method": "DELETE",
    "path": "/api/eventos/categorias/{categoria_id}",
    "summary": "Eliminar una categoría",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true
  },
  {
    "id": "post/api/eventos/categorias/{categoria_id}/boletos",
    "method": "POST",
    "path": "/api/eventos/categorias/{categoria_id}/boletos",
    "summary": "Agregar un tipo de boleto a una categoría (admin o miembro del organizador dueño)",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "tipo": "general",
      "precio": 250,
      "moneda": "MXN",
      "disponible_desde": "2026-09-01T00:00:00",
      "disponible_hasta": "2026-11-10T23:59:59",
      "cantidad_maxima": 100
    }
  },
  {
    "id": "put/api/eventos/boletos/{boleto_id}",
    "method": "PUT",
    "path": "/api/eventos/boletos/{boleto_id}",
    "summary": "Editar un boleto",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true,
    "body": {
      "tipo": "preventa",
      "precio": 200,
      "moneda": "MXN",
      "disponible_desde": "2026-09-01T00:00:00",
      "disponible_hasta": "2026-10-15T23:59:59",
      "cantidad_maxima": 50,
      "activo": true
    }
  },
  {
    "id": "delete/api/eventos/boletos/{boleto_id}",
    "method": "DELETE",
    "path": "/api/eventos/boletos/{boleto_id}",
    "summary": "Eliminar un boleto",
    "panels": [
      "organizador"
    ],
    "grupo": "Estructura del evento",
    "auth": true
  },
  {
    "id": "post/api/archivos",
    "method": "POST",
    "path": "/api/archivos",
    "summary": "Subir una imagen, video, documento (PDF), GPX o audio. Regresa el `id` que luego se usa en portada_id, logo_id, gpx_archivo_id o archivo_id",
    "panels": [
      "usuario",
      "organizador"
    ],
    "grupo": "Archivos",
    "auth": true,
    "multipart": true
  },
  {
    "id": "get/api/archivos/{archivo_id}",
    "method": "GET",
    "path": "/api/archivos/{archivo_id}",
    "summary": "Ver los datos de un archivo subido (incluye su url)",
    "panels": [
      "publico"
    ],
    "grupo": "Archivos",
    "auth": false
  },
  {
    "id": "delete/api/archivos/{archivo_id}",
    "method": "DELETE",
    "path": "/api/archivos/{archivo_id}",
    "summary": "Eliminar un archivo (borrado suave; solo su dueño o un admin)",
    "panels": [
      "usuario",
      "organizador"
    ],
    "grupo": "Archivos",
    "auth": true
  },
  {
    "id": "get/api/rutas",
    "method": "GET",
    "path": "/api/rutas",
    "summary": "Listar rutas públicas. Filtros - deporte_id, creador_id",
    "panels": [
      "publico"
    ],
    "grupo": "Rutas",
    "auth": false,
    "query": [
      "deporte_id",
      "creador_id"
    ]
  },
  {
    "id": "post/api/rutas",
    "method": "POST",
    "path": "/api/rutas",
    "summary": "Crear una ruta propia, opcionalmente con sus puntos GPS (cualquier usuario autenticado)",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis rutas",
    "auth": true,
    "body": {
      "nombre": "Sendero del Bosque",
      "deporte_id": 1,
      "dificultad": "moderada",
      "distancia_m": 5000,
      "desnivel_positivo_m": 120,
      "puntos": [
        {
          "tipo": "inicio",
          "orden": 1,
          "latitud": 19.4,
          "longitud": -99.1
        }
      ]
    }
  },
  {
    "id": "get/api/rutas/{ruta_id}",
    "method": "GET",
    "path": "/api/rutas/{ruta_id}",
    "summary": "Detalle de una ruta con sus puntos",
    "panels": [
      "publico"
    ],
    "grupo": "Rutas",
    "auth": false
  },
  {
    "id": "put/api/rutas/{ruta_id}",
    "method": "PUT",
    "path": "/api/rutas/{ruta_id}",
    "summary": "Editar mi ruta (dueño o admin)",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis rutas",
    "auth": true,
    "body": {
      "nombre": "Sendero del Bosque",
      "descripcion": "Ruta de montaña de 5 km",
      "dificultad": "moderada",
      "distancia_m": 5000,
      "desnivel_positivo_m": 120,
      "es_publica": true
    }
  },
  {
    "id": "delete/api/rutas/{ruta_id}",
    "method": "DELETE",
    "path": "/api/rutas/{ruta_id}",
    "summary": "Eliminar mi ruta (borrado suave; dueño o admin)",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis rutas",
    "auth": true
  },
  {
    "id": "get/api/rutas/categorias/{categoria_id}/rutas",
    "method": "GET",
    "path": "/api/rutas/categorias/{categoria_id}/rutas",
    "summary": "Ver las rutas ligadas a una categoría de evento",
    "panels": [
      "publico"
    ],
    "grupo": "Rutas",
    "auth": false
  },
  {
    "id": "post/api/rutas/categorias/{categoria_id}/rutas",
    "method": "POST",
    "path": "/api/rutas/categorias/{categoria_id}/rutas",
    "summary": "Ligar una ruta existente a una categoría de evento (solo admin)",
    "panels": [
      "organizador"
    ],
    "grupo": "Rutas ligadas",
    "auth": true,
    "body": {
      "ruta_id": 1
    }
  },
  {
    "id": "get/api/eventos/{evento_id}/paquetes",
    "method": "GET",
    "path": "/api/eventos/{evento_id}/paquetes",
    "summary": "Listar paquetes de recuperación de un evento (público; ?incluir_inactivos=1 para admin)",
    "panels": [
      "publico"
    ],
    "grupo": "Eventos",
    "auth": false,
    "query": [
      "incluir_inactivos"
    ]
  },
  {
    "id": "post/api/eventos/{evento_id}/paquetes",
    "method": "POST",
    "path": "/api/eventos/{evento_id}/paquetes",
    "summary": "Crear un paquete de recuperación para un evento (solo admin)",
    "panels": [
      "organizador"
    ],
    "grupo": "Paquetes de recuperación",
    "auth": true,
    "body": {
      "nombre": "Kit básico",
      "nivel": "basico",
      "precio": 150
    }
  },
  {
    "id": "post/api/inscripciones",
    "method": "POST",
    "path": "/api/inscripciones",
    "summary": "Inscribirme a una categoría de un evento (usuario autenticado)",
    "panels": [
      "usuario"
    ],
    "grupo": "Inscripciones",
    "auth": true,
    "body": {
      "evento_id": 1,
      "fecha_id": 1,
      "categoria_id": 1,
      "boleto_id": 1
    }
  },
  {
    "id": "get/api/inscripciones/me",
    "method": "GET",
    "path": "/api/inscripciones/me",
    "summary": "Ver mis inscripciones (filtro opcional ?estado=)",
    "panels": [
      "usuario"
    ],
    "grupo": "Inscripciones",
    "auth": true,
    "query": [
      "estado"
    ]
  },
  {
    "id": "get/api/inscripciones/{inscripcion_id}",
    "method": "GET",
    "path": "/api/inscripciones/{inscripcion_id}",
    "summary": "Detalle de una inscripción (dueño o admin)",
    "panels": [
      "usuario"
    ],
    "grupo": "Inscripciones",
    "auth": true
  },
  {
    "id": "put/api/inscripciones/{inscripcion_id}/cancelar",
    "method": "PUT",
    "path": "/api/inscripciones/{inscripcion_id}/cancelar",
    "summary": "Cancelar una inscripción (dueño o admin). Si había lista de espera, sube al siguiente.",
    "panels": [
      "usuario"
    ],
    "grupo": "Inscripciones",
    "auth": true
  },
  {
    "id": "put/api/inscripciones/{inscripcion_id}/estado",
    "method": "PUT",
    "path": "/api/inscripciones/{inscripcion_id}/estado",
    "summary": "Cambiar el estado de una inscripción a mano (solo admin, mientras no exista el módulo de pagos)",
    "panels": [
      "organizador"
    ],
    "grupo": "Inscritos y resultados",
    "auth": true,
    "body": {
      "estado": "inscrito"
    }
  },
  {
    "id": "put/api/inscripciones/{inscripcion_id}/resultado",
    "method": "PUT",
    "path": "/api/inscripciones/{inscripcion_id}/resultado",
    "summary": "Registrar asistencia y resultado el día del evento (solo admin)",
    "panels": [
      "organizador"
    ],
    "grupo": "Inscritos y resultados",
    "auth": true,
    "body": {
      "asistio": true,
      "tiempo_oficial": "00:28:15",
      "posicion_general": 1,
      "posicion_categoria": 1,
      "numero_participante": "101",
      "completada": true
    }
  },
  {
    "id": "get/api/eventos/{evento_id}/inscripciones",
    "method": "GET",
    "path": "/api/eventos/{evento_id}/inscripciones",
    "summary": "Ver quién se inscribió a un evento (solo admin). Filtros - categoria_id, estado",
    "panels": [
      "organizador"
    ],
    "grupo": "Inscritos y resultados",
    "auth": true,
    "query": [
      "categoria_id",
      "estado"
    ]
  },
  {
    "id": "post/api/inscripciones/{inscripcion_id}/valoracion",
    "method": "POST",
    "path": "/api/inscripciones/{inscripcion_id}/valoracion",
    "summary": "Valorar el evento tras asistir (solo si la inscripción está \"completada\"; usuario dueño)",
    "panels": [
      "usuario"
    ],
    "grupo": "Inscripciones",
    "auth": true,
    "body": {
      "calificacion_evento": 5,
      "calificacion_organizador": 5,
      "comentario": "Excelente evento"
    }
  },
  {
    "id": "get/api/eventos/{evento_id}/valoraciones",
    "method": "GET",
    "path": "/api/eventos/{evento_id}/valoraciones",
    "summary": "Ver las valoraciones públicas de un evento",
    "panels": [
      "publico"
    ],
    "grupo": "Eventos",
    "auth": false
  },
  {
    "id": "put/api/valoraciones/{inscripcion_id}/responder",
    "method": "PUT",
    "path": "/api/valoraciones/{inscripcion_id}/responder",
    "summary": "Responder públicamente a una valoración (organizador; por ahora, admin)",
    "panels": [
      "organizador"
    ],
    "grupo": "Inscritos y resultados",
    "auth": true,
    "body": {
      "respuesta_organizador": "¡Gracias por participar!"
    }
  },
  {
    "id": "get/api/usuarios/me/calendario",
    "method": "GET",
    "path": "/api/usuarios/me/calendario",
    "summary": "Ver las fechas de eventos que guardé en mi calendario",
    "panels": [
      "usuario"
    ],
    "grupo": "Calendario",
    "auth": true
  },
  {
    "id": "post/api/usuarios/me/calendario",
    "method": "POST",
    "path": "/api/usuarios/me/calendario",
    "summary": "Agregar una fecha de evento a mi calendario",
    "panels": [
      "usuario"
    ],
    "grupo": "Calendario",
    "auth": true,
    "body": {
      "fecha_id": 1
    }
  },
  {
    "id": "delete/api/usuarios/me/calendario/{fecha_id}",
    "method": "DELETE",
    "path": "/api/usuarios/me/calendario/{fecha_id}",
    "summary": "Quitar una fecha de mi calendario",
    "panels": [
      "usuario"
    ],
    "grupo": "Calendario",
    "auth": true
  },
  {
    "id": "get/api/organizadores",
    "method": "GET",
    "path": "/api/organizadores",
    "summary": "Listar organizadores (público; solo aprobados. ?estado_validacion= para admin)",
    "panels": [
      "publico"
    ],
    "grupo": "Organizadores",
    "auth": false,
    "query": [
      "estado_validacion"
    ]
  },
  {
    "id": "post/api/organizadores",
    "method": "POST",
    "path": "/api/organizadores",
    "summary": "Crear mi perfil de organizador (autenticado; uno por usuario, queda \"sin_solicitud\" hasta enviarlo a revisión)",
    "panels": [
      "organizador"
    ],
    "grupo": "Mi organizador",
    "auth": true,
    "body": {
      "nombre_comercial": "Carreras del Valle",
      "descripcion": "Organizamos carreras de calle desde 2015",
      "correo_contacto": "contacto@carrerasdelvalle.com",
      "telefono_contacto": "5512345678",
      "ciudad_id": 1
    }
  },
  {
    "id": "get/api/organizadores/me",
    "method": "GET",
    "path": "/api/organizadores/me",
    "summary": "Mi propio perfil de organizador (aquí se obtiene el organizador_id para crear eventos)",
    "panels": [
      "organizador"
    ],
    "grupo": "Mi organizador",
    "auth": true
  },
  {
    "id": "get/api/organizadores/{organizador_id}",
    "method": "GET",
    "path": "/api/organizadores/{organizador_id}",
    "summary": "Detalle de un organizador",
    "panels": [
      "publico"
    ],
    "grupo": "Organizadores",
    "auth": false
  },
  {
    "id": "put/api/organizadores/{organizador_id}",
    "method": "PUT",
    "path": "/api/organizadores/{organizador_id}",
    "summary": "Editar mi organizador (miembro propietario/administrador, o admin)",
    "panels": [
      "organizador"
    ],
    "grupo": "Mi organizador",
    "auth": true,
    "body": {
      "nombre_comercial": "Carreras del Valle",
      "descripcion": "Organizamos carreras de calle desde 2015",
      "correo_contacto": "contacto@carrerasdelvalle.com",
      "telefono_contacto": "5512345678",
      "ciudad_id": 1
    }
  },
  {
    "id": "post/api/organizadores/{organizador_id}/miembros",
    "method": "POST",
    "path": "/api/organizadores/{organizador_id}/miembros",
    "summary": "Agregar un miembro al equipo del organizador",
    "panels": [
      "organizador"
    ],
    "grupo": "Equipo",
    "auth": true,
    "body": {
      "usuario_id": 1,
      "rol": "colaborador"
    }
  },
  {
    "id": "post/api/organizadores/{organizador_id}/solicitudes",
    "method": "POST",
    "path": "/api/organizadores/{organizador_id}/solicitudes",
    "summary": "Enviar el organizador a revisión, opcionalmente con documentos anexos",
    "panels": [
      "organizador"
    ],
    "grupo": "Validación (solicitudes)",
    "auth": true,
    "body": {
      "documentos": []
    }
  },
  {
    "id": "post/api/organizadores/solicitudes/{solicitud_id}/documentos",
    "method": "POST",
    "path": "/api/organizadores/solicitudes/{solicitud_id}/documentos",
    "summary": "Agregar un documento a una solicitud de validación (dueño del organizador o admin)",
    "panels": [
      "organizador"
    ],
    "grupo": "Validación (solicitudes)",
    "auth": true,
    "body": {
      "tipo_documento": "ine",
      "archivo_id": 1,
      "numero_documento": "ABCD123456HDFRRL09"
    }
  },
  {
    "id": "get/api/organizadores/solicitudes",
    "method": "GET",
    "path": "/api/organizadores/solicitudes",
    "summary": "Bandeja de solicitudes de validación (solo admin; ?estado=pendiente por defecto)",
    "panels": [
      "admin"
    ],
    "grupo": "Validación de organizadores",
    "auth": true,
    "query": [
      "estado"
    ]
  },
  {
    "id": "put/api/organizadores/solicitudes/{solicitud_id}/revisar",
    "method": "PUT",
    "path": "/api/organizadores/solicitudes/{solicitud_id}/revisar",
    "summary": "Aprobar o rechazar una solicitud de validación (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Validación de organizadores",
    "auth": true,
    "body": {
      "decision": "aprobar",
      "comentarios": "Documentos correctos"
    }
  },
  {
    "id": "post/api/reportes",
    "method": "POST",
    "path": "/api/reportes",
    "summary": "Reportar contenido o a un usuario (tipo_entidad/entidad_id son genéricos)",
    "panels": [
      "admin"
    ],
    "grupo": "Reportes (moderación)",
    "auth": true,
    "body": {
      "tipo_entidad": "evento",
      "entidad_id": 42,
      "motivo": "spam",
      "descripcion": "Publicó el mismo comentario varias veces"
    }
  },
  {
    "id": "get/api/reportes",
    "method": "GET",
    "path": "/api/reportes",
    "summary": "Bandeja de moderación (solo admin; ?estado=pendiente por defecto)",
    "panels": [
      "admin"
    ],
    "grupo": "Reportes (moderación)",
    "auth": true,
    "query": [
      "estado",
      "tipo_entidad"
    ]
  },
  {
    "id": "put/api/reportes/{reporte_id}",
    "method": "PUT",
    "path": "/api/reportes/{reporte_id}",
    "summary": "Moderar un reporte (solo admin) — se registra en la bitácora de auditoría",
    "panels": [
      "admin"
    ],
    "grupo": "Reportes (moderación)",
    "auth": true,
    "body": {
      "estado": "resuelto",
      "accion_tomada": "advertencia",
      "notas_moderador": "Se contactó al usuario reportado"
    }
  },
  {
    "id": "post/api/tickets",
    "method": "POST",
    "path": "/api/tickets",
    "summary": "Abrir un ticket de soporte con el mensaje inicial",
    "panels": [
      "usuario"
    ],
    "grupo": "Tickets",
    "auth": true,
    "body": {
      "asunto": "No puedo pagar mi inscripción",
      "mensaje": "Me sale un error al intentar pagar con tarjeta",
      "categoria": "pagos",
      "prioridad": "media"
    }
  },
  {
    "id": "get/api/tickets",
    "method": "GET",
    "path": "/api/tickets",
    "summary": "Bandeja de soporte (solo admin; filtros estado, prioridad, asignado_a)",
    "panels": [
      "admin"
    ],
    "grupo": "Tickets (soporte)",
    "auth": true,
    "query": [
      "estado",
      "prioridad",
      "asignado_a"
    ]
  },
  {
    "id": "get/api/tickets/{ticket_id}",
    "method": "GET",
    "path": "/api/tickets/{ticket_id}",
    "summary": "Detalle de un ticket con sus mensajes (dueño no ve mensajes internos)",
    "panels": [
      "usuario",
      "admin"
    ],
    "grupo": "Tickets",
    "auth": true
  },
  {
    "id": "put/api/tickets/{ticket_id}",
    "method": "PUT",
    "path": "/api/tickets/{ticket_id}",
    "summary": "Asignar, priorizar o cerrar un ticket (solo admin)",
    "panels": [
      "usuario",
      "admin"
    ],
    "grupo": "Tickets (soporte)",
    "auth": true,
    "body": {
      "asignado_a": 2,
      "categoria": "cuenta",
      "prioridad": "alta",
      "estado": "cerrado"
    }
  },
  {
    "id": "post/api/tickets/{ticket_id}/mensajes",
    "method": "POST",
    "path": "/api/tickets/{ticket_id}/mensajes",
    "summary": "Agregar un mensaje al ticket (dueño o admin; solo admin puede marcarlo es_interno)",
    "panels": [
      "usuario",
      "admin"
    ],
    "grupo": "Tickets",
    "auth": true,
    "body": {
      "mensaje": "Ya revisamos tu caso",
      "es_interno": false
    }
  },
  {
    "id": "get/api/admin/auditoria",
    "method": "GET",
    "path": "/api/admin/auditoria",
    "summary": "Bitácora de auditoría de solo lectura (solo admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Auditoría",
    "auth": true,
    "query": [
      "tipo_entidad",
      "entidad_id",
      "usuario_id"
    ]
  },
  {
    "id": "put/api/cuestionarios/{cuestionario_id}",
    "method": "PUT",
    "path": "/api/cuestionarios/{cuestionario_id}",
    "summary": "Editar un cuestionario (admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Cuestionarios",
    "auth": true,
    "body": {
      "titulo": "Registro v1",
      "descripcion": "",
      "activo": true
    }
  },
  {
    "id": "put/api/cuestionarios/preguntas/{pregunta_id}",
    "method": "PUT",
    "path": "/api/cuestionarios/preguntas/{pregunta_id}",
    "summary": "Editar una pregunta (admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Cuestionarios",
    "auth": true,
    "body": {
      "texto": "¿Qué deporte practicas?",
      "tipo": "opcion_unica",
      "obligatoria": true,
      "orden": 1
    }
  },
  {
    "id": "delete/api/cuestionarios/preguntas/{pregunta_id}",
    "method": "DELETE",
    "path": "/api/cuestionarios/preguntas/{pregunta_id}",
    "summary": "Eliminar una pregunta (admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Cuestionarios",
    "auth": true
  },
  {
    "id": "post/api/cuestionarios/preguntas/{pregunta_id}/opciones",
    "method": "POST",
    "path": "/api/cuestionarios/preguntas/{pregunta_id}/opciones",
    "summary": "Agregar una opción a una pregunta (admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Cuestionarios",
    "auth": true,
    "body": {
      "codigo": "running",
      "texto": "Running",
      "deporte_id": 1,
      "orden": 1
    }
  },
  {
    "id": "delete/api/cuestionarios/opciones/{opcion_id}",
    "method": "DELETE",
    "path": "/api/cuestionarios/opciones/{opcion_id}",
    "summary": "Eliminar una opción (admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Cuestionarios",
    "auth": true
  },
  {
    "id": "put/api/paquetes/{paquete_id}",
    "method": "PUT",
    "path": "/api/paquetes/{paquete_id}",
    "summary": "Editar un paquete de recuperación (admin / organizador del evento)",
    "panels": [
      "organizador"
    ],
    "grupo": "Paquetes de recuperación",
    "auth": true,
    "body": {
      "nombre": "Kit premium",
      "nivel": "premium",
      "precio": 350,
      "activo": true
    }
  },
  {
    "id": "delete/api/paquetes/{paquete_id}",
    "method": "DELETE",
    "path": "/api/paquetes/{paquete_id}",
    "summary": "Desactivar un paquete de recuperación (admin / organizador del evento)",
    "panels": [
      "organizador"
    ],
    "grupo": "Paquetes de recuperación",
    "auth": true
  },
  {
    "id": "post/api/rutas/{ruta_id}/puntos",
    "method": "POST",
    "path": "/api/rutas/{ruta_id}/puntos",
    "summary": "Agregar un punto GPS a una ruta (dueño o admin)",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis rutas",
    "auth": true,
    "body": {
      "tipo": "punto_interes",
      "orden": 2,
      "nombre": "Mirador",
      "latitud": 19.41,
      "longitud": -99.12,
      "altitud_m": 2600
    }
  },
  {
    "id": "delete/api/rutas/puntos/{punto_id}",
    "method": "DELETE",
    "path": "/api/rutas/puntos/{punto_id}",
    "summary": "Eliminar un punto de ruta (dueño o admin)",
    "panels": [
      "usuario"
    ],
    "grupo": "Mis rutas",
    "auth": true
  },
  {
    "id": "delete/api/rutas/eventos-rutas/{evento_id}/{ruta_id}",
    "method": "DELETE",
    "path": "/api/rutas/eventos-rutas/{evento_id}/{ruta_id}",
    "summary": "Desligar una ruta de un evento (admin / organizador del evento)",
    "panels": [
      "organizador"
    ],
    "grupo": "Rutas ligadas",
    "auth": true
  },
  {
    "id": "delete/api/organizadores/{organizador_id}",
    "method": "DELETE",
    "path": "/api/organizadores/{organizador_id}",
    "summary": "Eliminar mi organizador (propietario o admin)",
    "panels": [
      "organizador"
    ],
    "grupo": "Mi organizador",
    "auth": true
  },
  {
    "id": "delete/api/organizadores/{organizador_id}/miembros/{usuario_id}",
    "method": "DELETE",
    "path": "/api/organizadores/{organizador_id}/miembros/{usuario_id}",
    "summary": "Quitar un miembro del equipo",
    "panels": [
      "organizador"
    ],
    "grupo": "Equipo",
    "auth": true
  },
  {
    "id": "get/api/organizadores/{organizador_id}/cuentas-cobro",
    "method": "GET",
    "path": "/api/organizadores/{organizador_id}/cuentas-cobro",
    "summary": "Listar cuentas de cobro del organizador",
    "panels": [
      "organizador"
    ],
    "grupo": "Cuentas de cobro",
    "auth": true
  },
  {
    "id": "post/api/organizadores/{organizador_id}/cuentas-cobro",
    "method": "POST",
    "path": "/api/organizadores/{organizador_id}/cuentas-cobro",
    "summary": "Agregar cuenta de cobro",
    "panels": [
      "organizador"
    ],
    "grupo": "Cuentas de cobro",
    "auth": true,
    "body": {
      "banco": "BBVA",
      "titular": "Carreras del Valle SA",
      "clabe": "012345678901234567",
      "es_principal": true
    }
  },
  {
    "id": "put/api/organizadores/cuentas-cobro/{cuenta_id}/verificar",
    "method": "PUT",
    "path": "/api/organizadores/cuentas-cobro/{cuenta_id}/verificar",
    "summary": "Verificar una cuenta de cobro (admin)",
    "panels": [
      "admin"
    ],
    "grupo": "Validación de organizadores",
    "auth": true
  },
  {
    "id": "delete/api/organizadores/cuentas-cobro/{cuenta_id}",
    "method": "DELETE",
    "path": "/api/organizadores/cuentas-cobro/{cuenta_id}",
    "summary": "Eliminar una cuenta de cobro",
    "panels": [
      "organizador"
    ],
    "grupo": "Cuentas de cobro",
    "auth": true
  },
  {
    "id": "get/api/reportes/me",
    "method": "GET",
    "path": "/api/reportes/me",
    "summary": "Ver mis reportes",
    "panels": [
      "usuario"
    ],
    "grupo": "Reportes",
    "auth": true
  },
  {
    "id": "get/api/reportes/{reporte_id}",
    "method": "GET",
    "path": "/api/reportes/{reporte_id}",
    "summary": "Detalle de un reporte (dueño o admin)",
    "panels": [
      "usuario",
      "admin"
    ],
    "grupo": "Reportes",
    "auth": true
  },
  {
    "id": "get/api/tickets/me",
    "method": "GET",
    "path": "/api/tickets/me",
    "summary": "Ver mis tickets",
    "panels": [
      "usuario"
    ],
    "grupo": "Tickets",
    "auth": true
  }
];
