async function obtenerMenu(url, id) {
  let res = await fetch(url);
  let json = await res.json();
  return json[id];
}

window.addEventListener("load", async () => {
  let platos = await obtenerMenu("https://www.themealdb.com/api/json/v1/1/random.php", "meals");
  let bebidas = await obtenerMenu(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    "drinks"
  );
  console.log(platos);
  console.log(bebidas);
  const contenerdor = document.getElementById("comidas");

  const nuevaComida = document.createElement("div");
  nuevaComida.classList.add("container");

  nuevaComida.innerHTML = `
    <img src="${platos[0].strMealThumb}" alt="">
          <h3>${platos[0].strMeal}</h3>
}`;

  contenerdor.appendChild(nuevaComida);
});
