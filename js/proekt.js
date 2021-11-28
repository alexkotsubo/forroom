'use strict';

/* Proekt Effect */

const proektTitle = document.querySelector('.proekt__about-title');

if (proektTitle) {
	window.addEventListener('DOMContentLoaded', e => {
		const title = document.querySelector('.proekt__about-title');
		let currentTab = 0;
		let steps = [];
		let maxSteps = [];
		let startSeconds = 6000;

		const word = title.innerHTML;
		title.innerHTML = '';
		let step = 0.1;
		let maxStep = +(word.length * 0.1 + 0.1).toFixed(1) * 1000;
		let seconds = maxStep + startSeconds;
		steps.push(seconds);
		maxSteps.push(maxStep);

		for (let j = 0; j < word.length; j++) {
			const span = document.createElement('span');
			if (word[j] === ' ') {
				span.innerHTML = '&nbsp;';
			} else {
				span.innerHTML = word[j];
			}
			span.style.animationDelay = step + 's';
			step += 0.1;
			title.appendChild(span);
		}

		const setTimeoutForSpan = () => {
			const innerSpans = title.querySelectorAll('span');

			const setTimeoutForInnerSpan = j => {
				innerSpans[j].style.animationName = 'proektShowText';

				setTimeout(() => {
					innerSpans[j].style.animationName = 'proektHideText';
				}, startSeconds - 2000);
			};

			for (let a = 0; a < innerSpans.length; a++) {
				setTimeoutForInnerSpan(a);
			}

			setTimeout(() => {
				setTimeoutForSpan();
			}, steps[0]);
		};
		setTimeoutForSpan();
	});
}