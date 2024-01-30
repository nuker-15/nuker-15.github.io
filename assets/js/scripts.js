const sandwich = document.querySelector("#sandwich-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

sandwich.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);