# IVOOST Landing Page

Landing page premium construida con React, TypeScript, Tailwind CSS y Framer Motion para convertir visitas en consultas y ventas.

## Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Scripts

- `npm run dev` - desarrollo local
- `npm run build` - compilación de producción
- `npm run preview` - vista previa de la build

## Deploy

El sitio se publica automáticamente en GitHub Pages vía GitHub Actions
(`.github/workflows/deploy.yml`) cada vez que se pushea a `main`.

```bash
git add -A
git commit -m "mensaje del cambio"
git push
```

Eso dispara el workflow, que corre `npm run build` y publica el contenido
de `dist/`. Se puede seguir el progreso con:

```bash
gh run watch --repo ivo-bisc/ivoost.ar
```

Sitio publicado en: https://ivo-bisc.github.io/ivoost.ar/

## Estructura

- Hero con CTA principal y secundario
- Beneficios de una landing page
- Problemas que resuelve
- Portfolio visual
- Proceso de trabajo
- Testimonios
- FAQ
- CTA final con formulario que abre WhatsApp
- Footer con contacto

## Ajustes pendientes recomendados

- Reemplazar el número de WhatsApp placeholder por el real
- Cambiar los testimonios ficticios por testimonios reales cuando estén disponibles
- Sustituir los ejemplos del portfolio por proyectos reales
- Ajustar dominio y enlaces sociales definitivos antes de publicar
