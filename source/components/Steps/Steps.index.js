import React, {Children, cloneElement} from 'react'
import PropTypes from 'prop-types'
import './Steps.style.styl'

Steps.propTypes = {
  activeStepIndex: PropTypes.number,
  children: PropTypes.array.isRequired,
  isCheck: PropTypes.bool,
  setActiveStep: PropTypes.func,
}

function Steps(props) {

  const renderChildrenWithStepsApiAsProps = () => {
    const {activeStepIndex, children, isCheck, setActiveStep} = props

    return Children.map(children, (child, index) => {
      return cloneElement(child, {
        index: index,
        activeStepIndex: activeStepIndex,
        isActive: activeStepIndex === index,
        isPassed: activeStepIndex > index,
        lastStepIndex: Children.count(children) - 1,
        isCheck: isCheck,
        setActiveStep: setActiveStep
      })
    })
  }

  const renderActiveStepsContent = () => {
    const {activeStepIndex, children} = props

    if (children[activeStepIndex]) return children[activeStepIndex].props.children
  }

  return (
    <div className="steps">
      <ul className="steps__progress">
        {renderChildrenWithStepsApiAsProps()}
      </ul>
      <div className="steps__content">
        {renderActiveStepsContent()}
      </div>
    </div>
  )

}

export default Steps