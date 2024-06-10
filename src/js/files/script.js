//<BURGER>=================================
const iconMenu = document.querySelector('.menu__icon');//находим класс menu__icon
const menuBody = document.querySelector('.menu__body');//находим класс menu__body
if (iconMenu) {//Проверяем есть ли menu__icon
	iconMenu.addEventListener("click", function (e) {//вещам событие при клике мыши
		document.body.classList.toggle('_lock');//Для Body даем класс Lock для отключения прокрутки
		iconMenu.classList.toggle('_active');//добавляем класс active menu__icon
		menuBody.classList.toggle('_active');//добавляем класс active menu__body
	})
}
//</BURGER>=================================


//<BURGER SIDE-MENU>=================================
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e) {
	menuPageBody.classList.toggle('_active');
	menuPageBurger.classList.toggle('_active');

});

//</BURGER SIDE-MENU>=================================


//<SIDE-MENU>=================================
// Функционал который открывается дополнительное подменю с товаром в боковое меню с помощью стрелки
let menuParents = document.querySelectorAll('.menu-page__parent');
const submenuItems = document.querySelectorAll('.submenu-page__item');

for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener("mouseenter", function (e) {
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener("mouseleave", function (e) {
		menuParent.classList.remove('_active');
	});
}

//</SIDE-MENU>=================================