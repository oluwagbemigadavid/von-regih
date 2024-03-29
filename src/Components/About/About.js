import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import img_one from '../../images/sobhan-joodi-B2R6itvM0nM-unsplash.jpg';
import img_two from '../../images/sobhan-joodi-RaFd591Uj24-unsplash.jpg';
import img_three from '../../images/sobhan-joodi-AqnBS26zjNc-unsplash.jpg';
import img_four from '../../images/sobhan-joodi-HIUXHU0qla0-unsplash.jpg';
import img_five from '../../images/sobhan-joodi-Q7NfeLyUKCg-unsplash.jpg';
import img_six from '../../images/sobhan-joodi-PZODE-yoY6g-unsplash.jpg';
import img_seven from '../../images/sobhan-joodi-VAgHOD5OfDk-unsplash.jpg';
import img_eight from '../../images/sobhan-joodi-bZqZDxfRGYQ-unsplash.jpg';
import img_nine from '../../images/sobhan-joodi-H24NwWE0SSE-unsplash (1).jpg';
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type'


gsap.registerPlugin(ScrollTrigger)
const About = () => {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const containerRef = useRef(null);
  let tag1S = 0
  let tag1E = 0

/* 
  useEffect(() => {
    const container = document.querySelector('.about__container__contents');
  
    let scrollTween = gsap.to(container, {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "left top",  // Updated to "left top" for horizontal scrolling
        scrub: true,
      },
    });
  
    const lines = document.querySelectorAll('.about__short');
  
    lines.forEach((line, i) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: 'left 80%',  // Updated to "left 90%" for horizontal scrolling
          end: 'left 20%',   // Updated to "left 20%" for horizontal scrolling
          scrub: true,
          containerAnimation: scrollTween,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []); */
 
  

  useEffect(() => {
    if ( window.innerWidth > 700 ){
      
      const tl = gsap.timeline();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.to("#img0, #img1, #img2", { scale: 1, duration: 1 });
          }
        });
      }, { threshold: 0.3 });

      const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.to("#img3, #img4, #img5", { scale: 1, duration: 1 });
          }
        });
      }, { threshold: 0.3 });

      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.to("#img6, #img7, #img8", { scale: 1, duration: 1 });
          }
        });
      }, { threshold: 0.3 });

      observer.observe(imgRef.current);
      observer1.observe(imgRef2.current);
      observer2.observe(imgRef3.current);

      return () => {
        observer.disconnect();
        observer1.disconnect();
        observer2.disconnect();
      };
    }
  }, [imgRef, imgRef2, imgRef3]);


  useLayoutEffect(() => {
    if(window.innerWidth > 700) {
        const section = document.querySelector('.about__container')
    
        const Transform = () => {
          const offsetTop = section?.parentElement.offsetTop;
          const scrollSection = section?.querySelector('.about__container__contents');
          let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
          const val = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
          scrollSection.style.transform =`translate3d(${-(val)}vw, 0, 0)`
        }
        window.addEventListener('scroll', Transform);
    
        return () => {
          window.removeEventListener('scroll', Transform);
        };
    }
  }, []);
  
  useLayoutEffect(() => {
    const images = document.querySelectorAll('.img__container')
    const splitType = document.querySelectorAll('.about__short')
    const textUnderlay = document.querySelectorAll('.underlay')
    const gsapContext = gsap.context(() => {
      if (window.innerWidth < 700) {
        images.forEach((image, i) => {
          gsap.from(image.querySelectorAll('img'), {
            scrollTrigger: {
              trigger: image,
              start: 'top 65%',
              end: 'top top',
              scrub: false,
            },
            scale: 5,
            opacity: 0.8,
            stagger: 0.5,
            duration: 1
          })
        })
        splitType.forEach((char, i) => {
          const text = new SplitType(char, {types: 'chars, words'})
          gsap.from(text.words, {
            scrollTrigger: {
              trigger: char,
              start: 'top 70%',
              end: 'top 0%',
              scrub: false,
            },
            stagger: 0.05,
            opacity: 0,
            x: 200,
            y: 50,
            duration: 1,
          })
        })
        textUnderlay.forEach((char, i) => {
          const text = new SplitType(char, {types: 'chars'})
          gsap.from(text.chars, {
            scrollTrigger: {
              trigger: char,
              start: '50px 50%',
              end: '50px 10%',
              scrub: 0.5,
            },
            stagger: 0.05,
            opacity: 0,
          })
        })
      }
    }, containerRef)
    return () => gsapContext.revert()
  }, [])
  

  return (
    <div className="about" ref={containerRef}>
      <div className="about__container">
        <div className="about__container__contents">
          <div className="about__container__section">
            <div className="about__container__section__img">
              <div className="img" ref={imgRef}>
                <div className="img__container"><img src={img_one} alt="" id="img0" /></div>
                <div className="img__container"><img src={img_two} alt="" id="img1" /></div>
                <div className="img__container"><img src={img_nine} alt="" id="img2" /></div>
              </div>
            </div>
            <div className="about__container__section__info">

            <div className="about__container__section__info__lines">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              <div className="about__container__section__info__content">
                <div className="about__container__section__info__content__container">
                  <div className="about__container__section__info__content__container__text">
                    <h2>VOUGE</h2>
                    <p>Manchester, London.</p>
                  </div>
                  <p className="about__short">Rain-kissed cobblestones, urban magic, <br />and Gaal's fierce elegance <br />redefine style amid <br /></p>
                </div>
                <div className="underlay">vogue</div>
              </div>
              <div className="about__container__section__info__tag tag1">
                <p>Gaal von Reigh</p>
              </div>
            </div>
          </div>
          <div className="about__container__section">
            <div className="about__container__section__img">
              <div className="img" ref={imgRef2}>
                <div className="img__container"><img src={img_three} alt="" id="img3" /></div>
                <div className="img__container"><img src={img_four} alt="" id="img4" /></div>
                <div className="img__container"><img src={img_five} alt="" id="img5" /></div>
              </div>
            </div>
            <div className="about__container__section__info">

            <div className="about__container__section__info__lines">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              <div className="about__container__section__info__content">
                <div className="about__container__section__info__content__container">
                  <div className="about__container__section__info__content__container__text">
                    <h2>VERSACE</h2>
                    <p>Istanbul</p>
                  </div>
                  <p className="about__short">Gaal graces ancient streets, <br />merging opulence with history. <br />A tapestry of fashion unfolds beneath <br />the minaret-studded skyline.</p>
                </div>
                <div className="underlay underlay2">versace</div>
              </div>
              <div className="about__container__section__info__tag tag2">
                <p>Gaal von Reigh</p>
              </div>
            </div>
          </div>
          <div className="about__container__section">
            <div className="about__container__section__img">
              <div className="img" ref={imgRef3}>
                <div className="img__container"><img src={img_six} alt="" id="img6" /></div>
                <div className="img__container"><img src={img_seven} alt="" id="img7" /></div>
                <div className="img__container"><img src={img_eight} alt="" id="img8" /></div>
              </div>
            </div>
            <div className="about__container__section__info">

            <div className="about__container__section__info__lines">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              <div className="about__container__section__info__content">
                <div className="about__container__section__info__content__container">
                  <div className="about__container__section__info__content__container__text">
                    <h2>NIKE</h2>
                    <p>Berlin, Germany.</p>
                  </div>  
                  <p className="about__short">Gaal's powerful strides echo <br />through urban energy. In the <br />heart of Berlin, she embodies <br />strength, resilience, and athleticism. </p>
                </div>
                <div className="underlay">nike</div>
              </div>
              <div className="about__container__section__info__tag tag3">
                <p>Gaal von Reigh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
// Machina font

/* */
