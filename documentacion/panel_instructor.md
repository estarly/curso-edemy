# Panel del instructor

Índice general del panel instructor de **curso-edemy**.

---

## Acceso

| Concepto | Detalle |
|----------|---------|
| **Rol requerido** | `INSTRUCTOR` |
| **Ruta principal** | `/instructor/courses` |
| **Menú** | Definido en `libs/userMenuByRole.json` |

Tras login, el instructor accede a sus cursos, puede crear nuevos y gestionar lecciones de cada uno.

---

## Secciones principales

| Sección | Ruta |
|---------|------|
| Mis cursos | `/instructor/courses` |
| Crear curso | `/instructor/course/create` |
| Editar curso | `/instructor/course/[courseId]/edit` |
| Lecciones | `/instructor/course/[courseId]/lessons` |
| Revisar tareas (estudiantes) | `/instructor/assignments` |

La navegación secundaria dentro de un curso (`Header.jsx`) muestra: **Cursos → Crear un curso → Editando → Lecciones**.

---

## 1. Crear y editar curso

Flujo completo para registrar un curso, editarlo y esperar la aprobación del administrador antes de que sea visible al público.

**→ [panel_instructor_curso.md](./panel_instructor_curso.md)**

Incluye:

- Formulario de creación (`CourseCreateForm`)
- Formulario de edición (`EditCourseForm`)
- Estados del curso: `Pending`, `Approved`, `Deleted`
- Aprobación desde el panel admin

---

## 2. Lecciones, tareas y documentos

Gestión del contenido de cada curso: assets (video, audio, documento, links), preguntas de evaluación y archivos descargables por lección.

**→ [panel_instructor_lecciones.md](./panel_instructor_lecciones.md)**

Incluye:

- Crear y editar lecciones (`CourseLessons`)
- Subida de medios (`MediaUpload`)
- Asignar tareas / preguntas (`AssignmentComponent`)
- Archivos adjuntos por lección (`FileAssetButton`)

---

## 3. Revisión de respuestas

**Ruta:** `/instructor/assignments`

Permite al instructor seleccionar curso → lección → asignación y ver las respuestas de los estudiantes.

Archivos: `src/app/instructor/assignments/_components/*`

---

## Documentación relacionada

- [Instalación y ejecución local](./install.md)
- [Panel admin — índice](./panel_admin.md)
- [Subida de archivos — guía general](./upload_archivos.md)
