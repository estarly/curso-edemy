# Usuarios de prueba (seed)

Estos usuarios se crean automáticamente al ejecutar el seed (`prisma/seed.js`).
La contraseña es la misma para todos: **`123456`**.

| Rol         | Email                | Contraseña | Rol en BD (`Role`) |
| ----------- | -------------------- | ---------- | ------------------ |
| Admin       | `admin@gmail.com`    | `123456`   | `ADMIN`            |
| Teacher     | `teacher@gmail.com`  | `123456`   | `INSTRUCTOR`       |
| Student     | `student@gmail.com`  | `123456`   | `USER`             |

> Nota: en el `schema.prisma` los roles disponibles son `USER`, `INSTRUCTOR` y `ADMIN`.
> Por eso "teacher" se mapea a `INSTRUCTOR` y "student" a `USER`.

## Cómo reiniciar la base de datos desde 0 (migrate refresh + seed)

Prisma no tiene un comando `migrate:refresh` como Laravel; el equivalente es
`prisma migrate reset`, que **borra la base de datos**, vuelve a aplicar todas
las migraciones y ejecuta el seed automáticamente.

```bash
npx prisma migrate reset
```

Ese único comando hace todo:
1. Elimina y recrea la base de datos.
2. Aplica todas las migraciones de `prisma/migrations/`.
3. Ejecuta el seed (`prisma/seed.js`).

Si solo quieres volver a ejecutar el seed (sin borrar/recrear):

```bash
npm run db:seed
# o
npx prisma db seed
```
