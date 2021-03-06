import "./index.scss";
import "./scripts/helpers";


//libraries
import Swiper from "swiper";
import { TweenMax, TimelineMax, CSSPlugin } from "gsap/all";
const plugins = [TweenMax, TimelineMax, CSSPlugin];
import ScrollMagic from "scrollmagic";
import animation from "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import fitText from '../src/scripts/fitText'

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
	slideActiveClass: 'swiper-slide-active-main',
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
swiperHorizontal.on("slideNextTransitionStart", function () {
	const isActive = swiperHorizontal.activeIndex;
	const wasActive = swiperHorizontal.previousIndex;
	// const nextSlide = swiperHorizontal.slides[isActive + 1];

	img1.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				1.95,
				{ y: 400, rotation: 0.01, ease: Power2.easeOut },
				{ y: 0, rotation: 0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				0.8,
				{ y: 0, rotation: 0.01, ease: Power2.easeIn },
				{ y: -600, rotation: 0.01, ease: Power2.easeIn }
			);
		}
	});

	img2.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				img,
				2.5,
				{ y: 200, rotation: 0.01, ease: Power2.easeOut },
				{ y: 0, rotation: 0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				img,
				1.1,
				{ y: 0, rotation: 0.01, ease: Power2.easeIn },
				{ y: -300, rotation: 0.01, ease: Power2.easeIn }
			);
		}
	});

	info.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				1.65,
				{ opacity: 0, y: 500, rotation: 0.01, ease: Power2.easeOut },
				{ opacity: 1, y: 0, rotation: 0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				0.95,
				{ y: 0, rotation: 0.01, ease: Power2.easeIn },
				{ y: -400, rotation: 0.01, ease: Power2.easeIn }
			);
		}
	});

	title.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				text,
				2.3,
				{ y: 250, rotation: 0.01, ease: Power3.easeOut },
				{ y: 0, rotation: 0.01, ease: Power3.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				text,
				1,
				{ y: 0, rotation: 0.01, ease: Power2.easeIn },
				{ y: -500, rotation: 0.01, ease: Power2.easeIn }
			);
		}
	});

	ctaWeb.forEach((cta, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				cta,
				1.95,
				{ y: 450, rotation: 0.01, ease: Power3.easeOut },
				{ y: 0, rotation: 0.01, ease: Power3.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				cta,
				1,
				{ y: 0, rotation: 0.01, ease: Power2.easeIn },
				{ y: -500, rotation: 0.01, ease: Power2.easeIn }
			);
		}
	});

	ctaGit.forEach((cta, index) => {
		if (index === isActive) {
			TweenMax.fromTo(
				cta,
				2.3,
				{ y: 300, rotation: 0.01, ease: Power2.easeOut },
				{ y: 0, rotation: 0.01, ease: Power2.easeOut }
			);
		} else if (index === wasActive) {
			TweenMax.fromTo(
				cta,
				1.1,
				{ y: 0, rotation: 0.01, ease: Power2.easeIn },
				{ y: -300, rotation: 0.01, ease: Power2.easeIn }
			);
		}
	});

	filmSlideF();
});

// PREVIOUS SLIDE ANIMATION
swiperHorizontal.on("slidePrevTransitionStart", function () {
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

	filmSlideR();
});

// DISABLE BUTTON ON DURING CHANGE
swiperHorizontal.on("slideChangeTransitionStart", function () {
	document
		.querySelector(".swiper-button-next")
		.classList.add("swiper-button-disabled");
	document
		.querySelector(".swiper-button-prev")
		.classList.add("swiper-button-disabled");
});

// ACTIVATE BUTTON ON AFTER CHANGE
swiperHorizontal.on("slideChangeTransitionEnd", function () {
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
	spaceBetween: 0,
});

// NAME SLIDER ANIMATION

let slideMovement
document.addEventListener("DOMContentLoaded", () => {
	const nameSliderSlide = document.querySelector(".swiper-slide-name-slider__inner");
	const nameSliderHeight = nameSliderSlide.offsetHeight
	const horizonatlIndex = swiperHorizontal.slides.length;
	slideMovement = (nameSliderHeight / horizonatlIndex);
	console.log(nameSliderHeight);
	console.log(horizonatlIndex);
	console.log(slideMovement);

})

window.addEventListener("resize", () => {
	const nameSliderSlide = document.querySelector(".swiper-slide-name-slider__inner");
	const nameSliderHeight = nameSliderSlide.offsetHeight
	const horizonatlIndex = swiperHorizontal.slides.length;
	slideMovement = (nameSliderHeight / horizonatlIndex);
})


const slideR = document.querySelector(".swiper-slide-name-slider");
const filmSlideF = () => {
	TweenMax.to(slideR, 1.8, {
		y: `-=${slideMovement}`,
		onComplete: function () { }
	});
};

const slideF = document.querySelector(".swiper-slide-name-slider");
const filmSlideR = () => {
	TweenMax.to(slideF, 1.8, {
		y: `+=${slideMovement}`,
		onComplete: function () { }
	});
};

// CTA HOVER ANIMATION
document.querySelectorAll('.cta-js').forEach(cta => {

	const tl = new TimelineLite({ paused: true });

	cta.addEventListener('mouseenter', function () {
		if (this.classList.contains('cta-git')) {
			tl.to(this, .3, { boxShadow: 'inset  0 -100px 0 0 black' }).play();
		} else {
			tl.to(this, .3, { boxShadow: 'inset  0 100px 0 0 black' }).play();
		}
		let text = this.querySelector('p')
		TweenMax.to(text, .4, { color: 'white' })
	})
	//
	cta.addEventListener('mouseleave', function () {
		if (this.classList.contains('cta-git')) {
			tl.to(this, 0, { boxShadow: 'inset  0 -100px 0 0 black' }).reverse();
		} else {
			tl.to(this, 0, { boxShadow: 'inset  0 100px 0 0 black' }).reverse();
		}
		let text = this.querySelector('p')
		TweenMax.to(text, .4, { color: 'black' })
	})

})

// ARROW ANIMATION
document.querySelectorAll('.arrow-js').forEach(arrow => {

	const tl2 = new TimelineLite();
	arrow.addEventListener('click', function () {
		tl2.fromTo(this, .05, { css: { scale: 1 } }, { css: { scale: 1.15 } })
			.fromTo(this, .05, { css: { scale: 1.15 } }, { css: { scale: 1 } })
	})

	swiperHorizontal.on('transitionEnd', () => {
		const isActive = swiperHorizontal.activeIndex;
		if (isActive === 4) {
			TweenMax.to(arrow, .4, { padding: '5px', x: -5, backgroundColor: 'rgba(255,255,255,.35)', borderRadius: '50%' })
			if (arrow.classList.contains('swiper-button-next')) {
				arrow.style.display = 'none';
			}
		} else if (isActive != 4) {
			TweenMax.to(arrow, .4, { padding: 0, x: 0, backgroundColor: 'rgba(255,255,255,.0)', borderRadius: '50%' })
			if (arrow.classList.contains('swiper-button-next')) {
				arrow.style.display = 'block';
			}
		}
	})

})




// ABOUT SLIDER
var swiperFree = new Swiper('.swiper-container-free', {
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	mousewheel: true,
});


// LAST SLIDE STRIP ANIMATION
swiperHorizontal.on("slideChangeTransitionEnd", function () {
	const isLast = swiperHorizontal.isEnd;

	if (isLast) {
		document.querySelectorAll('.strip').forEach(function (strip, index) {
			strip.style.left = index * 10 + '%';
			setTimeout(() => {
				strip.classList.add('active');
			}, 100 * index);
		})
	} else {
		document.querySelectorAll('.strip').forEach(function (strip) {
			strip.classList.remove('active');
		})
	}
});



// ABOUT ANIMATION ScrollMagic
const controller = new ScrollMagic.Controller();

const story = new TimelineMax()
	.fromTo('.about__title', .2, { y: 80, opacity: 0 }, { y: 0, opacity: 1, delay: 2.2 })
	.fromTo('.about', .2, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
	.fromTo('.tech', .2, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
	.fromTo('.test', .2, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
	.fromTo('.social', .2, { y: 80, opacity: 0 }, { y: 0, opacity: 1 });


new ScrollMagic.Scene({
	triggerElement: '#trigger-about',
})
	.setTween(story)
	.addTo(controller);
