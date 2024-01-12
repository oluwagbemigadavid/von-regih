import { useEffect, useLayoutEffect, useRef } from "react";
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
import Lenis from '@studio-freight/lenis';

const About = () => {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  const lenis = new Lenis()
/* 
  useEffect(() => {
    let tl = gsap.timeline();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tl.to("#img0", { scale: 1, duration: 1 })
            .to("#img1", { scale: 1, duration: 1 })
            .to("#img2", { scale: 1, duration: 1 });
        }
      });
    }, { threshold: 0.3 });
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tl.to("#img3", { scale: 1, duration: 1 })
            .to("#img4", { scale: 1, duration: 1 })
            .to("#img5", { scale: 1, duration: 1 });
        }
      });
    }, { threshold: 0.3 });
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tl.to("#img6", { scale: 1, duration: 1 })
            .to("#img7", { scale: 1, duration: 1 })
            .to("#img8", { scale: 1, duration: 1 });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(imgRef.current);
    observer1.observe(imgRef2.current);
    observer2.observe(imgRef3.current);

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect()
      observer1.disconnect()
      observer2.disconnect()
    };
  }, []); */

  const lines = document.querySelectorAll('.about__short');
  console.log(lines)
  lines.forEach((line, i) => {
    gsap.from(line, {
      scrollTrigger: {
        trigger: line,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: true
      },
      opacity: .2,
      stagger: 0.1,
    })
  })

  const raf = (time) => {
    lenis.raf(time)
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf)



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
                  <p className="about__short">Rain-kissed cobblestones, urban magic,</p>
                  <p className="about__short">and Gaal's fierce elegance</p>
                  <p className="about__short">redefine style amid</p>
                  <p className="about__short">Northern charm.</p>
                </div>
                <div className="underlay">vogue</div>
              </div>
              <div className="about__container__section__info__tag">
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
                  <p className="about__short">Gaal graces ancient streets,</p>
                  <p className="about__short">merging opulence with history.</p>
                  <p className="about__short">A tapestry of fashion unfolds beneath</p>
                  <p className="about__short">the minaret-studded skyline.</p>
                </div>
                <div className="underlay">versace</div>
              </div>
              <div className="about__container__section__info__tag">
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
                  <p className="about__short">Gaal's powerful strides echo</p>
                  <p className="about__short">through urban energy. In the</p>
                  <p className="about__short">heart of Berlin, she embodies</p>
                  <p className="about__short">strength, resilience, and athleticism.</p>
                </div>
                <div className="underlay">nike</div>
              </div>
              <div className="about__container__section__info__tag">
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