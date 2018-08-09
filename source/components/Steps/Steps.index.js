import React, {Children, cloneElement} from 'react'
import PropTypes from 'prop-types'
import './Steps.style.styl'

Steps.propTypes = {
  // from ParentComponent
  activeStepIndex: PropTypes.number,
  children: PropTypes.array.isRequired
}

function Steps(props) {

  const renderChildrenWithStepsApiAsProps = () => {
    const {activeStepIndex, children, lastStepIndex} = props

    return Children.map(children, (child, index) => {
      return cloneElement(child, {
        index: index,
        isActive: activeStepIndex === index,
        isPassed: activeStepIndex > index,
        lastStepIndex: lastStepIndex
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