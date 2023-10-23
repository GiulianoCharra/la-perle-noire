import desplegar from "../../scripts/desplegable.js";

desplegar.controlDespliegue();

// Obtener elementos HTML y sus valores iniciales
const numeroTarjeta = document.querySelector(".tarjeta__numero");
const nombreTitular = document.querySelector(".tarjeta__nombre");
const fechaVencimiento = document.querySelector(".tarjeta__fecha-vencimiento");
// const cvv = document.querySelector("tarjeta-cvv");

const inputNumero = document.getElementById("tarjeta-numero");
const inputNombre = document.getElementById("tarjeta-nombre");
const inputFecha = document.getElementById("tarjeta-fecha-vencimiento");
const inputCVV = document.getElementById("tarjeta-cvv");

inputNumero.addEventListener("input", () => {
  let numeroLimpio = inputNumero.value.replace(/[^0-9]/g, "");
  let numeroFormateado = "";
  if (numeroLimpio.length > 16) {
    numeroLimpio = numeroLimpio.slice(0, 16);
  }
  for (let i = 0; i < numeroLimpio.length; i++) {
    if (i > 0 && i % 4 === 0) {
      numeroFormateado += "-";
    }
    numeroFormateado += numeroLimpio[i];
  }
  inputNumero.value = numeroFormateado;
  numeroTarjeta.textContent = numeroFormateado;
});

inputNombre.addEventListener("input", () => {
  nombreTitular.textContent = inputNombre.value.toUpperCase(); // Puedes aplicar estilos específicos, como convertir a mayúsculas.
});

inputFecha.addEventListener("input", () => {
  let fechaLimpia = inputFecha.value.replace(/\D/g, "");
  if (fechaLimpia.length > 4) {
    fechaLimpia = fechaLimpia.slice(0, 4);
  }
  if (fechaLimpia.length >= 2) {
    fechaLimpia = fechaLimpia.slice(0, 2) + "/" + fechaLimpia.slice(2);
  }
  inputFecha.value = fechaLimpia;
  fechaVencimiento.textContent = fechaLimpia;
});

inputCVV.addEventListener("input", () => {
  let cvvLimpio = inputCVV.value.replace(/\D/g, "");
  if (cvvLimpio.length > 4) {
    cvvLimpio = cvvLimpio.slice(0, 4);
  }
  inputCVV.value = cvvLimpio;
  //   cvv.textContent = inputCVV.value;
});
