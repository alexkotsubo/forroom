'use strict';

/* Things */

const thingsWrap = document.querySelector('.things__wrap');

window.addEventListener('DOMContentLoaded', e => {
	if (thingsWrap) {
		const thingsBtns = document.querySelectorAll('.things__btn');
		const thingsImage = document.querySelectorAll('.things__image');
		let prevTab = 0;

		for (let i = 0; i < thingsBtns.length; i++) {
			thingsBtns[prevTab].classList.add('active');
			thingsImage[prevTab].classList.add('active');

			thingsBtns[i].addEventListener('click', e => {
				if (prevTab !== null) {
					thingsBtns[prevTab].classList.remove('active');
					thingsImage[prevTab].classList.remove('active');
				}
				thingsBtns[i].classList.add('active');
				thingsImage[i].classList.add('active');
				prevTab = i;
			});
		}
	}
});