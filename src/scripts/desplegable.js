export default function desplegable() {
  document.addEventListener("click", controlDespliegue);
  // document.addEventListener("touchstart", controlDespliegue);
}

function controlDespliegue(e) {
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
}
