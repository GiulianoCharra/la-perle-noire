import desplegar from "../../scripts/desplegable.js";

desplegar.controlDespliegue();
desplegar.controlCalendario();

const mesesContainer = document.querySelector(".meses-container");
const meses = document.querySelector(".listado-meses");
const btnMesAnterior = document.getElementById("btnMesAnterior");
const btnMesSiguiente = document.getElementById("btnMesSiguiente");
let scrollPos = 0;

function retrocederMes() {
  scrollPos -= 200;
  if (scrollPos < 0) {
    scrollPos = 0;
  }
  meses.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
}

function avanzarMes() {
  scrollPos += 200;
  if (scrollPos > meses.scrollWidth - mesesContainer.offsetWidth) {
    scrollPos = meses.scrollWidth - mesesContainer.offsetWidth;
  }
  meses.scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
}

btnMesAnterior.addEventListener("click", retrocederMes);
btnMesSiguiente.addEventListener("click", avanzarMes);
