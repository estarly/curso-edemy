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

## 2. Banners

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
- [Banners — guía detallada](./panel_admin_banners.md)
