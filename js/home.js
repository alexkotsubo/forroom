'use strict';

/* Header Slider */

window.addEventListener('DOMContentLoaded', e => {
	const headerImages = document.querySelectorAll('#header .header__images-image');
	const seconds = 5.5 * 1000;
	const step = 0.15 * 1000;
	let i = 0;
	const setActive = i => {
		headerImages[i].classList.add('active');
		headerImages[i].style.opacity = '.7';
		setTimeout(() => {
			headerImages[i].style.opacity = '1';
		}, step);
		setTimeout(() => {
			headerImages[i].style.opacity = '.7';
		}, seconds - step);
	};
	const unsetActive = i => {
		setTimeout(() => {
			headerImages[i].classList.remove('active');
			headerImages[i].style.opacity = '0';
		}, step);
	};

	setActive(i);
	i += 1;

	setInterval(() => {
		if (i === headerImages.length) {
			i = 1;
			unsetActive(headerImages.length - 1);
			setActive(0);
			return;
		}

		if (i) unsetActive(i - 1);
		setActive(i);
		i += 1;
	}, seconds);
});

/* Header Text Effect */

const headerTitle = document.querySelector('.header__content-title');
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

/* About Slider */

const aboutSlider = new Swiper('.about__slider-wrap', {
	loop: true,
	spaceBetween: 10,
	speed: 600,
	autoplay: { delay: 5000 },
});

/* Dropdown */

const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdown = document.querySelector('.dropdown');

dropdownBtn.addEventListener('click', e => {
	dropdown.classList.toggle('active');
});