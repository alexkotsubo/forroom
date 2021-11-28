/* Burger */

const lostBurgerOpen = document.querySelector('.lost__burger');

if (lostBurgerOpen) {
	const lostBurgerOpen = document.querySelector('.lost__burger-open');
	const lostBurgerClose = document.querySelector('.lost__burger-close');
	const lostBurgerMenu = document.querySelector('.lost__burger-menu');

	lostBurgerOpen.classList.add('active');

	lostBurgerOpen.addEventListener('click', e => {
		lostBurgerMenu.classList.add('active');
		lostBurgerOpen.classList.remove('active');
		lostBurgerClose.classList.add('active');
	});

	lostBurgerClose.addEventListener('click', e => {
		lostBurgerMenu.classList.remove('active');
		lostBurgerClose.classList.remove('active');
		lostBurgerOpen.classList.add('active');
	});
}