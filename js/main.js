"use strict";

// partners carousel
const partnersCarousel = () => {
  const width = window.innerWidth;

  const partnersObj = {
    type: "carousel",
    autoplay: 1500,
    perView: 4,
  };

  if (width <= 650) {
    partnersObj.perView = 3;
  }

  new Glide(".glide", partnersObj).mount();
};
partnersCarousel();
