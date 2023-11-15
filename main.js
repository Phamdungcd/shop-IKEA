// search
const searchBtn = document.querySelector("#search-icon");
const headerSearch = document.querySelector(".search-form");
searchBtn.addEventListener("click", () => {
  headerSearch.classList.toggle("active");
  navMenu.classList.remove("active");
});

// navbar
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector(".navbar");
const closeMenu = document.querySelector("#close-btn");
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  headerSearch.classList.remove("active");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

window.onscroll = () => {
  headerSearch.classList.remove("active");
  navMenu.classList.remove("active");
};
