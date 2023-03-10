const inputs = document.querySelectorAll(".input-form");

inputs.forEach((element) => {
  element.addEventListener("focus", (e) => {
    e.target.previousElementSibling.classList.add("active");
  });
});
inputs.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (e.target.value.length <= 0) {
      e.target.previousElementSibling.classList.remove("active");
    }
  });
});
