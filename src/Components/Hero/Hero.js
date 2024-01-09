import React from 'react'
import hero_img_one from '../../images/sobhan-joodi-PZODE-yoY6g-unsplash.jpg'
import hero_img_two from '../../images/sobhan-joodi-VAgHOD5OfDk-unsplash.jpg'
import hero_img_three from '../../images/sobhan-joodi-B2R6itvM0nM-unsplash.jpg'

const Hero = () => {
  return (
    <div className="hero">
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
            <a href="">INSTAGRAM</a>
            <p>GAAL VON REIGH</p>
        </div>
            <div className="hero__container__grid">
                <div className="hero__container__grid__top-left">
                    <p>HEIGHT: 185CM</p>
                    <p>SHOE SIZE: 35</p>
                    <p>EYE-COLOR: GREEN</p>
                </div>
                <div className="hero__container__grid__top-right">
                    <img src={hero_img_one} alt="" />
                </div>
                <div className="hero__container__grid__mid-left"><img src={hero_img_two} alt="" /></div>
                <div className="hero__container__grid__mid-right">Gaal Von Reigh</div>
                <div className="hero__container__grid__bottom-right"><img src={hero_img_three} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Hero
