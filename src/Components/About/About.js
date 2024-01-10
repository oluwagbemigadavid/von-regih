import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import img_one from '../../images/sobhan-joodi-Q7NfeLyUKCg-unsplash.jpg'


const About = () => {
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting)
          tl.to("#img1", { scale: 1, duration: 1 })
            .to("#img2", { scale: 1, duration: 1 })
            .to("#img3", { scale: 1, duration: 1 });

          return () => tl.revert();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(imgRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__container__section">
          <div className="about__container__section__img">
            <div className="img" ref={imgRef}>
              <div className="img__container"><img src={img_one} alt="" id="img1" /></div>
              <div className="img__container"><img src={img_one} alt="" id="img2" /></div>
              <div className="img__container"><img src={img_one} alt="" id="img3" /></div>
            </div>
          </div>
          <div className="about__container__section__info">
            <title>Vouge</title>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt rem modi, aperiam expedita porro unde. Doloribus architecto aperiam ullam dolore nam quasi odio harum deserunt esse consequuntur, obcaecati non voluptatem dicta porro iure vel, ab expedita. Optio repellendus a dolorem nam earum libero quam, quaerat repudiandae perspiciatis, necessitatibus modi?</p>
            <div className="underlay">vouge</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;