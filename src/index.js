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
const img3 = document.querySelectorAll(".img3-js");

const text1 = document.querySelectorAll(".strapline-js");
const text2 = document.querySelectorAll(".cta-wrapper-js");
const text3 = document.querySelectorAll(".text-wrapper-js");

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
				2.45,
				{ y: 400, ease: Elastic.easeOut.config(0.5, 2) },
				{ y: 0, ease: Elastic.easeOut.config(0.5, 2) }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: -200, ease: Power2.easeIn }
			);
		}
	});

	img2.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				1.95,
				{ y: 400, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				0.8,
				{ y: 0, ease: Power2.easeIn },
				{ y: -600, ease: Power2.easeIn }
			);
		}
	});

	img3.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				2.5,
				{ y: 200, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				1.1,
				{ y: 0, ease: Power2.easeIn },
				{ y: -300, ease: Power2.easeIn }
			);
		}
	});

	text1.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				1.65,
				{ opacity: 0, y: 500, ease: Power2.easeOut },
				{ opacity: 1, y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				0.95,
				{ y: 0, ease: Power2.easeIn },
				{ y: -400, ease: Power2.easeIn }
			);
		}
	});

	text2.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				2.3,
				{ y: 250, ease: Power3.easeOut },
				{ y: 0, ease: Power3.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: -500, ease: Power2.easeIn }
			);
		}
	});

	text3.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				2.8,
				{ y: 200, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				1,
				{ y: 0, ease: Power2.easeIn },
				{ y: -300, ease: Power2.easeIn }
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
				2.45,
				{ y: -400, ease: Elastic.easeOut.config(0.5, 2) },
				{ y: 0, ease: Elastic.easeOut.config(0.5, 2) }
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

	img2.forEach((img, index) => {
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

	img3.forEach((img, index) => {
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

	text1.forEach((text, index) => {
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

	text2.forEach((text, index) => {
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

	text3.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				2.8,
				{ y: -200, ease: Power2.easeOut },
				{ y: 0, ease: Power2.easeOut }
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
	slidesPerView: "auto",
	freeMode: true,
	loop: true,
	simulateTouch: false,
	spaceBetween: 0,
	slideDuplicateClass: "swiper-slide-duplicate-name-slider"
});

const horizonatlIndex = swiperHorizontal.slides.length + 1;
// 3.36
const slideVH = (_wh * 3.5).toFixed(0);
const slideMovement = (slideVH / horizonatlIndex).toFixed(0);
const setSlideHeight = document.querySelectorAll(".swiper-slide-name-slider");

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
