# Styloschool (Next.js)

Migración del sitio estático [styloschool](../styloschool) a Next.js 16 con App Router y Tailwind CSS 4.

## Requisitos

- Node.js 20+
- Imágenes del proyecto original en `public/img/` (copiadas desde `styloschool/img`)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Rutas

| Original | Next.js |
|----------|---------|
| `/index.html` | `/` |
| `/pages/colegios` | `/colegios` |
| `/pages/colegio-las-condes` | `/colegios/colegio-las-condes` |
| `/pages/no-disponible` | `/no-disponible` |

Las URLs antiguas redirigen automáticamente (`next.config.ts`).

## Formulario de contacto

`POST /api/contact` valida los campos y registra el mensaje en consola. Para producción, conecta un proveedor de correo (Resend, SendGrid, etc.) en `app/api/contact/route.ts`.

## Build

```bash
npm run build
npm start
```
