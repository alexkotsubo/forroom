'use strict';

/* Header Text Effect */

const headerTitle = document.querySelector('.header__content-title');

if (headerTitle) {
	const headerTitleHTML = headerTitle.innerHTML;
	let headerTitleStep = 0;

	headerTitle.innerHTML = '';
	for (let i = 0; i < headerTitleHTML.length; i++) {
		const element = document.createElement('span');
		element.innerHTML = headerTitleHTML[i];
		headerTitle.appendChild(element);
		headerTitleStep += 50;
		element.style.animationDelay = headerTitleStep / 1000 + 's';
	}
}

/* About Slider */

const aboutSlider = new Swiper('.about__slider-wrap', {
	loop: true,
	spaceBetween: 10,
	speed: 600,
	autoplay: { delay: 5000 },
});