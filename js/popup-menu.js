const menuWrapper = document.querySelector('menu-wrapper');
const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.site-menu')

function showMenu () {
    menuList.classList.toggle('hide');
}

menuButton.addEventListener('click', showmenu);




