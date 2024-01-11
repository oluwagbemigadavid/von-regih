import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from 'imagesloaded';

const AboutMe = () => {

gsap.registerPlugin(ScrollTrigger);
    const preloadImages = (selector = 'img') => {
        return new Promise((resolve) => {
            // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
            imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
        });
    };
// Sets up default animation settings and merges with options
const setupAnimationDefaults = (itemElement, options) => {
	// Default settings for clip paths and scroll trigger
	let defaults = {
	  	clipPaths: {
			step1: {
				initial: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				final: 'polygon(50% 0%, 50% 50%, 50% 50%, 50% 100%)',
			},
			step2: {
				initial: 'polygon(50% 50%, 50% 0%, 50% 100%, 50% 50%)',
				final: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			}
	  	},
		// Default scroll trigger settings
		scrollTrigger: {
			trigger: itemElement,
			start: 'top 50%',
			end: '+=50%',
			scrub: true,
		},
		// Default perspective setting
	  	perspective: false
	};
  
	// Merge defaults with options provided
	if (options && options.scrollTrigger) {
		defaults.scrollTrigger = {
			...defaults.scrollTrigger,
			...options.scrollTrigger
		};
	}
  
	// Merge and return the complete settings
	return {
		...defaults,
		...options,
		scrollTrigger: defaults.scrollTrigger
	};
}; 
const fx3 = (itemElement, options) => {
	// Set up the animation settings
	const settings = setupAnimationDefaults(itemElement, options);
	// Select the elements to animate
	const imageElement = itemElement.querySelector('.content__img');
	const innerElements = imageElement.querySelectorAll('.content__img-inner'); // Now it selects both inners
	const text = itemElement.querySelector('.content__text');
	
	return gsap.timeline({
		defaults: {
			ease: 'none'
		},
		onStart: () => {
			if ( settings.perspective ) {
				gsap.set([imageElement, itemElement], {
					perspective: settings.perspective
				});
			}
		},
		scrollTrigger: settings.scrollTrigger
	})
	.fromTo(imageElement, {
		scale: 0.3,
		filter: 'brightness(100%) contrast(100%)',
		'clip-path': settings.clipPaths.step1.initial
	}, {
		ease: 'sine',
		rotationX: -35,
		rotationY: 35,
		filter: 'brightness(60%) contrast(400%)',
		scale: 0.7,
		'clip-path': settings.clipPaths.step1.final
	}, 0)
	.to(innerElements[0], {
		ease: 'sine',
		skewY: 10,
		scaleY: 1.2,
	}, 0)
	
	// Switch image
	.add(() => {
		// Toggle the visibility of the inner elements
		innerElements[0].classList.toggle('content__img-inner--hidden');
		innerElements[1].classList.toggle('content__img-inner--hidden');
	}, '>')
	.to(imageElement, {
		ease: 'sine.in',
		startAt: {
			'clip-path': settings.clipPaths.step2.initial
		},
		'clip-path': settings.clipPaths.step2.final,
		filter: 'brightness(100%) contrast(100%)',
		scale: 1,
		rotationX: 0,
		rotationY: 0,
	}, '<')
	.to(innerElements[1], {
		ease: 'sine.in',
		startAt: {skewY: 10, scaleY: 2},
		skewY: 0,
		scaleY: 1,
	}, '<')

	.fromTo(text, {
		opacity: 0,
		yPercent: 40,
	}, {
		opacity: 1,
		yPercent: 0,
	}, '>')
	.to(imageElement, {
		ease: 'sine',
		startAt: {filter: 'brightness(100%) contrast(100%) opacity(100%)'},
		filter: 'brightness(60%) contrast(400%) opacity(0%)',
		rotationX: 25,
		rotationY: 2,
		scale: 1.2
	}, '<')
}

// Main function to apply scroll-triggered animations
const scroll = () => {
	// Define items and associate them with their animation profiles and options
	const items = [
		{
			id: '#item-3', 
			animationProfile: fx3,
			options: {
				clipPaths: {
					step1: {
						initial: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
						final: 'polygon(50% 0%, 50% 50%, 50% 50%, 50% 100%)',
					},
					step2: {
						initial: 'polygon(50% 50%, 50% 0%, 50% 100%, 50% 50%)',
						final: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					}
				},
				scrollTrigger: {
					start: 'center center',
					end: '+=150%',
					pin: true
				},
				perspective: 400
			} 
		},
	];

	// Iterate over the items and apply their animations
	items.forEach(item => {
		const itemElement = document.querySelector(item.id);
		// Check if element exists and has an animation profile
		if ( itemElement && item.animationProfile ) {
			// Apply the animation profile to the element with the specified options
			item.animationProfile(itemElement, item.options);

			// Check if the interactive tilt effect should be applied
			/* if ( item.interactiveTilt ) {
				// Instantiate the InteractiveTilt object for this item
				new InteractiveTilt(itemElement);
			} */
		} else {
			// Warn if the element or animation profile is not found
			console.warn(`Element with ID ${item.id} or its animation profile is not defined.`);
		}
	});
}

// Preloading all images specified by the selector
preloadImages('.content__img-inner').then(() => {
    // Once images are preloaded, remove the 'loading' indicator/class from the body
    document.body.classList.remove('loading');
	// Initialize Lenis
	// Apply scroll-triggered animations to each item
	scroll();
});
  return (
    <div className='aboutme'>
        <div className="aboutme__container">
            <div id="item-3" class="content">
                <div class="content__img-wrap">
                    <div class="content__img content__img--2">
                        <div class="content__img-inner" style={{backgroundImage: 'url(../../../../images/7.jpg)'}}></div>
                        <div class="content__img-inner content__img-inner--hidden" style={{backgroundImage: 'url(../../../../images/7.jpg)'}}></div>
                    </div>
                </div>
                <p class="content__text content__text--left">
                    <span>You make me dream </span><span>Your dreams</span> 
                    <span class="content__text-tiny">
                        Do you ever dream of a dream so real it makes you question reality? What is reality? Do you question it? Turn off the light switch. Does it turn off? Question right now: is it a dream? You always wake up once you realize it's a dream. So, don't wake up. Realize it's a dream. That's how you enter the real world.
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
