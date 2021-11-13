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

/* Forum Tabs */

const forumTabs = document.querySelectorAll('.forum-tab');

window.addEventListener('DOMContentLoaded', e => {
	if (forumTabs) {
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

/* Forum Section Tabs */

const forumSectionTabs = document.querySelectorAll('.forum__tab');

window.addEventListener('DOMContentLoaded', e => {
	if (forumSectionTabs) {
		const forumSectionBtns = document.querySelectorAll('.forum__btns-btn');
		let prevTab = 0;
		for (let i = 0; i < forumSectionBtns.length; i++) {
			forumSectionBtns[prevTab].classList.add('active');
			forumSectionTabs[prevTab].classList.add('active');

			forumSectionBtns[i].addEventListener('click', e => {
				if (prevTab !== null) {
					forumSectionBtns[prevTab].classList.remove('active');
					forumSectionTabs[prevTab].classList.remove('active');
				}
				forumSectionBtns[i].classList.add('active');
				forumSectionTabs[i].classList.add('active');
				prevTab = i;
			});
		}
	}
});