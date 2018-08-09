import React from 'react'
import PropTypes from 'prop-types'

StepsItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  isPassed: PropTypes.bool
}

function StepsItem(props) {

  const setClassName = () => {
    const {isActive, isPassed, index, lastStepIndex} = props

    if (isActive && index === lastStepIndex) return `step__item step__item--passed`
    if (isActive) return `step__item`
    if (isPassed) return `step__item step__item--passed`
    return `step__item step__item--default`
  }

  const {title, index} = props
  return (
    <li className={setClassName()}>
      <div className="steps__title">{title}</div>
      <div className="steps__number-wrapper">
        <div className="steps__number">{index + 1} step</div>
      </div>
    </li>
  )

}

export default StepsItem