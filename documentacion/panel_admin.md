# Panel de administración

Índice general del panel admin de **curso-edemy**.

---

## Acceso

- Rol requerido: **ADMIN**
- Ruta principal: `/admin`
- Tras login, el admin es redirigido automáticamente al dashboard
- Menú lateral definido en `libs/userMenuByRole.json`

---

## Secciones del menú

| Sección | Ruta |
|---------|------|
| Dashboard | `/admin` |
| Instructores | `/admin/instructors` |
| Cursos | `/admin/courses` |
| Categorías | `/admin/categories` |
| Módulos | `/admin/modules` |
| Estudiantes | `/admin/students` |
| Banners | `/admin/banners` |

---

## 1. Dashboard

**Ruta:** `/admin`

Muestra totales en tarjetas:

- **Total Cursos** — cursos con estado `Approved`
- **Total Estudiantes** — usuarios con rol `USER`
- **Cursos Inscritos** — matrículas con estado `PAID` o `FREE`
- **Total Instructores** — usuarios con rol `INSTRUCTOR`

Puntos clave:

- Los datos se cargan al abrir la página (recargar para ver cambios)
- Solo usuarios autenticados con permisos de admin
- Archivos: `src/app/admin/page.jsx`, `src/actions/getAdminStats.js`

---

## 2. Instructores

**Ruta admin:** `/admin/instructors`

Gestión de usuarios con rol `INSTRUCTOR`: listado paginado, registro desde modal, activar, desactivar y eliminar (soft delete).

Para el proceso completo — formulario, tabla, APIs y estados — consulta:

**→ [panel_admin_instructor.md](./panel_admin_instructor.md)**

---

## 3. Categorías

**Ruta admin:** `/admin/categories`

Gestión de categorías de cursos: crear, editar, subir logo y eliminar (soft delete). Las categorías activas aparecen en la home y en los filtros de cursos.

**→ [panel_admin_categorias.md](./panel_admin_categorias.md)**

---

## 4. Módulos

**Ruta admin:** `/admin/modules`

CRUD de módulos: título, descripción, estado activo/inactivo. No incluye la pantalla *Asignar curso*.

**→ [panel_admin_modulo.md](./panel_admin_modulo.md)**

---

## 5. Estudiantes

**Ruta admin:** `/admin/students`

Gestión de usuarios con rol `USER`: listado paginado, registro desde modal, activar, desactivar y eliminar (soft delete). No incluye *Asignar módulo*.

**→ [panel_admin_estudiantes.md](./panel_admin_estudiantes.md)**

---

## 6. Banners

**Ruta admin:** `/admin/banners`  
**Dónde se ven:** carrusel superior de la home (`/`)

Los banners son imágenes o videos promocionales que el administrador gestiona desde el panel. Solo los **activos** y **vigentes** (si tienen fechas) aparecen en la página de inicio.

Para el proceso completo — crear, editar, requisitos de imagen, ordenar, APIs y comportamiento en la home — consulta:

**→ [panel_admin_banners.md](./panel_admin_banners.md)**

---

## Credenciales de prueba

Tras `npm run db:seed`:

- Email: `admin@gmail.com`
- Contraseña: ver `prisma/seed.js`

---

## Documentación relacionada

- [Instalación y ejecución local](./install.md)
- [Instructores — guía detallada](./panel_admin_instructor.md)
- [Categorías — guía detallada](./panel_admin_categorias.md)
- [Módulos — guía detallada](./panel_admin_modulo.md)
- [Estudiantes — guía detallada](./panel_admin_estudiantes.md)
- [Banners — guía detallada](./panel_admin_banners.md)
- [Subida de archivos — guía general](./upload_archivos.md)
- [Panel instructor — índice](./panel_instructor.md)
- [Panel instructor — crear/editar curso](./panel_instructor_curso.md)
- [Panel instructor — lecciones, tareas y documentos](./panel_instructor_lecciones.md)
