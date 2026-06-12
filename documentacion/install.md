# Instalación y ejecución local

Guía paso a paso para levantar **curso-edemy** (Edemy) en tu máquina.

---

## Qué necesitas

| Requisito | Versión recomendada |
|-----------|---------------------|
| **Node.js** | 18 o superior |
| **npm** | Incluido con Node.js |
| **MySQL** | 8.x (corriendo en local) |

Verifica que los tienes instalados:

```bash
node -v
npm -v
mysql --version
```

---

## 1. Entrar al proyecto

```bash
cd curso-edemy
```

Si acabas de clonar el repositorio, este es el primer paso después del `git clone`.

---

## 2. Instalar dependencias

```bash
npm install
```

Esto descarga todas las librerías del proyecto (Next.js, Prisma, NextAuth, etc.).

---

## 3. Crear la base de datos MySQL

Abre MySQL y crea una base de datos vacía:

```sql
CREATE DATABASE curso CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Por defecto el proyecto espera:

- **Host:** `localhost`
- **Puerto:** `3306`
- **Usuario:** `root` (sin contraseña)
- **Base de datos:** `curso`

Si tu MySQL usa otro usuario o contraseña, ajústalo en el siguiente paso.

---

## 4. Configurar variables de entorno

Copia el archivo de ejemplo y edítalo con tus valores:

```bash
cp env.example .env
```

Variables **obligatorias** para desarrollo local:

```env
DATABASE_URL="mysql://root@localhost:3306/curso"
NEXTAUTH_SECRET="genera-un-secreto-aleatorio-largo"
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Variables **opcionales** (algunas funciones las necesitan):

| Variable | Para qué sirve |
|----------|----------------|
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Inicio de sesión con Google |
| `DO_SPACES_*` | Subir imágenes y archivos a DigitalOcean Spaces |
| `STRIPE_*` | Pagos con Stripe |

> **Importante:** Nunca subas el archivo `.env` al repositorio. Usa `env.example` como referencia.

Para generar un `NEXTAUTH_SECRET` seguro:

```bash
openssl rand -base64 32
```

---

## 5. Preparar la base de datos

Ejecuta las migraciones y carga los datos iniciales:

```bash
npm run db:setup
```

Este comando hace dos cosas:

1. **`prisma migrate dev`** — crea las tablas según el esquema.
2. **`prisma db seed`** — inserta usuarios, categorías y datos de prueba.

Si solo quieres ejecutar cada paso por separado:

```bash
npm run db:migrate   # solo tablas
npm run db:seed      # solo datos iniciales
```

---

## 6. Arrancar el servidor de desarrollo

```bash
npm run dev
```

Abre el navegador en: **http://localhost:3000**

El servidor recarga automáticamente cuando editas archivos en `src/`.

---

## 7. Comprobar que todo funciona

- La página principal carga sin errores.
- Puedes ir a `/auth/login` e iniciar sesión.
- El seed crea usuarios de prueba (`admin@gmail.com`, `instructor@gmail.com`). Si no conoces la contraseña, regístrate con un usuario nuevo en `/auth/register`.

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (puerto 3000) |
| `npm run build` | Compila la app para producción |
| `npm run start` | Ejecuta la versión compilada |
| `npm run lint` | Revisa el código con ESLint |
| `npm run db:push` | Sincroniza el esquema sin migración (útil en prototipos) |
| `npm run db:migrate` | Aplica migraciones de Prisma |
| `npm run db:seed` | Inserta datos iniciales |
| `npm run db:setup` | Migración + seed en un solo paso |

---

## Producción (resumen)

```bash
npm run build
npm run start
```

Por defecto corre en el puerto **3000**. Para otros puertos:

```bash
npm run start:dev   # puerto 3020
npm run start:prod  # puerto 3030
```

Si cambias el puerto, actualiza también `NEXTAUTH_URL` y `NEXT_PUBLIC_APP_URL` en tu `.env`.

---

## Problemas frecuentes

### Error de conexión a MySQL

- Verifica que MySQL esté corriendo.
- Revisa que `DATABASE_URL` en `.env` coincida con tu usuario, contraseña y nombre de base de datos.
- Confirma que la base de datos `curso` exista.

### `prisma migrate` falla

```bash
npx prisma generate
npm run db:migrate
```

### Puerto 3000 ocupado

```bash
PORT=3001 npm run dev
```

Recuerda cambiar `NEXTAUTH_URL` y `NEXT_PUBLIC_APP_URL` al mismo puerto.

### Login con Google no funciona

Necesitas credenciales OAuth en [Google Cloud Console](https://console.cloud.google.com/) y configurar `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` en `.env`. La URL de callback debe ser:

```
http://localhost:3000/api/auth/callback/google
```

---

## Estructura relevante

```
curso-edemy/
├── src/              # Código de la aplicación (Next.js App Router)
├── prisma/           # Esquema, migraciones y seed
├── public/           # Archivos estáticos
├── env.example       # Plantilla de variables de entorno
├── package.json      # Dependencias y scripts
└── documentacion/    # Esta documentación
```

---

¿Algo no funciona? Revisa primero el `.env` y que MySQL esté activo. La mayoría de problemas en local vienen de ahí.
