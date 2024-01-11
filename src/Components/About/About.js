import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import img_one from '../../images/sobhan-joodi-Q7NfeLyUKCg-unsplash.jpg';

const About = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tl.to("#img1", { scale: 1, duration: 1 })
            .to("#img2", { scale: 1, duration: 1 })
            .to("#img3", { scale: 1, duration: 1 });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(imgRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);



  useLayoutEffect(() => {

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
  }, []);

  return (
    <div className="about" ref={containerRef}>
      <div className="about__container">
        <div className="about__container__contents">
          <div className="about__container__section">
            <div className="about__container__section__img">
              <div className="img" ref={imgRef}>
                <div className="img__container"><img src={img_one} alt="" id="img1" /></div>
                <div className="img__container"><img src={img_one} alt="" id="img2" /></div>
                <div className="img__container"><img src={img_one} alt="" id="img3" /></div>
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
                  <p>Lorem ipsum adipisicing eli</p>
                  <p>Lorem consectetur adipisicing elit</p>
                  <p>Lorem ipsum adipisicing elit</p>
                  <p>Lorem eli.</p>
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
              <div className="img" ref={imgRef}>
                <div className="img__container"><img src={img_one} alt="" id="img1" /></div>
                <div className="img__container"><img src={img_one} alt="" id="img2" /></div>
                <div className="img__container"><img src={img_one} alt="" id="img3" /></div>
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
                  <p>Lorem ipsum adipisicing eli</p>
                  <p>Lorem consectetur adipisicing elit</p>
                  <p>Lorem ipsum adipisicing elit</p>
                  <p>Lorem eli.</p>
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
              <div className="img" ref={imgRef}>
                <div className="img__container"><img src={img_one} alt="" id="img1" /></div>
                <div className="img__container"><img src={img_one} alt="" id="img2" /></div>
                <div className="img__container"><img src={img_one} alt="" id="img3" /></div>
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
                  <p>Lorem ipsum adipisicing eli</p>
                  <p>Lorem consectetur adipisicing elit</p>
                  <p>Lorem ipsum adipisicing elit</p>
                  <p>Lorem eli.</p>
                </div>
                <div className="underlay">vogue</div>
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