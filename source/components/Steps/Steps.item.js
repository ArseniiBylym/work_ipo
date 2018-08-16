import React, {Component} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../_HOC/lang.hoc'

class StepsItem extends Component {

  static propTypes = {
    // from Steps.index
    title: PropTypes.string,
    index: PropTypes.number,
    isActive: PropTypes.bool,
    isPassed: PropTypes.bool,
    isCheck: PropTypes.bool,
    lastStepIndex: PropTypes.number,
    setActiveStep: PropTypes.func,
    // from HOC Lang.hoc
    dir: PropTypes.string
  }

  setClassName = () => {
    const {isActive, isPassed, index, lastStepIndex, isCheck} = this.props

    if (isActive && index === lastStepIndex) return `step__item step__item--passed`
    if (isActive && !isCheck) return `step__item step__item--default`
    if (isActive) return `step__item`
    if (isPassed) return `step__item step__item--passed`

    return `step__item step__item--default`
  }

  onItemClick = () => {
    const {index, setActiveStep} = this.props

    setActiveStep(index)
  }

  render() {
    const {title, index, dir} = this.props
    return (
      <li className={this.setClassName()}
        dir={dir}
        onClick={this.onItemClick}
      >
        <div className="steps__title">{title}</div>
        <div className="steps__number-wrapper">
          <div className="steps__number">{index + 1} step</div>
        </div>
      </li>
    )
  }


}

export default multiLang(StepsItem)