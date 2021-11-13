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

/* Packages */

const packagesCart = document.querySelectorAll('.packages__cart');
const packagesCartWrap = document.querySelectorAll('.packages__cart-wrap');
const packagesCarts = document.querySelector('.packages__carts');

packagesCart[0].classList.add('active');

window.addEventListener('DOMContentLoaded', e => {
	let setCartHeight = () => {};

	const startPackagesCarts = e => {
		if (document.documentElement.clientWidth < 768) {
			for (let i = 0; i < packagesCart.length; i++) {
				if (i !== 0) {
					packagesCart[i].style.height = '125px';
				} else {
					packagesCart[i].style.height = packagesCartWrap[i].offsetHeight + 2 + 'px';
				}
			}
			setCartHeight = i => {
				packagesCart[i].onmouseenter = e => {
					if (i !== 0) {
						packagesCart[0].classList.remove('active');
						packagesCart[0].style.height = '125px';
					} else {
						return;
					}
					packagesCart[i].style.height = packagesCartWrap[i].offsetHeight + 2 + 'px';
					packagesCart[i].classList.add('active');
				};
				packagesCart[i].onmouseleave = e => {
					packagesCart[i].style.height = '125px';
					packagesCart[i].classList.remove('active');
					console.log(packagesCartWrap[i].offsetHeight)
					packagesCart[0].style.height = packagesCartWrap[0].offsetHeight + 2 + 'px';
					packagesCart[0].classList.add('active');
				};
			}
		} else {
			for (let i = 0; i < packagesCart.length; i++) {
				packagesCart[i].style.height = 'unset';
			}
			setCartHeight = i => {
				packagesCart[i].onmouseenter = e => {
					if (i !== 0) {
						packagesCart[0].classList.remove('active');
					} else {
						return;
					}
					packagesCart[i].classList.add('active');
				};
				packagesCart[i].onmouseleave = e => {
					packagesCart[i].classList.remove('active');
					packagesCart[0].classList.add('active');
				};
			}
		}
	};

	startPackagesCarts();
	window.addEventListener('resize', startPackagesCarts);
	for (let i = 0; i < packagesCart.length; i++) {
		if (document.documentElement.clientWidth < 768) {
			if (i !== 0) {
				packagesCart[i].style.height = '125px';
			} else {
				packagesCart[i].style.height = packagesCartWrap[i].offsetHeight + 2 + 'px';
			}
		}
		setCartHeight(i);
	}
});

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