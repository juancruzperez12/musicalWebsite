document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var nav = document.querySelector(".top-nav");
    nav.classList.add("show");
  });

document.getElementById("close-menu").addEventListener("click", function () {
  var nav = document.querySelector(".top-nav");
  nav.classList.remove("show");
});
