import "./index.scss";
import "./scripts/helpers";

//libraries
import Swiper from "swiper";
import { TweenMax, TimelineMax, CSSPlugin } from "gsap/all";
const plugins = [TweenMax, TimelineMax, CSSPlugin];
import ScrollMagic from "scrollmagic";
import animation from "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import addIndicators from "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

// import js module files
// import './scripts/animations/videoModal';

const _wh = window.innerHeight;
const _ww = window.innerWidth;

const img1 = document.querySelectorAll(".img1-js");
const img2 = document.querySelectorAll(".img2-js");

const info = document.querySelectorAll(".info-js");
const title = document.querySelectorAll(".title-js");

const ctaWeb = document.querySelectorAll(".cta-web");
const ctaGit = document.querySelectorAll(".cta-git");

// SLIDER PROJECTS INIT
var swiperHorizontal = new Swiper(".swiper-container-projects", {
	direction: "vertical",
	speed: 1800,
	noSwiping: true,
	simulateTouch: false,
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar"
	},
	progressbarFillClass: "swiper-pagination-progressbar-fill",
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});

// NEXT SLIDE ANIMATION
swiperHorizontal.on("slideNextTransitionStart", function() {
	const isActive = swiperHorizontal.activeIndex;
	const wasActive = swiperHorizontal.previousIndex;
	const nextSlide = swiperHorizontal.slides[isActive + 1];

	img1.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				1.95,
				{ y: 400, rotation:0.01, ease: Power2.easeOut },
				{ y: 0, rotation:0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				0.8,
				{ y: 0, rotation:0.01, ease: Power2.easeIn },
				{ y: -600, rotation:0.01, ease: Power2.easeIn }
			);
		}
	});

	img2.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				2.5,
				{ y: 200, rotation:0.01, ease: Power2.easeOut },
				{ y: 0, rotation:0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				1.1,
				{ y: 0, rotation:0.01, ease: Power2.easeIn },
				{ y: -300, rotation:0.01, ease: Power2.easeIn }
			);
		}
	});

	info.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				1.65,
				{ opacity: 0, y: 500, rotation:0.01, ease: Power2.easeOut },
				{ opacity: 1, y: 0, rotation:0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				0.95,
				{ y: 0, rotation:0.01, ease: Power2.easeIn },
				{ y: -400, rotation:0.01, ease: Power2.easeIn }
			);
		}
	});

	title.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				2.3,
				{ y: 250, rotation:0.01, ease: Power3.easeOut },
				{ y: 0, rotation:0.01, ease: Power3.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				1,
				{ y: 0, rotation:0.01, ease: Power2.easeIn },
				{ y: -500, rotation:0.01, ease: Power2.easeIn }
			);
		}
	});

	ctaWeb.forEach((cta, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				cta,
				1.95,
				{ y: 450, rotation:0.01, ease: Power3.easeOut },
				{ y: 0, rotation:0.01, ease: Power3.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				cta,
				1,
				{ y: 0, rotation:0.01, ease: Power2.easeIn },
				{ y: -500, rotation:0.01, ease: Power2.easeIn }
			);
		}
	});

	ctaGit.forEach((cta, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				cta,
				2.3,
				{ y: 300, rotation:0.01, ease: Power2.easeOut },
				{ y: 0, rotation:0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				cta,
				1.1,
				{ y: 0, rotation:0.01, ease: Power2.easeIn },
				{ y: -300, rotation:0.01, ease: Power2.easeIn }
			);
		}
	});

	// move name slider
	const slideF = document.querySelectorAll(".swiper-slide-name-slider");
	slideF.forEach(item => {
		filmSlideF(item);
	});
});

// PREVIOUS SLIDE ANIMATION
swiperHorizontal.on("slidePrevTransitionStart", function() {
	const isActive = swiperHorizontal.activeIndex;
	const wasActive = swiperHorizontal.previousIndex;

	img1.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				1.95,
				{ y: -400, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: 400, ease: Power2.easeIn }
			);
		}
	});

	img2.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				2.5,
				{ y: -200, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: 200, ease: Power2.easeIn }
			);
		}
	});

	info.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				1.65,
				{ opacity: 0, y: -500, ease: Power2.easeOut },
				{ opacity: 1, y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: 300, ease: Power2.easeIn }
			);
		}
	});

	title.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				2.3,
				{ y: -250, ease: Power3.easeOut },
				{ y: 0, ease: Power3.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: 300, ease: Power2.easeIn }
			);
		}
	});

	ctaWeb.forEach((cta, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				cta,
				1.95,
				{ y: -400, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				cta,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: 400, ease: Power2.easeIn }
			);
		}
	});

	ctaGit.forEach((cta, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				cta,
				2.53,
				{ y: -300, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				cta,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: 200, ease: Power2.easeIn }
			);
		}
	});

	//move name slider
	const slideR = document.querySelectorAll(".swiper-slide-name-slider");
	slideR.forEach(item => {
		filmSlideR(item);
	});
});

// DISABLE BUTTON ON DURING CHANGE
swiperHorizontal.on("slideChangeTransitionStart", function() {
	document
		.querySelector(".swiper-button-next")
		.classList.add("swiper-button-disabled");
	document
		.querySelector(".swiper-button-prev")
		.classList.add("swiper-button-disabled");
});

// ACTIVATE BUTTON ON AFTER CHANGE
swiperHorizontal.on("slideChangeTransitionEnd", function() {
	document
		.querySelector(".swiper-button-next")
		.classList.remove("swiper-button-disabled");
	document
		.querySelector(".swiper-button-prev")
		.classList.remove("swiper-button-disabled");
});

// SLIDER NAME INIT
var swiperVertical = new Swiper(".swiper-container-name-slider", {
	direction: "vertical",
	simulateTouch: false,
	spaceBetween: 0
});

// NAME SLIDER ANIMATION
// +1 because 1st project-slide is already 'on'
const horizonatlIndex = swiperHorizontal.slides.length + .5;
const slideVH = (_wh * 3.5).toFixed(0);
const slideMovement = (slideVH / horizonatlIndex).toFixed(0);
const setSlideHeight = document.querySelectorAll(".swiper-slide-name-slider");

console.log(horizonatlIndex);
console.log(slideVH);
console.log(slideMovement);

document.addEventListener("DOMContentLoaded", () => {
	setSlideHeight.forEach(slide => {
		slide.style.height = slideVH + "px";
	});
});
window.addEventListener("resize", () => {
	setSlideHeight.forEach(slide => {
		slide.style.height = slideVH + "px";
	});
});

const filmSlideF = item => {
	TweenMax.to(item, 1.8, {
		y: `-=${slideMovement}`,
		onComplete: function() {}
	});
};

const filmSlideR = item => {
	TweenMax.to(item, 1.8, {
		y: `+=${slideMovement}`,
		onComplete: function() {}
	});
};

// CTA HOVER ANIMATION
document.querySelectorAll('.cta-js').forEach(cta => {

	const tl = new TimelineLite({paused:true});

	cta.addEventListener('mouseenter', function () {
		if (this.classList.contains('cta-git')){
			tl.to(this, .3, {boxShadow: 'inset  0 -100px 0 0 black'}).play();
		} else {
			tl.to(this, .3, {boxShadow: 'inset  0 100px 0 0 black'}).play();
		}
		let text = this.querySelector('p')
		TweenMax.to(text, .4, {color: 'white'})
	})
	//
	cta.addEventListener('mouseleave', function () {
		if (this.classList.contains('cta-git')){
			tl.to(this, 0, {boxShadow: 'inset  0 -100px 0 0 black'}).reverse();
		} else {
			tl.to(this, 0, {boxShadow: 'inset  0 100px 0 0 black'}).reverse();
		}
		let text = this.querySelector('p')
		TweenMax.to(text, .4, {color: 'black'})
	})

})

// ARROW ANIMATION
document.querySelectorAll('.arrow-js').forEach(arrow => {

	const tl2 = new TimelineLite();
	arrow.addEventListener('click', function () {
			tl2.fromTo(this, .05, {css:{scale:1}}, {css:{scale:1.15}})
			.fromTo(this, .05, {css:{scale:1.15}}, {css:{scale:1}})
	})

	swiperHorizontal.on('transitionEnd', () => {
		const isActive = swiperHorizontal.activeIndex;
		console.log(isActive);
			if (isActive === 4){
				TweenMax.to(arrow, .4, {padding: '10px', x: -10, backgroundColor:'rgba(255,255,255,.35)', borderRadius: '50%'})
				if (arrow.classList.contains('swiper-button-next')){
					arrow.style.display = 'none';
				}
			} else if (isActive != 4){
				TweenMax.to(arrow, .4, {padding: 0, x: 0, backgroundColor:'rgba(255,255,255,.0)', borderRadius: '50%'})
				if (arrow.classList.contains('swiper-button-next')){
					arrow.style.display = 'block';
				}
			}
	})

})


// FREE SCROLL SLIDER
var swiperFree = new Swiper('.swiper-container-free', {
		direction: 'vertical',
		slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
	 });
