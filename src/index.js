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


const _wh = window.innerHeight;
const _ww = window.innerWidth;


var swiperHorizontal = new Swiper('.swiper-container-h', {
	direction: 'vertical',
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
				y: 400,
				ease: Elastic.easeOut.config(.5, 2)
			}, {
				y: 0,
				ease: Elastic.easeOut.config(.5, 2)
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: -200,
				ease: Power2.easeIn
			})
		}
	})


	img2.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 1.950, {
				y: 400,
				ease: Power2.easeOut
			}, {
				y: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, .8, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: -600,
				ease: Power2.easeIn
			})
		}
	})

	img3.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 2.5, {
				y: 200,
				ease: Power2.easeOut
			}, {
				y: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1.1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: -300,
				ease: Power2.easeIn
			})
		}
	})


	text1.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 1.650, {
				opacity: 0,
				y: 500,
				ease: Power2.easeOut
			}, {
				opacity: 1,
				y: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 0.95, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: -400,
				ease: Power2.easeIn
			})
		}
	})


	text2.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.3, {
				y: 250,
				ease: Power3.easeOut
			}, {
				y: 0,
				ease: Power3.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: -500,
				ease: Power2.easeIn
			})
		}
	})


	text3.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.8, {
				y: 200,
				ease: Power2.easeOut
			}, {
				y: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: -300,
				ease: Power2.easeIn
			})
		}
	})


	const slideF = document.querySelectorAll('.swiper-slide-v');
		slideF.forEach(item => {
			filmSlideF(item);
		})
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
				y: -400,
				ease: Elastic.easeOut.config(.5, 2)
			}, {
				y: 0,
				ease: Elastic.easeOut.config(.5, 2)
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: 200,
				ease: Power2.easeIn
			})
		}
	})

	img2.forEach((img, index) => {

		if (index === isActive) {
			TweenMax.fromTo(img, 1.950, {
				y: -400,
				ease: Power2.easeOut
			}, {
				y: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: 400,
				ease: Power2.easeIn
			})
		}
	})

	img3.forEach((img, index) => {
		if (index === isActive) {
			TweenMax.fromTo(img, 2.5, {
				y: -200,
				ease: Power2.easeOut
			}, {
				y: 0,
				ease: Power2.easeOut
			})
		} else if (index === wasActive) {
			TweenMax.fromTo(img, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: 200,
				ease: Power2.easeIn
			})
		}
	})



	text1.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 1.650, {
				opacity: 0,
				y: -500,
				ease: Power2.easeOut
			}, {
				opacity: 1,
				y: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: 300,
				ease: Power2.easeIn
			})
		}
	})
	text2.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.3, {
				y: -250,
				ease: Power3.easeOut
			}, {
				y: 0,
				ease: Power3.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: 300,
				ease: Power2.easeIn
			})
		}
	})
	text3.forEach((text, index) => {
		if (index === isActive) {
			TweenMax.fromTo(text, 2.8, {
				y: -200,
				ease: Power2.easeOut
			}, {
				y: 0,
				ease: Power2.easeOut
			});
		} else if (index === wasActive) {
			TweenMax.fromTo(text, 1, {
				y: 0,
				ease: Power2.easeIn
			}, {
				y: 300,
				ease: Power2.easeIn
			})
		}
	})

	const slideR = document.querySelectorAll('.swiper-slide-v');
		slideR.forEach(item => {
			filmSlideR(item);
		})

});

swiperHorizontal.on('slideChangeTransitionStart', function () {
	document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
	document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
})

swiperHorizontal.on('slideChangeTransitionEnd', function () {
	document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
	document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
})



var swiperVertical = new Swiper('.swiper-container-v', {
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	loop: true,
	simulateTouch: false,
	spaceBetween: 0,
	slideDuplicateClass: 'swiper-slide-duplicate-v'
});




// https://greensock.com/forums/topic/8538-cant-get-div-to-move-left-mulitiple-times-on-click-function/
// y needs to change so y is devideable by horizonatl slides
// y = each horizontal slide lenght
const horizonatlIndex = swiperHorizontal.slides.length; //current number of horizonatl slides
// parent div needs a fixed px or vh height .swiper-slide

// const slideVH = ((_wh * 37.1) / 100).toFixed(0);
const slideVH = (_wh * 3.36).toFixed(0);
const slideMovement = (slideVH / horizonatlIndex).toFixed(0);
const setSlideHeight = document.querySelectorAll('.swiper-slide-v');

document.addEventListener("DOMContentLoaded", () => {
	setSlideHeight.forEach(slide => {
		slide.style.height = slideVH + 'px';
	})
});
window.addEventListener('resize', () => {
	setSlideHeight.forEach(slide => {
		slide.style.height = slideVH + 'px';
	})
})


const filmSlideF = (item) => {
				TweenMax.to(item,  2, { y: `-=${slideMovement}`, ease: Power2.easeOut, onComplete: function() {
					console.log('done');
				}})
}

const filmSlideR = (item) => {
				TweenMax.to(item,  2, { y: `+=${slideMovement}`, ease: Power2.easeOut, onComplete: function() {
				}})
}




// swiperHorizontal.on('reachEnd', function() {
//
//
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
//
//
//
// })
