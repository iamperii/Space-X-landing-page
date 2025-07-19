const slide = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.button');

let currentIndex = 0;

const showSlide = (index) => {
	slide.forEach((s) => s.classList.remove('active'));
	buttons.forEach((b) => b.classList.remove('buttonActive'));

	slide[index].classList.add('active');
	buttons[index].classList.add('buttonActive');
	currentIndex = index;
};

buttons.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		showSlide(index);
	});
});

setInterval(() => {
	const nextIndex = (currentIndex + 1) % slide.length;
	showSlide(nextIndex);
}, 5900);

showSlide(0);

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const mobileMenu = document.querySelector('.mobileMenu');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.style.display = 'none';
	mobileMenu.classList.toggle('active');
	overlay.classList.toggle('active');

	overlay.addEventListener('click', () => {
		hamburgerMenu.style.display = 'block';
		mobileMenu.classList.remove('active');
		overlay.classList.remove('active');
	});
});
