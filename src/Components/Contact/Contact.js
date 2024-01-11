import React from 'react'

const Contact = () => {
  return (
    <div className="contact">

    <div className="contact__lines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="contact__container container">
            <div className="contact__left">
                <h1>
                    Want to work together ->
                </h1>
                <p>
                    I'm available to meet and discuss potential business collaborations. Shoot me a mail! Get a response within 24 hours.
                </p>
            </div>
            <div className="contact__right">
                <div className="row">
                    <div className='input'>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Louis'/>
                    </div>
                    <div className='input'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Oschrid'/>
                    </div>
                </div>
                <div className="row row1">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='koningswealth@gmail.com' />
                </div>
                <div className="row row1">
                    <label htmlFor="">Instagram Account</label>
                    <input type="text" placeholder='@koningdavid_I' />
                </div>
                <div className="row row1">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Anything you'd like to tell me?"></textarea>
                </div>
                <button>Shoot!</button>
            </div>

        <div className="contact__footer">
            <a href="">Instagram</a>
            <p>&#169; COPYRIGHT 2024 koningswealth@gmail.com</p>
            <a href="">Gaal von Reigh</a>
        </div>
        </div>
    </div>
  )
}

export default Contact
