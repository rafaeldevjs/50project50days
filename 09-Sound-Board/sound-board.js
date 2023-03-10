const itens = document.querySelectorAll("button");

itens.forEach((item) => {
  item.addEventListener("click", (e) => {
    // const audio = document.querySelector("audio");

    const audio = new Audio(
      `./sounds/sound-board_sounds_${e.target.textContent}.mp3`
    );

    // audio.src = `./sounds/sound-board_sounds_${e.target.textContent}.mp3`;
    audio.play();
  });
});
