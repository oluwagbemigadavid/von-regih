import React from 'react'

const Cursor = () => {
  return (
    <div className="mice">
        <div className="mice__container">
            <div className="mice__conatiner__text">
                Gal Von Reigh
            </div>
            <div className="mice__conatiner__loading">
                <div className="mice__conatiner__loading__dots"><span></span></div>
                <div className="mice__conatiner__loading__text"><p>Loading</p></div>
            </div>
        </div>
    </div>
  )
}

export default Cursor

