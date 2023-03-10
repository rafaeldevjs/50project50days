const container = document.querySelector(".container");
const percentagem = document.querySelector(".container span");

let count = 100;

let interval = setInterval(() => {
  if (count === 0) {
    percentagem.remove();
    clearInterval(interval);
  }
  percentagem.textContent = `${count}%`;

  percentagem.style.opacity = count / 50;

  container.style.backdropFilter = `blur(${count / 10}px)`;
  count--;
}, 15);
