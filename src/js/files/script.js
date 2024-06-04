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