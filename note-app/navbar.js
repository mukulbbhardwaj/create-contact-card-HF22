const menuBtn = document.querySelector(".menu");
const navBarUl = document.querySelector(".nav-items");
const navItems = document.querySelector(".nav-item");

const navItem = menuBtn.addEventListener("click", function () {
  navBarUl.classList.toggle("show-menu");
});

navItems.addEventListener("click", function () {
  navBarUl.classList.toggle("show-menu");
});
