import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    lightningcss({
      browserslist: ">= 0.25%",
    }),
  ],
  base: "/codecats-academy/",
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    cssMinify: "lightningcss",
    rollupOptions: {
      input: {
        main: "./src/index.html",
        // cursos: "./src/pages/cursos.html",
        // curso: "./src/pages/curso.html",
        // pago: "./src/pages/pago.html",
        // perfil: "./src/pages/perfil.html",
        // contacto: "./src/pages/contacto.html",
        // cursos_css: "./src/css/cursos.css",
        // curso_css: "./src/css/curso.css",
        // pago_css: "./src/css/pago.css",
        // perfil_css: "./src/css/perfil.css",
        // contacto_css: "./src/css/contacto.css",
        // buscador: "./src/js/buscador.js",
        // carrusel: "./src/js/carrusel.js",
        // desplegable: "./src/js/desplegable.js",
      },
    },
  },
});
