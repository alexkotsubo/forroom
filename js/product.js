'use strict';

/* Parallax */

const productContent = document.querySelector('.product__content');
let offsetY = -(pageYOffset * 1.05);
productContent.style.backgroundPosition = 'center ' + offsetY + 'px';

window.addEventListener('scroll', e => {
	offsetY = -(pageYOffset * 1.05);
	productContent.style.backgroundPosition = 'center ' + offsetY + 'px';
});