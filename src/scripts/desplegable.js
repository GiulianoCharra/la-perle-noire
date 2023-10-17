export function desplegable() {
  document.addEventListener("click", (e) => {
    let desplegable_actual = e.target;
    if (!desplegable_actual.classList.contains("desplegable_select")) {
      desplegable_actual = desplegable_actual.closest(".desplegable_select");
    }
    if (!desplegable_actual) {
      return;
    }
    desplegable_actual.classList.toggle("mostrar-opciones");

    let desplegables = Array.from(document.getElementsByClassName("desplegable_select"));
    // let demasDesplegables = desplegables.filter((despl) => despl !== desplegable_actual);
    let posicion = desplegables.indexOf(desplegable_actual);

    if (posicion !== -1) {
      desplegables.splice(posicion, 1);
    }

    desplegables.forEach((desplegable) => {
      desplegable.classList.remove("mostrar-opciones");
    });
  });
}
