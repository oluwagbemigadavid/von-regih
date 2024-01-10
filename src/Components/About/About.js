import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";


const About = () => {
  const app = useRef(null);
  
  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      gsap.to(".square", { rotate: 360, duration: 5 });

    }, app);

    return () => ctx.revert();

  }, [])
  return (
    <div ref={app} className="about">
    <div className="square">Hello World</div>
    <div className="square2">Hello World 2</div>
    </div>
  )
}

export default About;