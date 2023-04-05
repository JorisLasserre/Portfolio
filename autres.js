const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("header");

hamburgerBtn.addEventListener("click", () => {

  menu.classList.toggle("show");
});