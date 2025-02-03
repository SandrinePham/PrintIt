const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;


const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');


function updateCarousel() {
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  
	bannerText.innerHTML = slides[currentSlide].tagLine;
  
	dots.forEach((dot, index) => {
	  dot.classList.toggle('dot_selected', index === currentSlide);
	});
  }
  arrowLeft.addEventListener('click', () => {
	currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
	updateCarousel();
  });
  
  arrowRight.addEventListener('click', () => {
	currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
	updateCarousel();
  });
	