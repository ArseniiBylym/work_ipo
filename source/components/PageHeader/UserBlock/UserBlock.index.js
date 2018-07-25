import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import multiLang from '../../Lang/Lang.hoc'
import './UserBlock.style.styl'

UserBlock.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function UserBlock(props) {

  const {dir} = props
  return (
    <div className="user-block">
      <Link to={`/log-in`}
        className="user-block__link link link--blue"
        dir={dir}
      >
        log in
      </Link>
      <Link to={`/sign-up`}
        className="user-block__button button button--small button-bordered"
        dir={dir}
      >
        sign up
      </Link>
    </div>
  )

}

export default multiLang(UserBlock)