import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const About = () => {

    const app = useRef(null);
  
  
    useEffect(() => {
  
      gsap.to(app.current, { rotate: 360, duration: 5 })
  
    }, [])
  
  return (
    <div className="about">
        <div ref={app}>Hello World</div>
    </div>
  )
}

export default About