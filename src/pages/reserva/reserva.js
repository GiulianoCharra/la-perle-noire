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

document.getElementById("calendario").addEventListener("click", mostrarCalendario);
