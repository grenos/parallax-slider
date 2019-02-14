import './index.scss';
import './scripts/helpers';
import {
	imageArray
} from './media/data/images'

//libraries
import Swiper from 'swiper';
import {
	TweenMax,
	TimelineMax,
	CSSPlugin
} from 'gsap/all';
const plugins = [TweenMax, TimelineMax, CSSPlugin];
import ScrollMagic from 'scrollmagic';
import animation from '../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import addIndicators from '../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

// import js module files
// import './scripts/animations/videoModal';




var swiperHorizontal = new Swiper('.swiper-container-h', {
	speed: 1800,
	// loop: true,
	// autoplay: {
	//   delay: 3000,
	// },
	noSwiping: true,
	simulateTouch: false,
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	progressbarFillClass: 'swiper-pagination-progressbar-fill',
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

swiperHorizontal.on('slideNextTransitionStart', function() {

	const isActive = swiperHorizontal.activeIndex;
	const wasActive = swiperHorizontal.previousIndex;
	const nextSlide = swiperHorizontal.slides[isActive + 1];

	const img1 = document.querySelectorAll('.img1-js');
	const img2 = document.querySelectorAll('.img2-js');
	const img3 = document.querySelectorAll('.img3-js');

	const text1 = document.querySelectorAll('.strapline-js');
	const text2 = document.querySelectorAll('.cta-wrapper-js');
	const text3 = document.querySelectorAll('.text-wrapper-js');




	img1.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 2.450, {
				x: 400,
				ease: Elastic.easeOut.config(.5, 2)
			}, {
				x: 0,
				ease: Elastic.easeOut.config(.5, 2)
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: -200,
				ease: Power2.easeIn
			})
		}
	})


	img2.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 1.950, {
				x: 400,
				ease: Power2.easeOut
			}, {
				x: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1.2, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: -400,
				ease: Power2.easeIn
			})
		}
	})

	img3.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 2.5, {
				x: 200,
				ease: Power2.easeOut
			}, {
				x: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1.1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: -300,
				ease: Power2.easeIn
			})
		}
	})


	text1.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 1.650, {
				opacity: 0,
				x: 500,
				ease: Power2.easeOut
			}, {
				opacity: 1,
				x: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 0.95, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: -400,
				ease: Power2.easeIn
			})
		}
	})


	text2.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.3, {
				x: 250,
				ease: Power3.easeOut
			}, {
				x: 0,
				ease: Power3.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: -500,
				ease: Power2.easeIn
			})
		}
	})


	text3.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.8, {
				x: 200,
				ease: Power2.easeOut
			}, {
				x: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: -300,
				ease: Power2.easeIn
			})
		}
	})


	const isActiveVer = swiperVertical.activeIndex;
	const wasActiveVer = swiperVertical.previousIndex;
	// const nextSlideVer = swiperVertical.slides[isActive + 1];

	// console.log(isActiveVer);
	console.log(wasActiveVer);

	swiperVertical.slideNext(1800)

});


swiperHorizontal.on('slidePrevTransitionStart', function() {

	const isActive = swiperHorizontal.activeIndex;
	const wasActive = swiperHorizontal.previousIndex;

	const img1 = document.querySelectorAll('.img1-js');
	const img2 = document.querySelectorAll('.img2-js');
	const img3 = document.querySelectorAll('.img3-js');

	const text1 = document.querySelectorAll('.strapline-js');
	const text2 = document.querySelectorAll('.cta-wrapper-js');
	const text3 = document.querySelectorAll('.text-wrapper-js');



	img1.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 2.450, {
				x: -400,
				ease: Elastic.easeOut.config(.5, 2)
			}, {
				x: 0,
				ease: Elastic.easeOut.config(.5, 2)
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: 200,
				ease: Power2.easeIn
			})
		}
	})

	img2.forEach((img, index) => {

		if (index === isActive) {
			TweenMax.fromTo(img, 1.950, {
				x: -400,
				ease: Power2.easeOut
			}, {
				x: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: 400,
				ease: Power2.easeIn
			})
		}
	})

	img3.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 2.5, {
				x: -200,
				ease: Power2.easeOut
			}, {
				x: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: 200,
				ease: Power2.easeIn
			})
		}
	})



	text1.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 1.650, {
				opacity: 0,
				x: -500,
				ease: Power2.easeOut
			}, {
				opacity: 1,
				x: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: 300,
				ease: Power2.easeIn
			})
		}
	})
	text2.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.3, {
				x: -250,
				ease: Power3.easeOut
			}, {
				x: 0,
				ease: Power3.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: 300,
				ease: Power2.easeIn
			})
		}
	})
	text3.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.8, {
				x: -200,
				ease: Power2.easeOut
			}, {
				x: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				x: 0,
				ease: Power2.easeIn
			}, {
				x: 300,
				ease: Power2.easeIn
			})
		}
	})

swiperVertical.slideNext(1800)

});


var swiperVertical = new Swiper('.swiper-container-v', {
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	loop: true,
	simulateTouch: false,
	spaceBetween: 0,
	slideDuplicateClass: 'swiper-slide-duplicate-v'
});

// swiperHorizontal.on('reachEnd', function() {
//
// 	setTimeout(() => {
// 		var timeline = new TimelineLite();
//
// 		const wh = window.innerHeight;
//
// 		var wrapper = document.querySelector('.swiper-wrapper-vertical')
// 		var slide = document.querySelectorAll('.swiper-slide-v')
//
// 		timeline.to(wrapper, 5 * slide.length, {
// 			y: -wh + 'px',
// 			ease: Linear.easeNone,
// 			onComplete: function() {
// 				swiperVertical.update();
// 				swiperVertical.slideToLoop(0, 0, false);
// 				timeline.play(0, false);
// 			}
// 		});
// 	}, 2000);
//
//
//
//
// })
