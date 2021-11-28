'use strict';
let activeFixedMenu = false;
let fixedPadding = document.querySelectorAll('.fixed-padding');
const body = document.querySelector('body');
const nav = document.querySelector('#nav');

/* IB */

function ib() {
	let ib = document.querySelectorAll(".ib");
	for (let i = 0; i < ib.length; i++) {
		if (ib[i].querySelector('.ib_use')) {
			ib[i].style.backgroundImage = 'url(' + ib[i].querySelector('.ib_use').getAttribute('src') + ')';
		}
	}
}

ib();

/* Header Slider */

window.addEventListener('DOMContentLoaded', e => {
	const headerImages = document.querySelectorAll('#header .header__images-image');
	if (headerImages.length) {
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
	}
});

/* Burger */

addBurger(document.querySelector('#nav-burger'));

function addBurger(elem) {
	if (elem) {
		const button = document.querySelector('#' + elem.id + ' .burger__btn');
		const links = document.querySelectorAll('#' + elem.id + ' .burger__link');
		const menu = document.querySelector('#' + elem.id + ' .burger__menu');
		const bgElem = document.querySelector('#' + elem.id + ' .burger__bg');
		let burgerClose;

		if (button && links && bgElem) {
			burgerClose = document.querySelector('#' + elem.id + ' .burger__close-btn');
			burgerClose.addEventListener('click', function(e) {
				elem.classList.remove('active');
				burgBodyUnLock();
				menu.classList.add('keep-property');
				setTimeout(() => {
					menu.classList.remove('keep-property');
				}, 1200);
			});

			elem.classList.remove('active');
			burgBodyUnLock();

			button.addEventListener('click', function(e) {
				let popupActive = document.querySelector('.popup.open');

				if (popupActive) {
					closePopup(popupActive, false);
				}

				if (!elem.classList.contains('active')) {
					elem.classList.add('active');
					burgBodyLock();
				}
			});

			for(let i = 0, length = links.length; i < length; i++) {
				links[i].addEventListener('click', function(e) {
					elem.classList.remove('active');
					burgBodyUnLock();
				});
			}

			document.documentElement.addEventListener('click', function(e) {
				if ((!e.target.closest('.burger') && elem.classList.contains('active')) || (e.target.closest('.' + bgElem.classList) && elem.classList.contains('active'))) {
					elem.classList.remove('active');
					burgBodyUnLock();
					menu.classList.add('keep-property');
					setTimeout(() => {
						menu.classList.remove('keep-property');
					}, 1200);
				}
			});
		}
	}
}

function burgBodyLock() {
	let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (fixedPadding.length > 0) {
		for(let i = 0, length = fixedPadding.length; i < length; i++) {
			fixedPadding[i].style.paddingRight = paddingValue;
		}
	}

	body.style.paddingRight = paddingValue;
	body.classList.add('lock');
}

function burgBodyUnLock() {
	setTimeout(helpFunction, 300);
	function helpFunction() {
		if (fixedPadding.length > 0) {
			for(let i = 0, length = fixedPadding.length; i < length; i++) {
				fixedPadding[i].style.paddingRight = '0px';
			}
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}
}

/* Navigation */

const navAddPadding = document.querySelectorAll('.nav-add-padding');
const navAddMargin = document.querySelectorAll('.nav-add-margin');

if (navAddPadding.length) {
	for (let i = 0; i < navAddPadding.length; i++) {
		navAddPadding[i].style.paddingTop = `${nav.offsetHeight}px`;
		window.addEventListener('resize', e => {
			navAddPadding[i].style.paddingTop = `${nav.offsetHeight}px`;
		});
	}
}

if (navAddMargin.length) {
	for (let i = 0; i < navAddMargin.length; i++) {
		navAddMargin[i].style.marginTop = `${nav.offsetHeight}px`;
		window.addEventListener('resize', e => {
			navAddMargin[i].style.marginTop = `${nav.offsetHeight}px`;
		});
	}
}

/* Popup */

const popupBtn = document.querySelectorAll('[data-open-popup]');
const closePopupBtn = document.querySelectorAll('.popup__close');

const closePopup = elem => {
	elem.classList.remove('open');
	body.classList.remove('lock');
};

const openPopup = elem => {
	if (elem) {
		const popupActive = document.querySelector('.popup.open');

		if (popupActive) closePopup(popupActive, false);
		else body.classList.add('lock');

		elem.classList.add('open');
		elem.addEventListener('click', e => {
			if (!e.target.closest('.popup__body')) closePopup(e.target.closest('.popup'));
		});
	}
};

if (popupBtn.length > 0) {
	for (let i = 0, length = popupBtn.length; i < length; i++) {
		popupBtn[i].addEventListener('click', e => {
			openPopup(document.getElementById(popupBtn[i].getAttribute('data-open-popup')));
		});
	}
}

if (closePopupBtn.length > 0) {
	for (let i = 0, length = closePopupBtn.length; i < length; i++) {
		closePopupBtn[i].addEventListener('click', e => {
			closePopup(closePopupBtn[i].closest('.popup'));
		});
	}
}

document.addEventListener('keydown', e => {
	if (e.which === 27) closePopup(document.querySelector('.popup.open'));
});

const popupBody = document.querySelectorAll('.popup__body');

const centerPopup = e => {
	for (let i = 0; i < popupBody.length; i++) {
		const value = (document.documentElement.clientHeight - popupBody[i].offsetHeight) / 2;
		if (value < 0) {
			popupBody[i].style.marginTop = '0px';
			return;
		}
		popupBody[i].style.marginTop = value + 'px';
	}
};

window.addEventListener('resize', centerPopup);
centerPopup();

/* Aminate Page */

const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	const offset = elem => {
		const rect = elem.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
	};

	const animItemsFunc = () => {
		for(let i = 0, length = animItems.length; i < length; i++) {
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItems[i].offsetHeight / animStart;

			if (animItems[i].offsetHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > offset(animItems[i]).top - animItemPoint) && pageYOffset < (offset(animItems[i]).top + animItems[i].offsetHeight)) {
				animItems[i].classList.add('active');
			}
		}
	};

	window.addEventListener('scroll', animItemsFunc);
	setTimeout(animItemsFunc, 300);
}

/* Text */

if (document.querySelector('.text')) {
	const textBody = document.querySelector('.text__body');
	const textBtns = document.querySelectorAll('.text__btns-btn');
	const textStartHeight = '60px';

	textBody.style.height = textStartHeight;

	textBtns[0].addEventListener('click', e => {
		textBtns[0].classList.remove('active');
		textBtns[1].classList.add('active');
		textBody.style.height = document.querySelector('.text__body-wrap').offsetHeight + 'px';
	});

	textBtns[1].addEventListener('click', e => {
		textBody.style.height = textStartHeight;
		textBtns[1].classList.remove('active');
		textBtns[0].classList.add('active');
	});
}

/* Dropdown */

const dropdown = document.querySelector('.dropdown');

if (dropdown) {
	const dropdownBtn = document.querySelector('.dropdown__btn');
	
	dropdownBtn.addEventListener('click', e => {
		dropdown.classList.toggle('active');
	});
}

/* Forum Tabs */

const forumTabs = document.querySelectorAll('.forum-tab');

window.addEventListener('DOMContentLoaded', e => {
	if (forumTabs.length) {
		for (let i = 0; i < forumTabs.length; i++) {
			const nav = forumTabs[i].querySelector('.forum-tab__nav');
			const content = forumTabs[i].querySelector('.forum-tab__content');
			const wrap = forumTabs[i].querySelector('.forum-tab__wrap');
			let open = false;

			content.style.height = '0px';

			nav.addEventListener('click', e => {
				forumTabs[i].classList.toggle('active');
				console.log(wrap)
				if (!open) {
					content.style.height = wrap.offsetHeight + 'px';
					open = true;
					return;
				}
				content.style.height = '0px';
				open = false;
			});
		}
	}
});

/* Section Tabs */

const tabsNames = ['forum', 'portfolio'];

window.addEventListener('DOMContentLoaded', e => {
	for (let i = 0; i < tabsNames.length; i++) {
		const sectionTabs = document.querySelectorAll(`.${tabsNames[i]}__tab`);
		if (sectionTabs.length) {
			const sectionBtns = document.querySelectorAll(`.${tabsNames[i]}__btns-btn`);
			let prevTab = 0;
			for (let i = 0; i < sectionBtns.length; i++) {
				sectionBtns[prevTab].classList.add('active');
				sectionTabs[prevTab].classList.add('active');
	
				sectionBtns[i].addEventListener('click', e => {
					if (prevTab !== null) {
						sectionBtns[prevTab].classList.remove('active');
						sectionTabs[prevTab].classList.remove('active');
					}
					sectionBtns[i].classList.add('active');
					sectionTabs[i].classList.add('active');
					prevTab = i;
				});
			}
		}
	}
});

/* Compare Slider */

const compareSliders = document.querySelectorAll('.compare-slider');

if (compareSliders.length) {
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

/* Brands Slider */

const brandsSlider = document.querySelector('.brands__slider');

if (brandsSlider) {
	new Swiper('.brands__slider', {
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
}

/* Advantages Lightgallery */

if (document.querySelector('#advantages-lightgallery')) {
	lightGallery(document.querySelector('#advantages-lightgallery'));
}

/* Proekt Lightgallery */

if (document.querySelector('#proekt-lightgallery')) {
	lightGallery(document.querySelector('#proekt-lightgallery'));
}

/* Proekt Images Lightgallery */

if (document.querySelector('#proekt__images-main')) {
	lightGallery(document.querySelector('#proekt__images-main'));
}

if (document.querySelector('#proekt__images-secondary')) {
	lightGallery(document.querySelector('#proekt__images-secondary'));
}