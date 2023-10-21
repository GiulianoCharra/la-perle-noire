const platoTemplate = `
    <img
                    class="plato__imagen"
                    src="{imagen}"
                    alt=""
                  />
                  <div class="container f-col ai-fs plato__datos">
                    <span class="plato__nombre">{nombre}</span
                    ><span class="plato__precio">$ {precio}</span>
                    <div class="container pedido__datos-orden">
                      <div class="container jc-fs">
                        <span class="campo-nombre">Cantidad</span>
                        <button
                          type="button"
                          class="g-center btn-pedido btnDisminuirCantidad"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                id="circulo"
                                d="M17.5 9.5C17.5 5.35938 14.1406 2 10 2C5.85938 2 2.5 5.35938 2.5 9.5C2.5 13.6406 5.85938 17 10 17C14.1406 17 17.5 13.6406 17.5 9.5Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                              />
                              <path
                                id="restar"
                                d="M13.125 10H6.875"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                        </button>
                        <span class="campo-valor plato__cantidad">1</span>
                        <button
                          type="button"
                          class="g-center btn-pedido btnAumentarCantidad"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                id="circulo"
                                d="M18 9.5C18 5.35938 14.6406 2 10.5 2C6.35938 2 3 5.35938 3 9.5C3 13.6406 6.35938 17 10.5 17C14.6406 17 18 13.6406 18 9.5Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                              />
                              <path
                                id="suma"
                                d="M10.5 6.375V12.625M13.625 9.5H7.375"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div class="container jc-fs">
                        <span class="campo-nombre">Subtotal:</span
                        ><span class="campo-valor plato__subtotal">$ {subtotal}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    id="btnEliminarPlato"
                    class="g-center btn-pedido btnEliminarPlato"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="icon i-x"
                        d="M12.4948 10L19.478 3.01684C19.8094 2.68601 19.9958 2.23707 19.9962 1.76879C19.9966 1.3005 19.811 0.851233 19.4802 0.519814C19.1494 0.188395 18.7004 0.00197318 18.2321 0.00155962C17.7638 0.00114607 17.3146 0.186774 16.9832 0.517609L10 7.50077L3.01684 0.517609C2.68542 0.18619 2.23592 0 1.76723 0C1.29853 0 0.849028 0.18619 0.517609 0.517609C0.18619 0.849028 0 1.29853 0 1.76723C0 2.23592 0.18619 2.68542 0.517609 3.01684L7.50077 10L0.517609 16.9832C0.18619 17.3146 0 17.7641 0 18.2328C0 18.7015 0.18619 19.151 0.517609 19.4824C0.849028 19.8138 1.29853 20 1.76723 20C2.23592 20 2.68542 19.8138 3.01684 19.4824L10 12.4992L16.9832 19.4824C17.3146 19.8138 17.7641 20 18.2328 20C18.7015 20 19.151 19.8138 19.4824 19.4824C19.8138 19.151 20 18.7015 20 18.2328C20 17.7641 19.8138 17.3146 19.4824 16.9832L12.4948 10Z"
                        fill="white"
                      />
                    </svg>
                  </button>
  `;

export const platos = [
  {
    nombre: "Fideo con ternera",
    precio: 1500,
    imagen: "../../assets/images/comidas/comida-1.jpg",
    cantidad: 1,
  },
  {
    nombre: "Carne con pure",
    precio: 1850,
    imagen: "../../assets/images/comidas/comida-58.jpg",
    cantidad: 1,
  },
];

let cantidadPlatos = 0;

export function generarPlatos() {
  cargarPlatos("container w-100 jc-fs plato", "pedido__platos", platos, platoTemplate);
  calcularTotal();
}

//funcion que al hacer click en el boton borrar plato elimine el div del plato
export function borrarPlato(event) {
  const plato = this.closest(".plato");
  plato.remove();

  const subTotales = document.querySelectorAll(".subtotal");
  subTotales.forEach((subtotal) => {
    if (subtotal.dataset.numeroPlato === plato.dataset.numeroPlato) {
      subtotal.remove();
    }
  });
  cantidadPlatos--;
  if (cantidadPlatos === 0) {
    const reservaPedido = document.querySelector(".reserva-pedido");
    mostrarMensajeSinPlatos(reservaPedido);
    return;
  }
  calcularTotal();
}

function mostrarMensajeSinPlatos(div) {
  div.innerHTML = `<p class="descripcion">
      No hay platos agregados, si quieres agregar platos a tu pedido, ve a la sección de menus y selecciona los platos que desees.
    </p>`;
}

//funcion que al hacer click en el boton aumentar cantidad aumente la cantidad de platos
export function aumentarCantidadPlato(event) {
  const contenedor = this.closest(".container");
  const cantidad = contenedor.querySelector(".plato__cantidad");
  if (cantidad.textContent >= 10) {
    return;
  }

  cantidad.textContent++;
  const plato = this.closest(".plato");
  const precioPlato = parseFloat(plato.querySelector(".plato__precio").textContent.slice(2));
  const subtotalPlato = plato.querySelector(".plato__subtotal");

  subtotalPlato.textContent = `$ ${precioPlato * parseInt(cantidad.textContent)}`;

  const subTotal = document.querySelector(
    `.subtotal[data-numero-plato="${plato.dataset.numeroPlato}"]`
  );

  subTotal.querySelector(".campo-valor").textContent = `${subtotalPlato.textContent.slice(2)}`;
  calcularTotal();
}

//funcion que al hacer click en el boton disminuir cantidad disminuya la cantidad de platos
export function disminuirCantidadPlato(event) {
  const contenedor = this.closest(".container");
  const cantidad = contenedor.querySelector(".plato__cantidad");

  if (cantidad.textContent == 1) {
    return;
  }
  cantidad.textContent--;

  const plato = this.closest(".plato");
  const precioPlato = parseFloat(plato.querySelector(".plato__precio").textContent.slice(2));
  const subtotalPlato = plato.querySelector(".plato__subtotal");

  subtotalPlato.textContent = `$ ${precioPlato * parseInt(cantidad.textContent)}`;

  const subTotal = document.querySelector(
    `.subtotal[data-numero-plato="${plato.dataset.numeroPlato}"]`
  );

  subTotal.querySelector(".campo-valor").textContent = `${subtotalPlato.textContent.slice(2)}`;
  calcularTotal();
}

export function cargarPlatos(cardNombre, cardContainer, platos, cardTemplate) {
  const contenedorOpiniones = document.querySelector(`.${cardContainer}`);
  const fragmento = document.createDocumentFragment();
  let numeroPlato = 0;
  platos.forEach((plato) => {
    cantidadPlatos++;
    const nuevoPlato = document.createElement("div");
    nuevoPlato.className = `${cardNombre}`;
    nuevoPlato.dataset.numeroPlato = ++numeroPlato;

    let nuevoCardTemplate = cardTemplate;
    plato.subtotal = plato.precio * plato.cantidad;
    nuevoCardTemplate = nuevoCardTemplate.replace(/\{(\w+)}/g, (match, prop) => plato[prop]);
    nuevoPlato.innerHTML = nuevoCardTemplate;

    // Agrega los event listeners a los elementos del nuevo plato
    const btnDisminuirPlato = nuevoPlato.querySelector(".btnDisminuirCantidad");
    const btnAumentarPlato = nuevoPlato.querySelector(".btnAumentarCantidad");
    const btnBorrarPlato = nuevoPlato.querySelector(".btnEliminarPlato");

    btnDisminuirPlato.addEventListener("click", disminuirCantidadPlato);
    btnAumentarPlato.addEventListener("click", aumentarCantidadPlato);
    btnBorrarPlato.addEventListener("click", borrarPlato);
    cargarSubTotal(numeroPlato, plato.subtotal);
    fragmento.appendChild(nuevoPlato);
  });
  contenedorOpiniones.appendChild(fragmento);
}

export function cargarSubTotal(numero, subtotal) {
  const subtotales = document.querySelector(`.subtotales`);

  const nuevoSubTotal = document.createElement("div");
  nuevoSubTotal.className = `container subtotal`;
  nuevoSubTotal.dataset.numeroPlato = numero;

  nuevoSubTotal.innerHTML = `
      <span class="campo-nombre">subtotal ${numero}</span
      ><span>$ <span class="campo-valor">${subtotal}</span></span>
  `;

  subtotales.appendChild(nuevoSubTotal);
}

export function calcularTotal() {
  const subtotales = document.querySelectorAll(`.subtotal`);
  const spanTotal = document.getElementById("total");
  const spanPagoInicial = document.getElementById("pagoInicial");
  const spanPendiente = document.getElementById("pendiente");

  let total = 0;

  subtotales.forEach((subtotal) => {
    total += parseFloat(subtotal.querySelector(`.campo-valor`).textContent);
  });

  let pagoInicial = total * 0.4;
  let pendiente = total - pagoInicial;

  spanTotal.textContent = total;
  spanPagoInicial.textContent = pagoInicial;
  spanPendiente.textContent = pendiente;
}

export default {
  generarPlatos,
  platos,
};
