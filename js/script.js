const $crocoImage = document.querySelectorAll(".croco-image");

const attack = () => {
  $crocoImage.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.setAttribute(`src`, `../assets/crocodile.png`);
    });
    image.addEventListener("mouseleave", () => {
      image.setAttribute(`src`, `../assets/crocodile-default.png`);
    });
  });
};

attack();
