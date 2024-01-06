const swiper = new Swiper('.swiper', {
	loop: false,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
	a11y: {
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
	},
	slidesPerView: 1,
	speed: 1500,
	autoplay: {
		delay: 4500,
	},
});

document.addEventListener('DOMContentLoaded', function() {
	var lazyAnimations = [].slice.call(document.querySelectorAll('.animate'));
	var lazyMoves = [].slice.call(document.querySelectorAll('.move'));
	if ('IntersectionObserver' in window) {
		let lazyAnimationObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
				}
			});
		});
		lazyAnimations.forEach(function(lazyAnimation) {
			lazyAnimationObserver.observe(lazyAnimation);
		});
		lazyMoves.forEach(function(lazyMove) {
			lazyAnimationObserver.observe(lazyMove);
		});
	}
});

const nav_body = document.querySelector('body');
const navToggle = document.querySelector('#mobile-nav');
const navList = document.querySelector('nav');
if (navToggle) {
	navToggle.addEventListener('click', function() {
		if (navList.style.display === 'none') {
			this.setAttribute('aria-expanded', 'true');
			navList.style.display = 'block';
			nav_body.classList.add('menu-open');
			nav_body.style.overflow = 'hidden';
		} else {
			navList.style.display = 'none';
			this.setAttribute('aria-expanded', 'false');
			nav_body.classList.remove('menu-open');
			nav_body.style.overflow = 'unset';
		}
	});
}
