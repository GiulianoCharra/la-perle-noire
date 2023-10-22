export function controlDespliegue() {
  document.addEventListener("click", (e) => {
    let desplegableActual = e.target;

    const desplegableActivo = document.querySelector(".desplegable-select.mostrar-opciones");
    const esDesplegable = desplegableActual.closest(".form-input-select");
    if (
      desplegableActivo &&
      !desplegableActivo.contains(e.target) &&
      !(desplegableActivo == e.target) &&
      !esDesplegable
    ) {
      desplegableActivo.classList.remove("mostrar-opciones");
      return;
    }

    if (!desplegableActual.classList.contains("desplegable-select")) {
      desplegableActual = desplegableActual.closest(".desplegable-select");
    }

    if (!desplegableActual) {
      return;
    }

    if (desplegableActual.classList.contains("mostrar-opciones")) {
      desplegableActual.classList.remove("mostrar-opciones");
      return;
    }

    let desplegables = Array.from(
      document.getElementsByClassName("desplegable-select mostrar-opciones")
    );
    // let demasDesplegables = desplegables.filter((despl) => despl !== desplegable_actual);
    // let posicion = desplegables.indexOf(desplegable_actual);

    // if (posicion !== -1) {
    //   desplegables.splice(posicion, 1);
    // }

    desplegables.forEach((desplegable) => {
      desplegable.classList.remove("mostrar-opciones");
    });

    desplegableActual.classList.add("mostrar-opciones");
  });
}

export function controlCalendario() {
  document.getElementById("calendario").addEventListener("click", (e) => {
    let diaSeleccionado = e.target;
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
    const diaSeleccionadoAnteior = document.querySelector(".celda-dia.dia-seleccionado");
    if (diaSeleccionadoAnteior) {
      diaSeleccionadoAnteior.classList.remove("dia-seleccionado");
    }
    //const celdas = Array.from(document.getElementsByClassName("celda-dia dia-seleccionado"));
    // celdas.forEach((celda) => {
    //   celda.classList.remove("dia-seleccionado");
    // });
    diaSeleccionado.classList.add("dia-seleccionado");
  });
}

export default {
  controlDespliegue,
  controlCalendario,
};
