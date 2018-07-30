import React from 'react'
import PropTypes from 'prop-types'
import ButtonPlay from './ButtonPlay/ButtonPlay.index'
import ButtonFullScreen from './ButtonFullScreen/ButtonFullScreen.index'
import Time from './Time/Time.index'
import Timeline from './Timeline/Timeline.index'
import Volume from './Volume/Volume.index'
import './Controls.style.styl'

Controls.propTypes = {
  // from MediaPlayer.index
  playing: PropTypes.bool.isRequired,
  togglePlayPause: PropTypes.func.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  playedSeconds: PropTypes.number.isRequired,
  onSeekMouseDown: PropTypes.func.isRequired,
  onSeekChange: PropTypes.func.isRequired,
  onSeekMouseUp: PropTypes.func.isRequired,
  seeking: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
  setVolume: PropTypes.func.isRequired,
  onVolumeMouseDown: PropTypes.func.isRequired,
  onVolumeMouseUp: PropTypes.func.isRequired
}

function Controls(props) {

  const {
    playing, togglePlayPause, toggleFullScreen, duration, playedSeconds, onSeekChange, onSeekMouseDown, onSeekMouseUp,
    seeking, volume, setVolume, onVolumeMouseDown, onVolumeMouseUp, flag
  } = props
  return (
    <div className="media-player__controls">
      <Timeline duration={duration}
                playedSeconds={playedSeconds}
                onSeekChange={onSeekChange}
                onSeekMouseDown={onSeekMouseDown}
                onSeekMouseUp={onSeekMouseUp}
                seeking={seeking}
      />
      <ButtonPlay playing={playing} togglePlayPause={togglePlayPause} />
      <Volume volume={volume}
              flag={flag}
              setVolume={setVolume}
              onVolumeMouseDown={onVolumeMouseDown}
              onVolumeMouseUp={onVolumeMouseUp}
      />
      <Time duration={duration} playedSeconds={playedSeconds} />
      <ButtonFullScreen toggleFullScreen={toggleFullScreen} />
    </div>
  )

}

export default Controls
