/* DOM manipulation variables */
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");

const logo = document.querySelector(".logo");
const servicesButton = document.querySelector(".about-us--services-button");
const contactButton = document.querySelector(".about-us--contact-button");

const aboutUsMobileMenuButton = document.querySelector(".mobile-menu--about-us");
const servicesMobileMenuButton = document.querySelector(".mobile-menu--services");
const contactMobileMenuButton = document.querySelector(".mobile-menu--contact-us");

const navAboutUs = document.querySelector(".nav--about-us");
const navServices = document.querySelector(".nav--services");
const navContact = document.querySelector(".nav--contact");

/* Mobile menu button animation */
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("nav-open");
    mobileMenu.classList.toggle("slide-rigth");
});

/* Sections navigation */
logo.addEventListener("click", () => {
    document.querySelector(".about-us").scrollIntoView({ behavior: "smooth" });
});
servicesButton.addEventListener("click", () => {
    document.querySelector(".services").scrollIntoView({ behavior: "smooth", block: "center" });
});
contactButton.addEventListener("click", () => {
    document.querySelector(".contact-us").scrollIntoView({ behavior: "smooth", block: "start" });
});

navAboutUs.addEventListener("click", () => {
    document.querySelector(".about-us").scrollIntoView({ behavior: "smooth" });
});
navServices.addEventListener("click", () => {
    document.querySelector(".services").scrollIntoView({ behavior: "smooth", block: "center" });
});
navContact.addEventListener("click", () => {
    document.querySelector(".contact-us").scrollIntoView({ behavior: "smooth", block: "start" });
});

aboutUsMobileMenuButton.addEventListener("click", () => {
    menuButton.classList.remove("nav-open");
    mobileMenu.classList.remove("slide-rigth")
    document.querySelector(".about-us").scrollIntoView({ behavior: "smooth" });
});
servicesMobileMenuButton.addEventListener("click", () => {
    menuButton.classList.remove("nav-open");
    mobileMenu.classList.remove("slide-rigth")
    document.querySelector(".services").scrollIntoView({ behavior: "smooth", block: "center" });
});
contactMobileMenuButton.addEventListener("click", () => {
    menuButton.classList.remove("nav-open");
    mobileMenu.classList.remove("slide-rigth")
    document.querySelector(".contact-us").scrollIntoView({ behavior: "smooth", block: "start" });
});

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        header.classList.add("hide-header");
    } else {
        header.classList.remove("hide-header");
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);
