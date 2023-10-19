"use-strict";
import enviarEmail from "../../services/email.service.js";

const opinionesClientes = [
  {
    nombre: "Elon Musk",
    opinion:
      "La comida es tan innovadora que parece que proviene de otro planeta. ¡Una experiencia única en cada bocado!",
    imagen: "./assets/images/clientes/cliente (1).jpeg",
  },
  {
    nombre: "Donald Trump",
    opinion:
      "Este restaurante es el mejor. La comida es increíble, la mejor comida. Nadie cocina mejor que este lugar. ¡Tienes que probarlo!",
    imagen: "./assets/images/clientes/cliente (2).jpeg",
  },
  {
    nombre: "Jack Sparrow",
    opinion: "La mejor comida que eh probado en todo el Caribe.",
    imagen: "./assets/images/clientes/cliente (3).jpg",
  },
  {
    nombre: "Morgan Freeman",
    opinion:
      "En este restaurante, la comida es una experiencia sublime. Cada plato cuenta una historia, y cada sabor es como música para el alma.",
    imagen: "./assets/images/clientes/cliente (8).jpg",
  },
  {
    nombre: "Silvester Stallone",
    opinion:
      "Este restaurante es una verdadera pelea por el sabor. ¡Una experiencia de comer que te dejará sin aliento!",
    imagen: "./assets/images/clientes/cliente (9).jpg",
  },
];
const capturasComidas = [
  {
    imagenURL: "./assets/images/comidas/comida-1.jpg",
    descripcion: "Nuevo plato de la casa: ¡Filete de ternera con salsa de vino tinto!",
  },
  {
    imagenURL: "./assets/images/comidas/comida-15.jpeg",
    descripcion: "Nuevo plato de la casa: ¡Filete de ternera con salsa de vino tinto!",
  },
  {
    imagenURL: "./assets/images/comidas/comida-66.jpg",
    descripcion: "Nuevo plato de la casa: ¡Filete de ternera con salsa de vino tinto!",
  },
  {
    imagenURL: "./assets/images/comidas/comida-58.jpg",
    descripcion: "Nuevo plato de la casa: ¡Filete de ternera con salsa de vino tinto!",
  },
  {
    imagenURL: "./assets/images/comidas/comida-20.jpeg",
    descripcion: "Nuevo plato de la casa: ¡Filete de ternera con salsa de vino tinto!",
  },
  {
    imagenURL: "./assets/images/comidas/comida-11.jpeg",
    descripcion: "Nuevo plato de la casa: ¡Filete de ternera con salsa de vino tinto!",
  },
];
const capturasAmbiente = [
  {
    imagenURL: "./assets/images/ambiente/ambiente (1).jpg",
    descripcion: "Perfecto para una cena romántica con tu pareja.",
  },
  {
    imagenURL: "./assets/images/ambiente/ambiente (2).jpg",
    descripcion: "Perfecto para una cena romántica con tu pareja.",
  },
  {
    imagenURL: "./assets/images/ambiente/ambiente (3).jpg",
    descripcion: "Perfecto para una cena romántica con tu pareja.",
  },
  {
    imagenURL: "./assets/images/ambiente/ambiente (4).jpg",
    descripcion: "Perfecto para una cena romántica con tu pareja.",
  },
  {
    imagenURL: "./assets/images/ambiente/ambiente (5).jpg",
    descripcion: "Perfecto para una cena romántica con tu pareja.",
  },
  {
    imagenURL: "./assets/images/ambiente/ambiente (6).jpg",
    descripcion: "Perfecto para una cena romántica con tu pareja.",
  },
];
const capturasRestaurante = [
  {
    imagenURL: "./assets/images/restaurante/restaurante (1).jpg",
    descripcion: "Una arquiectura única en el mundo.",
  },
  {
    imagenURL: "./assets/images/restaurante/restaurante (2).jpg",
    descripcion: "Una arquiectura única en el mundo.",
  },
  {
    imagenURL: "./assets/images/restaurante/restaurante (3).jpg",
    descripcion: "Una arquiectura única en el mundo.",
  },
  {
    imagenURL: "./assets/images/restaurante/restaurante (4).jpg",
    descripcion: "Una arquiectura única en el mundo.",
  },
  {
    imagenURL: "./assets/images/restaurante/restaurante (5).jpg",
    descripcion: "Una arquiectura única en el mundo.",
  },
  {
    imagenURL: "./assets/images/restaurante/restaurante (6).jpg",
    descripcion: "Una arquiectura única en el mundo.",
  },
];
const capturasEventos = [
  {
    imagenURL: "./assets/images/eventos/evento (1).jpg",
    descripcion: "Entretenimiento perfecto para disfrutar con amigos y familiares.",
  },
  {
    imagenURL: "./assets/images/eventos/evento (2).jpg",
    descripcion: "Entretenimiento perfecto para disfrutar con amigos y familiares.",
  },
  {
    imagenURL: "./assets/images/eventos/evento (3).jpg",
    descripcion: "Entretenimiento perfecto para disfrutar con amigos y familiares.",
  },
  {
    imagenURL: "./assets/images/eventos/evento (4).jpg",
    descripcion: "Entretenimiento perfecto para disfrutar con amigos y familiares.",
  },
  {
    imagenURL: "./assets/images/eventos/evento (5).jpg",
    descripcion: "Entretenimiento perfecto para disfrutar con amigos y familiares.",
  },
  {
    imagenURL: "./assets/images/eventos/evento (6).jpg",
    descripcion: "Entretenimiento perfecto para disfrutar con amigos y familiares.",
  },
];

const cardCapturaTemplate = `
    <img
      class="captura__imagen"
      src="{imagenURL}"
      alt=""
    />
    <div class="g-center captura__descripcion">
      <p class="captura__descripcion-texto">
        {descripcion}
      </p>
    </div>
  `;

// Función para cargar las opiniones y las imágenes de los clientes
function cargarCards(cardNombre, cardContainer, elementos, cardTemplate) {
  const contenedorOpiniones = document.querySelector(`.${cardContainer}`);
  const fragmento = document.createDocumentFragment();

  elementos.forEach((element) => {
    const nuevoCard = document.createElement("div");
    nuevoCard.className = `${cardNombre}`;
    let nuevoCardTemplate = cardTemplate;
    nuevoCardTemplate = nuevoCardTemplate.replace(/\{(\w+)}/g, (match, prop) => element[prop]);
    nuevoCard.innerHTML = nuevoCardTemplate;
    fragmento.appendChild(nuevoCard);
  });
  contenedorOpiniones.appendChild(fragmento);
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  // Carga las opiniones y las imágenes de los clientes
  cargarCards(
    "card-cliente",
    "opiniones-clientes",
    opinionesClientes,
    `<img class="cliente__imagen" src="{imagen}" alt="">
      <p class="cliente__nombre">{nombre}</p>
      <div class="g-center cliente__opinion">
        <p class="cliente__opinion-texto">{opinion}</p>
      </div>`
  );
  // Carga las capturas de las comidas
  cargarCards("card-captura", "listado-comidas", capturasComidas, cardCapturaTemplate);
  // Carga las capturas del ambiente
  cargarCards("card-captura", "listado-ambiente", capturasAmbiente, cardCapturaTemplate);
  // Carga las capturas del restaurante
  cargarCards("card-captura", "listado-restaurante", capturasRestaurante, cardCapturaTemplate);
  // Carga las capturas de los eventos
  cargarCards("card-captura", "listado-eventos", capturasEventos, cardCapturaTemplate);

  const btnEnviar = document.getElementById("btn-enviar-texto");
  const contactoForm = document.getElementById("form-contacto");

  enviarEmail(btnEnviar, contactoForm);
});

document.addEventListener("click", (e) => {
  cambiarCategoria(e);
});

function cambiarCategoria(e) {
  let categoriaActual = e.target;
  if (!categoriaActual || !categoriaActual.classList.contains("categoria__nombre")) {
    return;
  }

  let categoriaAnterior = document.querySelector(".categoria--seleccionada");
  cambiarClaseCategoria(categoriaActual);
  cambiarClaseCategoria(categoriaAnterior);

  let listadoCardsAnterior = document.querySelector(".mostrarListado");
  let listadoCardsActual = document.querySelector(`.listado-${categoriaActual.dataset.categoria}`);

  cambiarVisibilidadListado(listadoCardsAnterior);
  cambiarVisibilidadListado(listadoCardsActual);
}

function cambiarClaseCategoria(categoria) {
  categoria.classList.toggle("categoria--seleccionada");
}

async function cambiarVisibilidadListado(listado) {
  if (!listado) {
    return;
  }
  listado.classList.toggle("mostrarListado");
  listado.classList.toggle("ocultarListado");
}
