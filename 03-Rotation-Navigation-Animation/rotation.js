const menu = document.querySelector(".menu");
const main = document.querySelector(".container");
menu.addEventListener("click", () => {
  main.classList.toggle("rotate");
  console.log("ola");
});
