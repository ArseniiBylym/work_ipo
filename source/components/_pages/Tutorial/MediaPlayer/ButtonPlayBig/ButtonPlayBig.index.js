import React from 'react'
import PropTypes from 'prop-types'
import './ButtonPlayBig.style.styl'
import playIcon from './images/play.svg'

ButtonPlayBig.propTypes = {
  // from MediaPlayer.index
  playing: PropTypes.bool.isRequired,
  togglePlayPause: PropTypes.func.isRequired
}

function ButtonPlayBig(props) {

  const setButtonIcon = () => {
    const {playing} = props
    if (!playing) return <img src={playIcon} alt="play" />
  }

  const {togglePlayPause} = props
  return (
    <div className="media-player__btn-play-big-box">
      <a href="#" className="media-player__btn-play-big" onClick={togglePlayPause}>
        <span className="media-player__btn-play-big-icon-box">
          {setButtonIcon()}
        </span>
      </a>
    </div>
  )

}

export default ButtonPlayBig
