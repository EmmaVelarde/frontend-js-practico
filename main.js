const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', () => togglepMenu(desktopMenu));
menuBurguerIcon.addEventListener('click', () => togglepMenu(mobileMenu));


function togglepMenu(dropDownMenu) {
    dropDownMenu.classList.toggle('inactive');
}

