'use strict';

/* Implement Slider */

const implementSlider = new Swiper('.implement__slider .swiper', {
	loop: true,
	allowTouchMove: false,
	speed: 400,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false
	},
});

/* Steps Slider */

const stepsSlider = new Swiper('.steps__step_slider .swiper', {
	loop: true,
	speed: 400,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false
	},
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

/* Projects Slider */

let prevSlide = null;
const projectsSlider = new Swiper('.projects__slider .swiper', {
	loop: true,
	speed: 400,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.projects__slider-next',
		prevEl: '.projects__slider-prev',
	},
	on: {
		slideChangeTransitionEnd: swiper => {
			const active = document.querySelector('.projects__slider .swiper-slide-active');
			active.classList.add('active');
			if (prevSlide) {
				prevSlide.classList.remove('active');
			}
			prevSlide = active;
			active.classList.add('active');
		},
	},
});