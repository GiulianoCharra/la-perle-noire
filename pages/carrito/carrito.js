import pedido from "../../scripts/pedido.js";

pedido.generarPlatos("carrito-pedido");

document.getElementById("btn-direccion").addEventListener("click", () => {
  window.location.href = "../direccion/direccion.html";
});
