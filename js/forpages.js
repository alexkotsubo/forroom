'use strict';

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