import React, {Component} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'
import Form from './Steps.formLogin'

class Step1LogIn extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    // from Steps.index
    nextStep: PropTypes.func,
    closeModal: PropTypes.func,
    openModal: PropTypes.func,
    isModalOpen: PropTypes.bool
  }

  render () {
    const {dir, nextStep, openModal, closeModal, isModalOpen} = this.props

    return (
      <section className="steps-page__content">
        <header className="steps-page__header" dir={dir}>
          <h1 className="steps-page__title">
            Log In
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
            openModal={openModal}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
          />
        </div>
      </section>
    )
  }

}

export default multiLang(Step1LogIn)