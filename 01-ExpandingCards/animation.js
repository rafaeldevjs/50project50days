const imgCard = document.querySelectorAll(".img-card");

imgCard.forEach((card) => {
  card.addEventListener("click", (e) => {
    imgCard.forEach((element) => {
      element.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  });
});
