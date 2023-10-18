export default function desplegable() {
  document.addEventListener("click", (e) => {
    let desplegableActual = e.target;
    if (!desplegableActual.classList.contains("desplegable_select")) {
      desplegableActual = desplegableActual.closest(".desplegable_select");
    }
    if (!desplegableActual) {
      return;
    }

    if (desplegableActual.classList.contains("mostrar-opciones")) {
      desplegableActual.classList.remove("mostrar-opciones");
      return;
    }

    let desplegables = Array.from(
      document.getElementsByClassName("desplegable_select mostrar-opciones")
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
