import desplegar from "./scripts/desplegable.js";

desplegar();
//funcion que modifica el widht del logo cuando scrolleo
window.addEventListener("load", () => {
  const logo = document.querySelector(".header__logo");
  let lastScrollTop = 0;
  function updateLogoSize() {
    let currentScrollTop = window.scrollY;
    const scrollDistance = Math.abs(currentScrollTop - lastScrollTop);

    if (currentScrollTop === 0) {
      logo.style.width = `clamp(100px, 30vw, 300px)`;
      return;
    }
    if (currentScrollTop > 200) {
      logo.style.width = `100px`;
      return;
    }

    if (currentScrollTop > lastScrollTop) {
      logo.style.width = `${logo.clientWidth - scrollDistance}px`;
    } else if (currentScrollTop <= 200) {
      logo.style.width = `${logo.clientWidth + scrollDistance}px`;
    }
    lastScrollTop = currentScrollTop;
  }

  document.addEventListener("scroll", updateLogoSize, { passive: true });
});

document.addEventListener("beforeunload", (e) => {
  window.scrollTo(0, 0);
});

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
      top: offset - menuHeight,
    });
  });
});
