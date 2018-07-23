import React from 'react'
import './Copyright.style.styl'

function Copyright() {

  return (
    <div className="copyright">
      <div className="copyright__text">
        Copyright © 2012-2018. All rights reserved.
        <a href="#" className="copyright__link">Privacy Policy</a>
        <a href="#" className="copyright__link">Terms Of Use</a>
        <a href="#" className="copyright__link">Disclaimer</a>
        <a href="#" className="copyright__link">Internet Security</a>
      </div>
    </div>
  )

}

export default Copyright