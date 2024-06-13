//<BURGER>=================================
const iconMenu = document.querySelector('.menu__icon');//находим класс menu__icon
const menuBody = document.querySelector('.menu__body');//находим класс menu__body
if (iconMenu) {//Проверяем есть ли menu__icon
	iconMenu.addEventListener("click", function (e) {//вещам событие при клике мыши
		document.body.classList.toggle('_lock');//Для Body даем класс Lock для отключения прокрутки
		iconMenu.classList.toggle('_active');//добавляем класс active menu__icon
		menuBody.classList.toggle('_active');//добавляем класс active menu__body
	});
};
//</BURGER>=================================


//<BURGER SIDE-MENU>=================================
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e) {
	// menuPageBody.classList.toggle('_active');
	menuPageBurger.classList.toggle('_active');
	_slideToggle(menuPageBody, 500);
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

//<SELECT-MENU>=================================
let searchTitle = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');
searchTitle.addEventListener("click", function (e) {
	searchTitle.classList.toggle('_active');
	_slideToggle(categoriesSearch, 500);
});

const checkboxCatergories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCatergories.length; index++) {
	const checkboxCatergory = checkboxCatergories[index];
	checkboxCatergory.addEventListener("change", function (e) {
		checkboxCatergory.classList.toggle('_active');
		const checkboxActiveCatergories = document.querySelectorAll('.categories-search__checkbox._active');
		if (checkboxActiveCatergories.length > 0) {
			searchTitle.classList.add('_categories');
			let searchQuantity = document.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + checkboxActiveCatergories.length;
		} else {
			searchTitle.classList.remove('_categories');
		}
	});
}
//</SELECT-MENU>=================================

//<>================================================================
/*
Анимированное плавное открытие и закрытие блока.
Может применяться к меню или выпадающему списку
Выписано из видео фрилансера.
В CSS нужно установить display: none; для родителя.
*/
// SlideUP
import { _slideUp } from "./slide.js";
// SlideDown
import { _slideDown } from "./slide.js";
//SlideToggLe
import { _slideToggle } from "./slide.js";
// ================================================================
import { ibg } from "./functions.js"; ibg();
import { isWebp } from "./functions.js"; isWebp();
