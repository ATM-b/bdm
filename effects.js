document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".Menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
