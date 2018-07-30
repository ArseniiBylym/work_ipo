import React from 'react'
import PropTypes from 'prop-types'
import './Volume.style.styl'
import volumeIcon from './images/volume.svg'

Volume.propTypes = {
  // from Controls.index
  volume: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
  setVolume: PropTypes.func.isRequired,
  onVolumeMouseDown: PropTypes.func.isRequired,
  onVolumeMouseUp: PropTypes.func.isRequired
}

function Volume(props) {

  let volumeLineBox = undefined
  const setVolumeLineBoxRef = node => volumeLineBox = node

  let line = undefined
  const setLineRef = node => line = node

  const calculateVolume = event => {
    const cords = volumeLineBox.getBoundingClientRect()
    const clickCord = event.clientX - cords.left
    return clickCord / cords.width
  }

  const handleVolumeMouseDown = event => {
    event && event.preventDefault && event.preventDefault()
    const {onVolumeMouseDown} = props
    onVolumeMouseDown()
    const percent = calculateVolume(event) * 100
    line.style.width = `${percent}%`
  }

  const handleVolumeMouseUp = event => {
    event && event.preventDefault && event.preventDefault()
    const {onVolumeMouseUp, setVolume} = props
    onVolumeMouseUp()
    setVolume(calculateVolume(event))
  }

  const handleVolumeMouseMove = event => {
    event && event.preventDefault && event.preventDefault()
    const {flag} = props
    if (!flag) return
    const percent = calculateVolume(event) * 100
    line.style.width = `${percent}%`
  }

  const {volume} = props
  return (
    <div className="media-player__volume">
      <div className="media-player__btn">
        <div className="media-player__btn-icon-box">
          <img src={volumeIcon} alt="volume" />
        </div>
      </div>
      <div className="media-player__volume-line-centered">
        <div className="media-player__volume-line-box"
             ref={setVolumeLineBoxRef}
             onClick={calculateVolume}
             onMouseDown={handleVolumeMouseDown}
             onMouseUp={handleVolumeMouseUp}
             onMouseMove={handleVolumeMouseMove}
        >
          <div className="media-player__volume-line"
               style={{width: `${volume * 100}%`}}
               ref={setLineRef}
          />
        </div>
      </div>
    </div>
  )

}

export default Volume
