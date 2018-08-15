import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import Detail from './Steps.step4.detail'

Step4.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from Steps.index
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
}

function Step4(props) {

  const onButtonNextClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = props

    nextStep()
  }

  const onButtonPrevClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {prevStep} = props

    prevStep()
  }

  const {dir} = props
  return (
    <section className="steps-page__content">
      <header className="steps-page__header" dir={dir}>
        <h1 className="steps-page__title">
          Sign In
        </h1>
        <div className="steps-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </header>
      <Detail />
      <div className="steps-page__button-wrapper">
        <button className="steps-page__button button button-main"
          type="button"
          onClick={onButtonPrevClick}
        >
          Back
        </button>
        <button className="steps-page__button button button-main"
          type="button"
          onClick={onButtonNextClick}
        >
          Next
        </button>
      </div>
    </section>
  )

}

export default multiLang(Step4)