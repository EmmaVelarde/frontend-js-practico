const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        togglepMenu(aside)
    }
    togglepMenu(desktopMenu)
});

menuBurguerIcon.addEventListener('click', () => {
    if (!aside.classList.contains('inactive')) {
        togglepMenu(aside)
    }
    togglepMenu(mobileMenu)
});

carMenuIcon.addEventListener('click', () => {
    if (!desktopMenu.classList.contains('inactive')) {
        togglepMenu(desktopMenu)
    }
    if (!mobileMenu.classList.contains('inactive')) {
        togglepMenu(mobileMenu)
    }
    togglepMenu(aside)
});


function togglepMenu(dropDownMenu) {
    dropDownMenu.classList.toggle('inactive');
}

