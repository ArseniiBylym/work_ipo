import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../Lang/Lang.hoc'
import './Copyright.style.styl'

Copyright.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}


function Copyright(props) {

  const date = new Date()
  const year = date.getFullYear()

  const {dir} = props
  return (
    <div className="copyright">
      <div className="copyright__text">
        <span dir={dir}>Copyright © 2012-{year}. All rights reserved.</span>
        <a href="#"
          className="copyright__text text-separator"
          dir={dir}
        >
          Privacy Policy
        </a>
        <a href="#"
          className="copyright__text text-separator"
          dir={dir}
        >
          Terms Of Use
        </a>
        <a href="#"
          className="copyright__text text-separator"
          dir={dir}
        >
          Disclaimer
        </a>
        <a href="#"
          className="copyright__text text-separator"
          dir={dir}
        >
          Internet Security
        </a>
      </div>
    </div>
  )

}

export default multiLang(Copyright)