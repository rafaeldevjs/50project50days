const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
const progressBar = document.querySelector(".progress-bar:nth-child(2)");

let widthBar = 0;
next.addEventListener("click", () => {
  const spans = document.querySelectorAll(".progress .active");
  const span = document.querySelectorAll(".progress span");
  if (spans.length < 4) {
    span[spans.length].classList.add("active");
  }
  if (widthBar === 90) {
    return;
  }
  widthBar += 30;
  progressBar.style.width = `${widthBar}%`;
  if (widthBar === 90) {
    next.setAttribute("disabled", true);
    next.classList.add("btn-disabled");
    previous.classList.remove("btn-disabled");
    previous.removeAttribute("disabled");
  }
  if (widthBar > 0) {
    previous.classList.remove("btn-disabled");
    previous.removeAttribute("disabled");
  }
});
previous.addEventListener("click", () => {
  const spans = document.querySelectorAll(".progress .active");
  const span = document.querySelectorAll(".progress span");
  if (spans.length > 1) {
    span[spans.length - 1].classList.remove("active");
  }

  if (widthBar === 0) {
    return;
  }

  widthBar -= 30;
  progressBar.style.width = `${widthBar}%`;

  if (widthBar > 0) {
    next.classList.remove("btn-disabled");
    next.removeAttribute("disabled");
    previous.classList.remove("btn-disabled");
    previous.removeAttribute("disabled");
  }

  if (widthBar === 0) {
    previous.setAttribute("disabled", true);
    previous.classList.add("btn-disabled");
    next.classList.remove("btn-disabled");
    next.removeAttribute("disabled");
  }
});
