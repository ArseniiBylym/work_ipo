import React from 'react'
import PropTypes from 'prop-types'
import './Timeline.style.styl'

Timeline.propTypes = {
  // from Controls.index
  duration: PropTypes.number.isRequired,
  playedSeconds: PropTypes.number.isRequired,
  onSeekMouseDown: PropTypes.func.isRequired,
  onSeekChange: PropTypes.func.isRequired,
  onSeekMouseUp: PropTypes.func.isRequired,
  seeking: PropTypes.bool.isRequired
}

function Timeline(props) {

  const calculateWidth = () => {
    const {duration, playedSeconds} = props
    return playedSeconds / duration * 100
  }

  let seek = undefined
  const setSeekRef = node => seek = node

  const calculateSeek = event => {
    const cords = seek.getBoundingClientRect()
    const clickCord = event.clientX - cords.left
    return clickCord / cords.width
  }

  const handleSeekMouseDown = event => {
    event && event.preventDefault && event.preventDefault()
    const {onSeekMouseDown} = props
    onSeekMouseDown()
    const percent = calculateSeek(event) * 100
    timeline.style.width = `${percent}%`
  }

  const handleSeekMouseUp = event => {
    event && event.preventDefault && event.preventDefault()
    const {onSeekMouseUp} = props
    onSeekMouseUp(calculateSeek(event))
  }

  const handleSeekMouseMove = event => {
    event && event.preventDefault && event.preventDefault()
    const {seeking} = props
    if (!seeking) return
    const percent = calculateSeek(event) * 100
    timeline.style.width = `${percent}%`
  }

  let timeline = undefined
  const setTimeLineRef = node => timeline = node

  return (
    <div className="media-player__timeline-box"
         onClick={calculateSeek}
         ref={setSeekRef}
         onMouseDown={handleSeekMouseDown}
         onMouseUp={handleSeekMouseUp}
         onMouseMove={handleSeekMouseMove}
    >
      <div className="media-player__timeline"
           style={{width: `${calculateWidth()}%`}}
           ref={setTimeLineRef}
      />
    </div>
  )

}

export default Timeline
