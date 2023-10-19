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
        reserva: "./src/pages/reserva/reserva.html",
        menu: "./src/pages/menu/menu.html",
        pedido: "./src/pages/pedido/pedido.html",
        pago: "./src/pages/pago/pago.html",
        eventos: "./src/pages/eventos/eventos.html",
      },
    },
  },
});
