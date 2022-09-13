const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("nav-open");
    mobileMenu.classList.toggle("slide-rigth");
});
