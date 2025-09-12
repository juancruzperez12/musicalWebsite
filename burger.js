// Script del menú hamburguesa - Versión simplificada
document.addEventListener("DOMContentLoaded", function () {
  console.log("Burger.js cargado correctamente");

  // Función para abrir el menú hamburguesa
  const hamburgerMenu = document.getElementById("hamburger-menu");
  console.log("Hamburger menu encontrado:", hamburgerMenu);

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", function () {
      console.log("Hamburger menu clickeado");
      const nav = document.querySelector(".top-nav");
      console.log("Nav encontrado:", nav);
      if (nav) {
        nav.classList.add("show");
        console.log("Clase 'show' agregada al menú");
      }
    });
  }

  // Función para cerrar el menú hamburguesa
  const closeMenu = document.getElementById("close-menu");
  console.log("Close menu encontrado:", closeMenu);

  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      console.log("Close menu clickeado");
      const nav = document.querySelector(".top-nav");
      if (nav) {
        nav.classList.remove("show");
        console.log("Clase 'show' removida del menú");
      }
    });
  }
});
