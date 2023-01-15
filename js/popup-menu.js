
'use strict';


const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.site-menu')

function showMenu() {
    menuList.classList.toggle('visible');
}

menuButton.addEventListener('click', showMenu);

















