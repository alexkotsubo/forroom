'use strict';

/* Header Text Effect */

const headerTitle = document.querySelector('.header__content-title');

if (headerTitle) {
	window.addEventListener('DOMContentLoaded', e => {
		const spans = document.querySelectorAll('.header__content-title > span');
		let currentTab = 0;
		let steps = [];
		let maxSteps = [];
		let startSeconds = 6000;

		for (let i = 0; i < spans.length; i++) {
			const word = spans[i].innerHTML;
			spans[i].innerHTML = '';
			let step = 0.1;
			let maxStep = +(word.length * 0.1 + 0.1).toFixed(1) * 1000;
			let seconds = maxStep + startSeconds;
			steps.push(seconds);
			maxSteps.push(maxStep);

			for (let j = 0; j < word.length; j++) {
				const span = document.createElement('span');
				span.innerHTML = word[j];
				span.style.animationDelay = step + 's';
				step += 0.1;
				spans[i].appendChild(span);
			}
		}

		let prevSpan = 0;
		const setTimeoutForSpan = i => {
			spans[prevSpan].classList.remove('active');
			spans[i].classList.add('active');

			const innerSpans = spans[i].querySelectorAll('span');

			const setTimeoutForInnerSpan = j => {
				innerSpans[j].style.animationName = 'showHeaderText';

				setTimeout(() => {
					innerSpans[j].style.animationName = 'hideHeaderText';
				}, startSeconds - 2000);
			};

			for (let a = 0; a < innerSpans.length; a++) {
				setTimeoutForInnerSpan(a);
			}

			setTimeout(() => {
				if (i === spans.length - 1) {
					setTimeoutForSpan(0);
					return;
				}
				setTimeoutForSpan(i + 1);
			}, steps[i]);
			prevSpan = i;
		};
		setTimeoutForSpan(prevSpan);
	});
}