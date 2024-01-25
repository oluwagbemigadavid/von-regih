import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import WebFont from 'webfontloader';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);
const AboutMe = () => {
	
  return (
	<div className='aboutme'>
		<div className="aboutme__container loading container">
			<div className="content content--left">
				<div  >
					<h2 className="content__title w600" data-split>About me! <br />
						🌟Gaal-Von-Reigh🌟
						Hey, I'm Gaal—more than a model, I'm a vibe. From global runways to offbeat photoshoots, my style is all about breaking norms.</h2>
				</div>
			</div>
			<div className="content content--left">
				<h2 className="content__title content__title--smaller w400" data-split>
				Each step is a celebration of individuality, an invitation to embrace what makes us unique. Fashion isn't just fabric; it's personal expression. I'm here to redefine beauty standards, one stride at a time. Join me on this journey where every pose tells a story—Gaal Von Reigh, because style is personal, and so am I. 💖📸✨
				</h2>
			</div>
		</div>
	</div>
  )
}

export default AboutMe
