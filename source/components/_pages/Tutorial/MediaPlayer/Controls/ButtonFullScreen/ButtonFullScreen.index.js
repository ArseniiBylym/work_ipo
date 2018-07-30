import React from 'react'
import PropTypes from 'prop-types'
import './ButtonFullScreen.style.styl'
import fullscreenIcon from './images/fullscreen.svg'

ButtonFullScreen.propTypes = {
  // from Controls.index
  toggleFullScreen: PropTypes.func.isRequired
}

function ButtonFullScreen(props) {

  const {toggleFullScreen} = props
  return (
    <div className="media-player__btn-box media-player__btn-box-fullscreen">
      <a href="#" className="media-player__btn media-player__btn-fullscreen" onClick={toggleFullScreen}>
        <span className="media-player__btn-icon-box">
          <img src={fullscreenIcon} alt="fullscreen" />
        </span>
      </a>
    </div>
  )

}

export default ButtonFullScreen
