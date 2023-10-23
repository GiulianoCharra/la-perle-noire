import desplegar from "../../scripts/desplegable.js";

desplegar.controlDespliegue();

document.getElementById("form-direccion").addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "../opciones-pago/opciones-pago.html";
});
