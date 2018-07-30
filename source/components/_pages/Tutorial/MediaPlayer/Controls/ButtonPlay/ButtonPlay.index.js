import React from 'react'
import PropTypes from 'prop-types'
import './ButtonPlay.style.styl'
import playIcon from './images/play.svg'
import pauseIcon from './images/pause.svg'

ButtonPlay.propTypes = {
  // from Controls.index
  playing: PropTypes.bool.isRequired,
  togglePlayPause: PropTypes.func.isRequired
}

function ButtonPlay(props) {

  const setButtonIcon = () => {
    const {playing} = props
    if (!playing) return <img src={playIcon} alt="play" />
    return <img src={pauseIcon} alt="pause" />
  }

  const {togglePlayPause} = props
  return (
    <div className="media-player__btn-box">
      <a href="#" className="media-player__btn media-player__btn-play" onClick={togglePlayPause}>
        <span className="media-player__btn-play-icon-box">
          {setButtonIcon()}
        </span>
      </a>
    </div>
  )

}

export default ButtonPlay
