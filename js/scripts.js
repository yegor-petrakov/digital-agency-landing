const menuBars = document.querySelector(".navbar__menu-bars");
const modalMenuContainer = document.querySelector(".modal-menu__container");

menuBars.addEventListener('click', () => {
    if (modalMenuContainer.classList[1] != "active") {
        modalMenuContainer.classList.add("active");
    } else {
        modalMenuContainer.classList.remove("active");
    }
    
});