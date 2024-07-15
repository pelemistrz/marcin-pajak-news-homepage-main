var navbar = document.querySelector("nav");
var openMenu = document.querySelector(".hamburger");
var ul = document.querySelector("ul");
var closeMenu = document.getElementById("close");

openMenu.addEventListener("click", function () {
  navbar.classList.add("open");
  closeMenu.classList.add("open");
  ul.classList.add("open");
});

closeMenu.addEventListener("click", function () {
  navbar.classList.remove("open");
  closeMenu.classList.remove("open");
  ul.classList.remove("open");
});
