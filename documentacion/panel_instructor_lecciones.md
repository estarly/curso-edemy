# Panel instructor — Lecciones, tareas y documentos

Guía para gestionar el contenido de un curso: lecciones (assets), preguntas de evaluación y archivos descargables.

Volver al índice: [panel_instructor.md](./panel_instructor.md)

---

## Resumen

| Concepto | Detalle |
|----------|---------|
| **Ruta** | `/instructor/course/[courseId]/lessons` |
| **Quién puede gestionar** | Instructor dueño del curso (o `ADMIN`) |
| **Componente principal** | `ContentPage.jsx` + `CourseLessons.jsx` |
| **Qué incluye** | Formulario de lección, listado de assets, tareas y adjuntos |

Cada **lección** es un registro en la tabla `Asset`. Por lección se puede:

1. Definir el contenido principal (video, audio, documento, link, YouTube).
2. Asignar **tareas** (preguntas de evaluación).
3. Subir **documentos descargables** adicionales (PDF, DOC, etc.).

---

## Modelo de datos

### Asset (lección)

| Campo | Descripción |
|-------|-------------|
| `courseId` | Curso al que pertenece |
| `assetTypeId` | Tipo de contenido (ver tabla abajo) |
| `title` | Título de la lección |
| `description` | Descripción opcional (HTML) |
| `config_asset` | JSON con URL y metadatos según tipo |
| `file_url` / `video_url` | URLs legacy (algunos flujos) |

### Tipos de asset (`assetTypeId`)

| ID | Tipo | `config_asset` |
|----|------|----------------|
| 1 | Video | `{ val: url, type: "video" }` |
| 2 | Audio | `{ val: url, type: "audio" }` |
| 3 | Documento | `{ val: url, type: "document" }` |
| 4 | Link externo | `{ val: url }` |
| 5 | YouTube | `{ val: url }` |
| 6 | Sesión online | `{ val, platform, meeting_id, password, credits }` |

### Assignment (tarea / pregunta)

| Campo | Descripción |
|-------|-------------|
| `assetId` | Lección asociada |
| `assignmentTypeId` | Tipo de pregunta |
| `title` | Texto de la pregunta |
| `description` | Descripción opcional |
| `config_assignment` | JSON con opciones y respuestas correctas |

### Tipos de pregunta (`assignmentTypeId`)

| ID | Tipo | `config_assignment` |
|----|------|------------------------|
| 1 | Verdadero o Falso | `{ options: ["Verdadero","Falso"], correct_options: [...] }` |
| 2 | Selección simple | `{ options: [...], correct_options: [una] }` |
| 3 | Selección múltiple | `{ options: [...], correct_options: [varias] }` |
| 4 | Completar | `{ correct_answer: "..." }` |

### FilesAsset (documentos descargables)

| Campo | Descripción |
|-------|-------------|
| `assetId` | Lección asociada |
| `url` | URL del archivo en Spaces |

Tabla independiente del documento principal de la lección. Un mismo asset puede tener **varios** archivos adjuntos.

---

## Sección: Crear / editar lección

### Componentes

| Elemento | Archivo |
|----------|---------|
| Formulario | `src/components/Instructor/CourseLessons.jsx` |
| Selector de tipo | `src/components/FormHelpers/AssetSelect.jsx` |
| Subida de medios | `src/components/Instructor/MediaUpload.jsx` |
| Tarjeta en listado | `src/app/instructor/course/[courseId]/lessons/_components/AssetItem.jsx` |

### Layout del formulario (desktop)

| Fila | Contenido |
|------|-----------|
| 1 | Título (50%) + Descripción (50%) |
| 2 | Tipo de asset (ancho completo) |
| 3+ | Campos según tipo (upload, URL, etc.) |
| Pie | Botón verde **Guardar / Actualizar** alineado a la derecha |

### Subida de video y audio

| Tipo | Formato | Validación cliente |
|------|---------|-------------------|
| Video | Solo **MP4** | Máximo **5 minutos** de duración |
| Audio | `audio/*` | Sin límite de duración en código |
| Documento | `.pdf`, `.doc`, `.docx`, `.txt`, `.rtf` | Sin límite explícito en MB |

Flujo de subida:

1. `MediaUpload` valida el archivo en el navegador.
2. `CourseLessons` arma `FormData` con `file`, `title`, `description`, `assetTypeId`.
3. Hook `useFileUpload` envía con barra de progreso (`axios` + `onUploadProgress`).
4. API `POST/PUT /api/courses/[courseId]/lessons` procesa con `processFormDataWithFile`.
5. `fileUploadService` sube a Spaces:
   - Videos → `upload_course/videos/`
   - Audios → `upload_course/audios/`
   - Documentos → `upload_course/documents/`
6. La URL se guarda en `config_asset`.

Ver detalle de almacenamiento en [upload_archivos.md](./upload_archivos.md).

### API lecciones

| Acción | Método | Ruta |
|--------|--------|------|
| Crear lección | `POST` | `/api/courses/[courseId]/lessons` |
| Editar lección | `PUT` | `/api/courses/[courseId]/lessons/[lessonId]` |
| Listar lecciones | `GET` | `/api/courses/[courseId]/lessons` |
| Eliminar lección | `DELETE` | `/api/courses/[courseId]/lessons/[lessonId]` |

---

## Sección: Asignar tarea (preguntas)

### Componente

`AssignmentComponent.jsx` — modal con icono de tarea (`bx-task`) en cada tarjeta de lección.

### Pestañas del modal

| Pestaña | Función |
|---------|---------|
| Asignar nueva tarea | Formulario para crear preguntas |
| Tareas asignadas | Listado con opción de eliminar |

### Layout del formulario de pregunta

| Fila | Contenido |
|------|-----------|
| 1 | Tipo de pregunta (33%) + Pregunta (67%) |
| 2 | Descripción opcional |
| 3 | Opciones en grid 2×2 (selección simple / múltiple) |
| — | Icono **+** junto al título "Opciones" para agregar más (máx. 6, mín. 3) |

### Reglas por tipo

| Tipo | Respuestas correctas | Validación |
|------|---------------------|------------|
| Verdadero o Falso | Una (select) | Pregunta + respuesta |
| Selección simple | Una (radio) | Mín. 3 opciones completas |
| Selección múltiple | Varias (checkbox) | Mín. 3 opciones, mín. 2 correctas |
| Completar | Texto libre | Solo pregunta obligatoria |

En modo edición de lección, el **tipo de asset no se puede cambiar**; en tareas ya creadas, el **tipo de pregunta tampoco** se modifica al editar (solo al crear).

### API tareas

| Acción | Método | Ruta |
|--------|--------|------|
| Listar preguntas | `GET` | `/api/assignments/all/[assetId]` |
| Guardar pregunta | `POST` | `/api/assignments/save/[assetId]` |
| Eliminar pregunta | `DELETE` | `/api/assignments/delete/[id]` |

Lógica de guardado en `src/app/instructor/actions.js` → función `saveAssignment`.

### Vista del estudiante

En `CourseAsset.jsx` (pestaña **Asignaciones**):

| Tipo | UI estudiante |
|------|---------------|
| V/F y selección simple | Radio buttons (guardado al seleccionar) |
| Selección múltiple | Checkboxes + botón **Enviar respuesta** |
| Completar | Textarea + botón **Enviar respuesta** |

Respuestas guardadas vía `POST /api/stateCourse/registerResponseAssignment`.

---

## Sección: Documentos descargables

### Componente

`FileAssetButton.jsx` — icono de archivo (`bx-file`) en cada tarjeta de lección.

### Pestañas del modal

| Pestaña | Función |
|---------|---------|
| Subir archivo | Selector + botón **Subir archivo** |
| Archivos existentes | Listado con descargar y eliminar |

### Tipos de archivo aceptados

Usa `MediaUpload` con `assetType={3}` (documento):

- `.pdf`, `.doc`, `.docx`, `.txt`, `.rtf`

### Almacenamiento

Ruta en Spaces:

```
upload_course/course/{courseId}/asset/{lessonId}/{nombre}-{timestamp}
```

A diferencia del documento **principal** de la lección (que define el contenido del asset), estos archivos son **adjuntos extra** visibles para el estudiante en la pestaña **Descargables** de la lección.

### API documentos

| Acción | Método | Ruta |
|--------|--------|------|
| Listar adjuntos | `GET` | `/api/courses/[courseId]/lessons/[lessonId]/files-asset` |
| Subir adjunto | `POST` | `/api/courses/[courseId]/lessons/[lessonId]/files-asset` |
| Eliminar adjunto | `DELETE` | `/api/courses/[courseId]/lessons/[lessonId]/files-asset/[filesAssetId]` |

---

## Flujo completo

```mermaid
flowchart TD
    A[/instructor/course/id/lessons] --> B[CourseLessons - crear/editar asset]
    B --> C{¿Tipo?}
    C -->|Video/Audio/Doc| D[MediaUpload + FormData]
    C -->|Link/YouTube| E[URL en JSON]
    D --> F[POST/PUT /api/courses/id/lessons]
    F --> G[(Tabla Asset)]
    G --> H[AssetItem en listado]
    H --> I[AssignmentComponent - tareas]
    H --> J[FileAssetButton - adjuntos]
    I --> K[POST /api/assignments/save]
    K --> L[(Tabla Assignment)]
    J --> M[POST files-asset]
    M --> N[(Tabla FilesAsset)]
    L --> O[Estudiante responde en CourseAsset]
    N --> P[Estudiante descarga en pestaña Descargables]
```

---

## Acciones por tarjeta de lección

Cada `AssetItem` muestra botones:

| Botón | Icono | Función |
|-------|-------|---------|
| Editar | `bx-pencil` | Carga el asset en el formulario superior |
| Tarea | `bx-task` | Modal de preguntas (`AssignmentComponent`) |
| Archivos | `bx-file` | Modal de adjuntos (`FileAssetButton`) |
| Eliminar | — | Borra la lección (`DeleteButton`) |

---

## Archivos clave

```
src/
├── app/instructor/course/[courseId]/lessons/
│   ├── page.jsx
│   └── _components/
│       ├── ContentPage.jsx
│       ├── AssetItem.jsx
│       ├── AssignmentComponent.jsx
│       └── FileAssetButton.jsx
├── components/Instructor/
│   ├── CourseLessons.jsx
│   └── MediaUpload.jsx
├── app/instructor/actions.js          # saveAssignment, getAssignmentTypes
└── app/api/
    ├── courses/[courseId]/lessons/
    └── assignments/
```
