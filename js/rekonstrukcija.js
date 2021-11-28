'use strict';

/* House Slider */

const houseSlider = new Swiper('.house__slider .swiper', {
	loop: true,
	speed: 400,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false
	},
});

/* Steps Images */

window.addEventListener('DOMContentLoaded', e => {
	const stepsImagesContainers = document.querySelectorAll('.steps__step-images');
	if (stepsImagesContainers.length) {
		for (let i = 0; i < stepsImagesContainers.length; i++) {
			const stepsImages = stepsImagesContainers[i].querySelectorAll('.steps__step-image');
			let index = 0;
		
			stepsImages[index].classList.add('active');
			index += 1;
		
			setInterval(() => {
				if (index === stepsImages.length) {
					index = 1;
					stepsImages[stepsImages.length - 1].classList.remove('active');
					stepsImages[0].classList.add('active');
					return;
				}
		
				if (index) stepsImages[index - 1].classList.remove('active');
				stepsImages[index].classList.add('active');
				index += 1;
			}, 6000);
		}
	}
});