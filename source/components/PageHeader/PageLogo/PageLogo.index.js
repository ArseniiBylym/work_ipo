import React from 'react'
import {Link} from 'react-router-dom'
import './PageLogo.style.styl'
import imgLogo from './images/Logo.png'

function PageLogo() {

  return (
    <Link className="page-logo" to={`/home`}>
      <img src={imgLogo}
        alt="investing in public offerings"
        width="72"
        height="50"
      />
      <span className="page-logo__text">investing in public offerings</span>
    </Link>
  )

}

export default PageLogo