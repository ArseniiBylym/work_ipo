import React from 'react'
import PropTypes from 'prop-types'
import './ProgressBarCircle.style.styl'

ProgressBarCircle.propTypes = {
  // from parent component
  funds: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}

function ProgressBarCircle(props) {

  const calculatePercent = () => {
    const {funds, price} = props
    return Math.floor(funds / price * 100)
  }

  const calculateProgress = () => {
    const percent = calculatePercent()
    const step = 282.6 / 100
    return percent * step
  }

  return (
    <div className="progress-bar-circle">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45"
          cx="50%"
          cy="50%"
          fill="none"
          className="progress-bar-circle__first"
          transform="rotate(-90, 50, 50)"
        />
        <circle r="45"
          cx="50%"
          cy="50%"
          fill="none"
          className="progress-bar-circle__second"
          transform="rotate(-90, 50, 50)"
          strokeDasharray={`${calculateProgress()} 282.6`}
        />
      </svg>
      <div className="progress-bar-circle__percent">
        {calculatePercent()}%
      </div>
    </div>
  )

}

export default ProgressBarCircle