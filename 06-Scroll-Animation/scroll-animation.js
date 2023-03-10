const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", () => {
  contents.forEach((content) => {
    content.classList.add("reveal");
  });
});
