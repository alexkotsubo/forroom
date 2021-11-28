'use strict';

/* Header With Hover */

window.addEventListener('DOMContentLoaded', e => {
	const headerSlider = document.querySelector('#header .header__slider');
	const headerSlides = document.querySelectorAll('#header .header__slider-image');
	const headerWrap = document.querySelector('#header .header__wrap');

	headerSlides[0].classList.add('active');

	headerWrap.addEventListener("mouseenter", e => {
		headerSlider.classList.add('active');
		headerSlides[0].classList.remove('active');
		headerSlides[1].classList.add('active');
	});

	headerWrap.addEventListener("mouseleave", e => {
		headerSlider.classList.remove('active');
		headerSlides[1].classList.remove('active');
		headerSlides[0].classList.add('active');
	});
});