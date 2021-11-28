'use strict';

/* Operation Slider */

const operationSlider = new Swiper('.operation__operation-slider .swiper', {
	loop: true,
	speed: 400,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false
	},
	spaceBetween: 10,
});