# Catálogo de videojuegos

Aplicación Angular que muestra los videojuegos en una tabla responsive con imágenes, géneros, plataformas y años de lanzamiento. No requiere registro.

## Enrutamiento

La aplicación utiliza **Hash Location Strategy** mediante `provideRouter(routes, withHashLocation())`. El catálogo está en `/#/juegos`.

## Despliegue

El workflow de GitHub Actions construye la aplicación y la publica en GitHub Pages al actualizar la rama `master`.
El proyecto utiliza Angular 22, por lo que el pipeline se ejecuta con Node.js 24 (Angular 22 requiere Node.js 22.22.3 o superior).

**Aplicación:** https://sebastian-henao.github.io/Laboratorio-Hash-Location/

Para compilar localmente:

```bash
npm ci
npm run build -- --base-href /Laboratorio-Hash-Location/
```
