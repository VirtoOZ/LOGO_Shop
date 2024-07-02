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
if (isMobile.any()) {
	// обращаемся ко всем ссылкам внутри menu-page__parent
	let menuParents = document.querySelectorAll('.menu-page__parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click", function (e) {
			menuParent.parentElement.classList.toggle('_active');
			// отменить нажатие
			e.preventDefault();
		});
	}
} else {
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

//<FILTER>=================================
if (document.querySelector('.filter')) {
	const priceSlider = document.querySelector('.price-filter__slider');
	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: true,
		range: {
			'min': 0,
			'max': 200000
		},
	});
	// передача значений из поля в слайдер
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
//</FILTER>=================================

//<ANIM-SLIDE>================================================================
/*   Анимированное плавное открытие и закрытие блока.
Может применяться к меню или выпадающему списку
Выписано из видео фрилансера.
В CSS нужно установить display: none; для родителя.
*/
// SlideUP
import { _slideUp } from "./functions.js";
// SlideDown
import { _slideDown } from "./functions.js";
//SlideToggLe
import { _slideToggle } from "./functions.js";
//</ANIM-SLIDE>================================================================

//<isMobile>================================================================
//Проверка на каком устройстве работаем
import { isMobile } from "./functions.js";
//</isMobile>================================================================

//<SPOLLER>=================================
let spollers = document.querySelector('._spollers');
spollers.addEventListener("click", function (e) {
	// нажатый элемент
	let targetItem = e.target;
	// нажатый элемент является или его родители ._spoller
	let spoller = targetItem.closest('._spoller');
	if (spoller) {
		spoller.classList.toggle('_active');
		_slideToggle(spoller.nextElementSibling, 500);
	}
});
//</SPOLLER>=================================

//<FILTER>=================================
if (isMobile.any()) {
	const filterTitle = document.querySelector('.filter__title');
	if (filterTitle) {
		filterTitle.addEventListener("click", function (e) {
			filterTitle.classList.toggle('_active');
			_slideToggle(filterTitle.nextElementSibling, 500);
		});
	}
}
//</FILTER>=================================
