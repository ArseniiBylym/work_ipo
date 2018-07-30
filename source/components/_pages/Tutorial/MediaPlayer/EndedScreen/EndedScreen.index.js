import React from 'react'
import PropTypes from 'prop-types'
import './EndedScreen.style.styl'
import replayIcon from './images/replay.svg'

EndedScreen.propTypes = {
  // from MediaPlayer.index
  funcPlay: PropTypes.func.isRequired,
  cbReplay: PropTypes.func.isRequired
}

function EndedScreen(props) {
  const handleClick = () => {
    const {funcPlay, cbReplay} = props
    cbReplay()
    funcPlay()
  }

  return (
    <div className="media-player__end">
      <a href="#"
         className="media-player__btn-replay"
         onClick={handleClick}
      >
        <span className="media-player__btn-play-big-icon-box">
          <img src={replayIcon} alt="replay" />
        </span>
      </a>
    </div>
  )

}

export default EndedScreen
