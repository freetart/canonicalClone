"use strict";

// preloader
const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloaderEl.classList.add("hide-preloader");
  });
};
preloader();

// scroll spy
const scrollSpy = () => {
  const options = { rootMargin: "-400px" };

  // watch products
  const productsSection = document.querySelector("#products");
  const productsNavLink = document.querySelector(".products");

  const observeProducts = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        productsNavLink.classList.add("active");
      } else {
        productsNavLink.classList.remove("active");
      }
    });
  }, options);
  observeProducts.observe(productsSection);

  // watch partners
  const partnersSection = document.querySelector("#partners");
  const partnersNavLink = document.querySelector(".partners");

  const observePartners = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        partnersNavLink.classList.add("active");
      } else {
        partnersNavLink.classList.remove("active");
      }
    });
  }, options);
  observePartners.observe(partnersSection);

  // watch careers
  const careersSection = document.querySelector("#careers");
  const careersNavLink = document.querySelector(".careers");

  const observeCareers = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        careersNavLink.classList.add("active");
      } else {
        careersNavLink.classList.remove("active");
      }
    });
  }, options);
  observeCareers.observe(careersSection);
};
scrollSpy();

// partners carousel
const partnersCarousel = () => {
  const partnersObj = {
    type: "carousel",
    autoplay: 1500,
    perView: 4,
    breakpoints: {
      650: {
        perView: 3,
      },
    },
  };

  new Glide(".glide", partnersObj).mount();
};
partnersCarousel();

// set date
const setDate = () => {
  const date = document.getElementById("date");

  date.innerHTML = new Date().getFullYear();
};
setDate();
