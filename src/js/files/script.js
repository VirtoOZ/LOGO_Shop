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

/*
Анимированное плавное открытие и закрытие блока.
Может применяться к меню или выпадающему списку
Выписано из видео фрилансера.
В CSS нужно установить display: none; для родителя.
*/
//<>================================================================
// SlideUP
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}

// SlideDown
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none') {
		display = 'block';
	}
	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}

//SlideToggLe
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		// if (target.hidden) {
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
// ================================================================