import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'

import Form from './Steps.step2.form'

Step2.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from Steps.index
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
}

function Step2(props) {

  const {dir, prevStep, nextStep} = props
  return (
    <section className="steps-page__content">
      <header className="steps-page__header" dir={dir}>
        <h1 className="steps-page__title">
          Bank details
        </h1>
        <div className="steps-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </header>
      <div className="steps-page__form-wrapper">
        <Form dir={dir}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>
    </section>
  )

}

export default multiLang(Step2)