# Laboratorio Hash Location

Aplicación Angular organizada por módulos de funcionalidad. Incluye la tabla de videojuegos y el módulo de personajes de Marvel Rivals. No requiere registro.

## Enrutamiento

La aplicación utiliza Hash Location Strategy (`useHash: true`) en el enrutador principal. Cada funcionalidad se carga desde su propio módulo:

- `/#/juegos`: catálogo tabular de videojuegos.
- `/#/marvel-rivals/list-marvel-rivals`: personajes de Marvel Rivals.

## Despliegue

El workflow de GitHub Actions construye la aplicación y la publica en GitHub Pages al actualizar la rama `master`.
El proyecto utiliza Angular 20 y Node.js 24 en el pipeline.

**Aplicación:** https://sebastian-henao.github.io/Laboratorio-Hash-Location/

Para compilar localmente:

```bash
npm ci
npm run build -- --base-href /Laboratorio-Hash-Location/
```
