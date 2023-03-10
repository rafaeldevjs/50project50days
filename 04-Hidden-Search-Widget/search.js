const svg = document.querySelector("svg");
const container = document.querySelector(".container");
const search = document.querySelector(".search");

container.addEventListener("click", (e) => {
  if (e.target.className.includes("container")) {
    search.classList.remove("large");
  }
});

svg.addEventListener("click", (e) => {
  search.classList.add("large");
  e.stopPropagation();
});
