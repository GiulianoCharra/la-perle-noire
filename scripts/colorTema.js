// Nombre del item en el localStorage
const nombreItemTema = "la-perle-noire-tema";

// Recuperar la preferencia de tema del localStorage, si está disponible
const temaGuardado = localStorage.getItem(nombreItemTema);

// Si la preferencia de tema está guardada, lo establece, sino establece el tema por defecto
if (temaGuardado) {
  cambiarTema(temaGuardado);
} else {
  cambiarTema("oscuro");
}

// Función para establecer el tema
function cambiarTema(tema) {
  localStorage.setItem(nombreItemTema, tema);
  if (tema === "claro") {
    document.documentElement.setAttribute("data-tema", "claro");
    return;
  }
  document.documentElement.setAttribute("data-tema", "oscuro");
}

// Escucha el evento del botón para cambiar el tema
const btnTemaOscuro = document.getElementById("btnTemaOscuro");
const btnTemaClaro = document.getElementById("btnTemaClaro");

btnTemaOscuro.addEventListener("click", function () {
  cambiarTema("oscuro");
});

btnTemaClaro.addEventListener("click", function () {
  cambiarTema("claro");
});
