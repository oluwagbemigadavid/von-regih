import React, { useLayoutEffect, useRef } from 'react'
import hero_img_one from '../../images/sobhan-joodi-PZODE-yoY6g-unsplash.jpg'
import hero_img_two from '../../images/sobhan-joodi-VAgHOD5OfDk-unsplash.jpg'
import hero_img_three from '../../images/sobhan-joodi-Q7NfeLyUKCg-unsplash.jpg'
import SplitType from 'split-type'
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import LazyImage from '../LazyImages'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
      const splitType = document.querySelectorAll('.hero__container__grid__mid-right')
      const heroImgs = document.querySelectorAll('.hero-img img')
      const gsapContext = gsap.context(() => {
        splitType.forEach((char, i) => {
            const text = new SplitType(char, {types: 'chars'})
            gsap.from(text.chars, {
              scrollTrigger: {
                trigger: char,
                start: 'top 100%',
                scrub: false,
              },
              stagger: 0.1,
              opacity: 0,
              duration: 1,
            })
          })
          heroImgs.forEach((img, i) => {
            gsap.from(img, {
              scrollTrigger: {
                trigger: img,
                start: 'top 100%',
                scrub: false,
              },
              stagger: 0.1,
              opacity: 0,
              scale: 6,
              duration: 1,
            })
          })
      }, containerRef)
      return () => gsapContext.revert()
    }, [containerRef])


  return (
    <div className="hero" ref={containerRef}>
        <div className="hero__lines">
            <div className="hero__lines__one"></div>
            <div className="hero__lines__two"></div>
            <div className="hero__lines__three"></div>
            <div className="hero__lines__four"></div>
            <div className="hero__lines__five"></div>
            <div className="hero__lines__six"></div>
        </div>
        <div className="hero__container container">
        <div className="hero__container__nav">
            <a href="/">INSTAGRAM</a>
            <p>GAAL VON REIGH</p>
        </div>
            <div className="hero__container__grid">
                <div className="hero__container__grid__top-left">
                    <p>HEIGHT: 185CM</p>
                    <p>SHOE SIZE: 35</p>
                    <p>EYE-COLOR: GREEN</p>
                </div>
                <div className="hero__container__grid__top-right">
                  <LazyImage src={hero_img_one} />
                </div>
                <div className="hero__container__grid__mid-left hero-img">
                  <LazyImage src={hero_img_two} />
                </div>
                <div className="hero__container__grid__mid-right">
                  <p>Gaal Von Reigh</p>
                </div>
                <div className="hero__container__grid__bottom-right hero-img">
                  <LazyImage src={hero_img_three} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
