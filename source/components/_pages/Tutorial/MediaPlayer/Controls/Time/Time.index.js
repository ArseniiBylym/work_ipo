import React from 'react'
import PropTypes from 'prop-types'
import './Time.style.styl'

Time.propTypes = {
  // from Controls.index
  duration: PropTypes.number.isRequired,
  playedSeconds: PropTypes.number.isRequired
}

function Time(props) {

  const calculateTimeLength = time => {
    const length = {}
    length.sec = Math.floor(time)
    length.min = Math.floor(length.sec / 60)
    length.hour = Math.floor(length.min / 60)

    return length
  }

  const calculateTime = (time) => {
    const hour = time.hour
    const min = (hour > 0) ? time.min - (time.hour * 60) : time.min
    const sec = time.sec - ((hour * 60 + min) * 60)

    return {hour, min, sec}
  }

  const formatTime = num => {
    if (num < 10) {
      return `0${num}`
    }
    return num
  }

  const renderLength = () => {
    const {duration, playedSeconds} = props
    const time = calculateTime(calculateTimeLength(duration))
    const pTime = calculateTime(calculateTimeLength(playedSeconds))
    if (time.hour > 0) return <span>{formatTime(pTime.hour) + ':' + formatTime(pTime.min) + ':' + formatTime(pTime.sec) + '/' + formatTime(time.hour) + ':' + formatTime(time.min) + ':' + formatTime(time.sec)}</span>
    else if (time.min > 0) return <span>{formatTime(time.min) + ':' + formatTime(time.sec)}</span>
    return <span>{formatTime(time.sec)}</span>
  }

  return (
    <div className="media-player__text-box">
      <div className="media-player__text">
        {renderLength()}
      </div>
    </div>
  )

}

export default Time
