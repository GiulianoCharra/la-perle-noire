import desplegar from "../../scripts/desplegable.js";

desplegar.controlDespliegue();

const endPoints = {
  comidas: "https://www.themealdb.com/api/json/v1/1/random.php",
  bebidas: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  categorias: "https://www.themealdb.com/api/json/v1/1/categories.php",
  ingredientes: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
  comidasPorBusqueda: "www.themealdb.com/api/json/v1/1/search.php?f={letra}",
  comidaPorIngrediente: "www.themealdb.com/api/json/v1/1/filter.php?i={chicken_breast}",
  comidasPorCategoria: "www.themealdb.com/api/json/v1/1/filter.php?c={categoria}",
};

async function obtenerDatos(url, id) {
  let res = await fetch(url);
  let json = await res.json();
  return json[id];
}

window.addEventListener("load", async () => {
  cargarCategorias();
  cargarIngredientes();
  for (let i = 0; i < 10; i++) {
    cargarComidas();
  }
});

async function cargarComidas() {
  let platos = await obtenerDatos("https://www.themealdb.com/api/json/v1/1/random.php", "meals");

  const contenedor = document.getElementById("platos");

  const nuevaComida = document.createElement("div");
  nuevaComida.classList.add("card-comida");
  nuevaComida.innerHTML = `
  <img class="comida__imagen" src="${platos[0].strMealThumb}" alt="">
  <span class="comida__nombre">${platos[0].strMeal}</span>
  <div class="container  w-100">
    <div class="btn-principal agregar-pedido">
      <span class="btn_name">Agregar</span>
    </div>
    <span class="comida__precio">$1000</span>
  </div>
  <div class="g-center comida__descripcion">
    <span class="comida__descripcion-texto"
      >Lorem ipsum dolor sit amet consectetur. Etiam mollis sed morbi tincidunt.
      Aliquet sit ullamcorper fringilla pretium tortor.</span
    >
  </div>`;

  contenedor.appendChild(nuevaComida);
}

async function cargarBebidas() {
  let bebidas = await obtenerDatos(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    "drinks"
  );
}

async function cargarCategorias() {
  let categorias = await obtenerDatos(endPoints.categorias, "categories");
  const contenedorCategorias = document.getElementById("filtro-categorias");
  const fragmento = document.createDocumentFragment();

  categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement("div");
    nuevaCategoria.classList.add("opcion");

    nuevaCategoria.innerHTML = `
        <input
        type="radio"
        name="filtro-categoria"
        id="categoria-${categoria.idCategory}"
        value="${categoria.strCategory}"
      /><label
        for="categoria-${categoria.idCategory}"
        class=""
        >${categoria.strCategory}</label
      >
    `;

    fragmento.appendChild(nuevaCategoria);
  });
  contenedorCategorias.appendChild(fragmento);
}

async function cargarIngredientes() {
  let ingredientes = await obtenerDatos(endPoints.ingredientes, "meals");
  const contenedorIngredientes = document.getElementById("filtro-ingrediente");
  const fragmento = document.createDocumentFragment();

  ingredientes.forEach((ingrediente) => {
    const nuevoIngrediente = document.createElement("div");
    nuevoIngrediente.classList.add("opcion");

    nuevoIngrediente.innerHTML = `
        <input
        type="radio"
        name="filtro-ingrediente"
        id="categoria-${ingrediente.idIngredient}"
        value="${ingrediente.strIngredient}"
      /><label
        for="categoria-${ingrediente.idIngredient}"
        class=""
        >${ingrediente.strIngredient}</label
      >
    `;

    fragmento.appendChild(nuevoIngrediente);
  });
  contenedorIngredientes.appendChild(fragmento);
}
