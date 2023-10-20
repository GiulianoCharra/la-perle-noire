import pedido from "../../scripts/pedido.js";

function mostrarCalendario(event) {
  let diaSeleccionado = event.target;
  if (!diaSeleccionado.classList.contains("celda-dia")) {
    diaSeleccionado = diaSeleccionado.closest(".celda-dia");
  }
  if (!diaSeleccionado) {
    return;
  }
  if (diaSeleccionado.classList.contains("dia-seleccionado")) {
    diaSeleccionado.classList.remove("dia-seleccionado");
    return;
  }
  const celdas = Array.from(document.getElementsByClassName("celda-dia dia-seleccionado"));
  celdas.forEach((celda) => {
    celda.classList.remove("dia-seleccionado");
  });
  diaSeleccionado.classList.add("dia-seleccionado");
}

let platosCargados = false;

document.getElementById("calendario").addEventListener("click", mostrarCalendario);

document.getElementById("reserva-agregarPLatos").addEventListener("click", () => {
  const reservaPedido = document.querySelector(".reserva-pedido");
  reservaPedido.classList.toggle("show");
  if (platosCargados) {
    return;
  }

  if (pedido.platos.length === 0) {
    mostrarMensajeSinPlatos(reservaPedido);
    return;
  }
  platosCargados = true;
  pedido.generarPlatos();
});

document.querySelector(".desplegable-hora").addEventListener("click", (e) => {
  const tiempo = e.target;

  const esHora = tiempo.classList.contains("hora");
  const esMinuto = tiempo.classList.contains("minuto");

  if (!esHora && !esMinuto) {
    return;
  }

  const tiempoSeleccionado = esHora
    ? document.querySelector(".hora.seleccionado")
    : document.querySelector(".minuto.seleccionado");

  if (tiempoSeleccionado) {
    tiempoSeleccionado.classList.toggle("seleccionado");
  }

  tiempo.classList.toggle("seleccionado");
});

function mostrarMensajeSinPlatos(div) {
  div.innerHTML = `<p class="descripcion">
      No hay platos agregados, si quieres agregar platos a tu pedido, ve a la sección de menus y selecciona los platos que desees.
    </p>`;
}

// funcion que muestra los datos de un formulario
function mostrarDatosFormulario(formulario) {
  formulario.reservaFecha = buscarDiaSeleccionado();
  formulario.reservaHora = buscarHoraSeleccionado();
  formulario.reservaMinuto = buscarMinutoSeleccionado();
  formulario.reservaTipo = buscarOpcionSeleccionada();

  const datos = new FormData(formulario);
  for (const dato of datos) {
    console.log(dato);
  }
}

function buscarOpcionSeleccionada() {
  const opcionesTipo = document.querySelectorAll('.input[name="tipo-reserva"]');

  let opcionSeleccionada = "";
  opcionesTipo.forEach((opcion) => {
    if (opcion.checked) {
      opcionSeleccionada = opcion.value;
      return opcionSeleccionada;
    }
  });
}

function buscarDiaSeleccionado() {
  const diaSeleccionado = document.querySelector(".dia-seleccionado");
  if (!diaSeleccionado) {
    return;
  }
  const fecha = diaSeleccionado.dataset.numeroDia;
  if (!fecha) {
    return;
  }
  return diaSeleccionado;
}
function buscarHoraSeleccionado() {
  const horaSeleccionado = document.querySelector(".hora.seleccionado");
  if (!horaSeleccionado) {
    return;
  }
  return horaSeleccionado;
}

function buscarMinutoSeleccionado() {
  const minutoSeleccionado = document.querySelector(".minuto.seleccionado");
  if (!minutoSeleccionado) {
    return;
  }

  return minutoSeleccionado;
}

document.getElementById("form-reserva").addEventListener("submit", (e) => {
  e.preventDefault();
  mostrarDatosFormulario(e.target);
});
