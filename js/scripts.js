const menuBars = document.querySelector(".navbar__menu-bars");
const modalMenuContainer = document.querySelector(".modal-menu__container");

menuBars.addEventListener('click', () => {
    if (modalMenuContainer.classList.contains("active") == false) {
        modalMenuContainer.classList.add("active");
        menuBars.classList.add("clicked")
    } else {
        modalMenuContainer.classList.remove("active");
        menuBars.classList.remove("clicked")
    }
    
});