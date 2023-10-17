"use strict";

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
// function cargarCards() {
//   const contenedorOpiniones = document.querySelector(".opiniones-clientes");

//   // Recorre el array de opiniones e imágenes y crea elementos para cada uno
//   const opiniones = document.createDocumentFragment();
//   opinionesClientes.forEach((opinionCliente) => {
//     const cardOpinion = document.createElement("div");
//     cardOpinion.className = "card-cliente";
//     cardOpinion.innerHTML = `
//       <img class="cliente__imagen" src="${opinionCliente.imagen}" alt="">
//       <p class="cliente__nombre">${opinionCliente.nombre}</p>
//       <div class="g-center cliente__opinion">
//         <p class="cliente__opinion-texto">${opinionCliente.opinion}</p>
//       </div>
//     `;

//     opiniones.appendChild(cardOpinion);
//   });
//   contenedorOpiniones.appendChild(opiniones);
// }

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

//funcion que modifica el widht del logo cuando scrolleo
const logo = document.querySelector(".header__logo");
const widhtLogoInicial = logo.clientWidth;
let lastScrollTop = 0;
let speed = 5;
let requestId = null;
function updateLogoSize() {
  let currentScrollTop = window.scrollY;
  const scrollDistance = Math.abs(currentScrollTop - lastScrollTop);

  if (currentScrollTop === 0) {
    logo.style.width = `clamp(100px, 30vw, 300px)`;
    return;
  }
  if (currentScrollTop > 200) {
    return;
  }

  if (currentScrollTop > lastScrollTop) {
    logo.style.width = `clamp(100px, ${
      logo.clientWidth - scrollDistance
    }px, ${widhtLogoInicial}px)`;
  } else if (currentScrollTop <= 200) {
    logo.style.width = `clamp(100px, ${
      logo.clientWidth + scrollDistance
    }px, ${widhtLogoInicial}px)`;
  }
  lastScrollTop = currentScrollTop;
}

window.addEventListener("scroll", (e) => {
  updateLogoSize();
});

window.addEventListener("beforeunload", (e) => {
  window.scrollTo(0, 0);
});

window.addEventListener("DOMContentLoaded", () => {
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
});

window.addEventListener("click", (e) => {
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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    // Obtener el objetivo del enlace (elemento con el ID correspondiente)
    var target = document.querySelector(link.getAttribute("href"));

    if (!target) return;
    event.preventDefault();

    // Calcular la posición del objetivo y ajustarla por la altura del menú
    var offset = target.getBoundingClientRect().top + window.scrollY;
    var menuHeight = document.querySelector(".header").offsetHeight - 20;

    // Animar el desplazamiento
    window.scrollTo({
      top: offset - menuHeight
    });
  });
});
