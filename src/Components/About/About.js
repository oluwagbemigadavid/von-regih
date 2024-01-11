import { useEffect, useRef } from "react";
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

  const sections = [...document.querySelectorAll('.about__container__section')]
  console.log(sections)

  const Transform = (section) => {
    const offsetTop = section.parentElement.offsetTop
  }


  useEffect(() => {
    const transformScroll = () => {

    }
    window.addEventListener('scroll', );

    return () => {
      window.removeEventListener('scroll', );
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
              <div className="about__container__section__info__content">
                <title>Vogue</title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                <div className="underlay">vogue</div>
              </div>
              <div className="about__container__section__info__tag">
                Gaal von Reigh
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
              <div className="about__container__section__info__content">
                <title>Vogue</title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                <div className="underlay">vogue</div>
              </div>
              <div className="about__container__section__info__tag">
                Gaal von Reigh
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
              <div className="about__container__section__info__content">
                <title>Vogue</title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                <div className="underlay">vogue</div>
              </div>
              <div className="about__container__section__info__tag">
                Gaal von Reigh
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