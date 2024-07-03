// BildSlider
let sliders = document.querySelectorAll('.swiper');
if (sliders.length > 0) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			// ветка Слайдов с содержимым mainslider__slide(swiper-slide) и глубже
			let slider_content = slider.innerHTML;
			// let slider_wrapper = element('div', ['swiper-wrapper'], slider_content);
			// создаем пустой див
			let slider_wrapper = document.createElement('div');
			// даем этому диву класс swiper-wrapper
			slider_wrapper.classList.add('swiper-wrapper');
			// помещаем ветку Слайдов внутрь оболочки swiper-wrapper
			slider_wrapper.innerHTML = slider_content;
			// затираем всё что было внутри mainslider__body
			slider.innerHTML = '';
			// в пустой блок mainslider__body вставляем оболочку swiper-wrapper
			slider.appendChild(slider_wrapper);
			// даем клас swiper-bild
			slider.classList.add('swiper-bild');
			// if (slider.classList.contains('_swiper_scroll')) {
			// let sliderScroll = element('div', ['swiper-scrollbar']);
			// slider.appendChild(sliderScroll);
			// }
		}
		if (slider.classList.contains('_gallery')) {
			// slider.data('ligthGallery').destroy(true);
		}
	}
	sliders_bild_callback();
	// }
}
function sliders_bild_callback(params) { }
/*const sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParent: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false,
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}*/
//Инициализация и Настройки слайдера 1
if (document.querySelector('.mainslider')) {
	let mainSwiper = new Swiper('.mainslider__body', {
		observer: true,
		observeParents: false,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: true,
		speed: 800,
		// Dotts
		pagination: {
			el: '.mainslider__dotts',
			clickable: true,
		},
	});
	let mainsliderImages = document.querySelectorAll('.mainslider__image');
	let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
	for (let index = 0; index < mainsliderImages.length; index++) {
		const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
		mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
	}
}
//Инициализация и Настройки слайдера 2
if (document.querySelector('.products-slider')) {
	let productsSlider = new Swiper('.products-slider__body', {
		observer: true,
		observeParents: false,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		// Dotts
		pagination: {
			el: '.products-slider__info',
			// clickable: true,
			type: 'fraction',
		},
		// Arrows
		navigation: {
			nextEl: '.products-slider__arrow_next',
			prevEl: '.products-slider__arrow_prev',
		},
	});
}
//Инициализация и Настройки слайдера 3
if (document.querySelector('.brands-slider')) {
	let brandsSlider = new Swiper('.brands-slider__body', {
		observer: true,
		observeParents: false,
		slidesPerView: 5,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		// loop: true,
		// loopAdditionalSlides: 1,
		// Arrows
		navigation: {
			nextEl: '.brands-slider__arrow_next',
			prevEl: '.brands-slider__arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},

		},
	});
}

//Инициализация и Настройки слайдера 4
if (document.querySelector('.images-product')) {

	//Инициализация и Настройки слайдера 5
	let imagesSubSlider = new Swiper('.images-product__subslider', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		// loop: true,
		// loopAdditionalSlides: 1,
	});
	let imagesSlider = new Swiper('.images-product__mainslider', {
		observer: true,
		observeParents: false,
		slidesPerView: 1,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		// loop: true,
		// loopAdditionalSlides: 1,
		thumbs: {
			swiper: imagesSubSlider
		},
	});
}

/* //шаблон с Настройками слайдера
if (document.querySelector('.slider-rooms__body')) {
	new Swiper('.slider-rooms__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		slideToClickedSlide: false,
		touchRatio: 0,
		simulateTouch: false,
		parallax: true,
		effect: 'fade',
		// Autoplay
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		// Dots
		pagination: {
			el: '.slider-rooms__dotts',
			clickable: true,
			type: 'fraction',
		},
		// Arrows
		navigation: {
			nextEl: '.slider-rooms .slider-arrow_next',
			prevEl: '.slider-rooms .slider-arrow_prev',
		},
		// ScroLLbar
	scroLLbar: {
		el: '.swiper-scrollbar',
	},
	
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
		})
}
*/