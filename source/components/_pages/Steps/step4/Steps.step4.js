import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import Detail from './Steps.step4.detail'
import Signature from './Steps.step4.signature'

Step4.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from Steps.index
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
}

function Step4(props) {

  const {dir, nextStep, prevStep} = props
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
      <Signature nextStep={nextStep} prevStep={prevStep} />

    </section>
  )

}

export default multiLang(Step4)