// Script del menú hamburguesa - Versión mejorada
document.addEventListener("DOMContentLoaded", function () {
  console.log("Burger.js cargado correctamente");

  // Función para abrir el menú hamburguesa
  const hamburgerMenu = document.getElementById("hamburger-menu");
  console.log("Hamburger menu encontrado:", hamburgerMenu);

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Hamburger menu clickeado");
      const nav = document.querySelector(".top-nav");
      console.log("Nav encontrado:", nav);
      if (nav) {
        nav.classList.add("show");
        nav.style.display = "flex";
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
        console.log("Clase 'show' agregada al menú");
      }
    });
  }

  // Función para cerrar el menú hamburguesa
  const closeMenu = document.getElementById("close-menu");
  console.log("Close menu encontrado:", closeMenu);

  if (closeMenu) {
    closeMenu.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Close menu clickeado");
      const nav = document.querySelector(".top-nav");
      if (nav) {
        nav.classList.remove("show");
        nav.style.display = "none";
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
        console.log("Clase 'show' removida del menú");
      }
    });
  }

  // Cerrar menú al hacer clic fuera de él
  document.addEventListener("click", function (e) {
    const nav = document.querySelector(".top-nav");
    const hamburger = document.getElementById("hamburger-menu");

    if (
      nav &&
      nav.classList.contains("show") &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      nav.classList.remove("show");
      nav.style.display = "none";
      nav.style.visibility = "hidden";
      nav.style.opacity = "0";
    }
  });
});
