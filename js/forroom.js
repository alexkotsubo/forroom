'use strict';

/* Header Text Change */

const headerExamples = document.querySelectorAll('.header__texts-examples span');
const headerText = document.querySelector('.header__texts-text');
const headerTextSpan = document.querySelector('.header__texts-text span');

headerTextSpan.innerHTML = headerExamples[0].innerHTML;

window.onload = e => {
	let headerTextIndex = 0;

	const setActive = i => {
		headerTextSpan.innerHTML = headerExamples[i].innerHTML;
		headerText.style.width = headerExamples[i].offsetWidth + 11 + 'px';
		setTimeout(() => {
			headerText.style.width = '0px';
		}, 2000);
	};

	setActive(headerTextIndex);
	headerTextIndex += 1;

	setInterval(() => {
		if (headerTextIndex === headerExamples.length) headerTextIndex = 0;
		setActive(headerTextIndex);
		headerTextIndex += 1;
	}, 2500);
};

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

if (packagesCarts) {
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
}