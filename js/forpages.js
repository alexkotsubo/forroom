'use strict';

/* Brands Slider */

const brandsSlider = new Swiper('.brands__slider', {
	loop: true,
	slidesPerView: 3,
	speed: 400,
	autoplay: { delay: 5000 },
	breakpoints: {
		992: {
			slidesPerView: 5,
		},
		768: {
			slidesPerView: 4,
		}
	}
});

/* Tabs */

const workTabs = document.querySelectorAll('.work__tab');
const workBtnsBtn = document.querySelectorAll('.work__btns-btn');

if (workTabs.length === workBtnsBtn.length) {
	let prevTab = 0;

	workTabs[0].classList.add('active');
	workBtnsBtn[0].classList.add('active');

	for (let i = 0; i < workBtnsBtn.length; i++) {
		workBtnsBtn[i].addEventListener('click', e => {
			if (prevTab !== null) {
				workTabs[prevTab].classList.remove('active');
				workBtnsBtn[prevTab].classList.remove('active');
			}
			workTabs[i].classList.add('active');
			workBtnsBtn[i].classList.add('active');
			prevTab = i;
		});
	}
}

/* Compare Slider */

const compareSliders = document.querySelectorAll('.compare-slider');

if (compareSliders) {
	for (let i = 0; i < compareSliders.length; i++) {
		const compareSliderLeft = compareSliders[i].querySelector('.compare-slider__left');
		const compareSliderControl = compareSliders[i].querySelector('.compare-slider__control');
		const compareSliderWrap = compareSliders[i].querySelector('.compare-slider__wrap');
		const startPosition = compareSliders[i].getAttribute('data-start-position');

		compareSliderLeft.style.width = startPosition;
		compareSliderControl.style.left = startPosition;

		const moveSlider = e => {
			let position = e.pageX - compareSliders[i].offsetLeft;
			if (position > compareSliders[i].offsetWidth) position = compareSliders[i].offsetWidth;
			compareSliderLeft.style.width = position / compareSliders[i].offsetWidth * 100 + '%';
			compareSliderControl.style.left = position / compareSliders[i].offsetWidth * 100 + '%';
		};

		compareSliders[i].addEventListener('mousedown', e => {
			compareSliders[i].classList.add('transition');
			moveSlider(e);
			compareSliders[i].onmousemove = e => {
				compareSliders[i].classList.remove('transition');
				moveSlider(e);
			};
		});
		compareSliders[i].addEventListener('mouseup', e => {
			compareSliders[i].onmousemove = () => {};
		});
	}
}