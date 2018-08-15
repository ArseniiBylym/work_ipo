import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import Form from './Steps.form'

Step1.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from Steps.index
  checkedDetail: PropTypes.func
}

function Step1(props) {

  const {dir, checkedDetail} = props
  return (
    <section className="steps-page__content">
      <header className="steps-page__header" dir={dir}>
        <h1 className="steps-page__title">
          Personal details
        </h1>
        <div className="steps-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </header>
      <div className="steps-page__form-wrapper">
        <Form dir={dir} checkedDetail={checkedDetail} />
      </div>
    </section>
  )

}

export default multiLang(Step1)