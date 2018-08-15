import React, {Component} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import Form from './Steps.step3.form'
import {dataToSubmit} from '../../../formFields/utils'
import PersonalDetail from './Steps.step3.detail'
import ProjectDetail from './Steps.step3.project'

class Step3 extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    // from Steps.index
    nextStep: PropTypes.func,
    prevStep: PropTypes.func
  }

  state = {
    count: {
      value: window.sessionStorage.getItem(`stepPurchase`) ? JSON.parse(window.sessionStorage.getItem(`stepPurchase`)).count : ``,
      errors: [],
      validationRules: []
    }
  }

  onPlusCount = () => {
    this.setState(prevState => {
      return {
        count: {
          ...prevState.count,
          value: +prevState.count.value + 1 + ``
        }
      }
    })
  }

  onMinusCount = () => {
    this.setState(prevState => {
      if (+prevState.count.value <= 1)  return {
        count: {
          ...prevState.count,
          value: `1`
        }
      }

      return {
        count: {
          ...prevState.count,
          value: +prevState.count.value - 1 + ``
        }
      }
    })
  }

  onChangeValue = event => {
    const {name, type, value, checked} = event.target

    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        value: type === `checkbox` ? checked : value
      }
    })
  }

  onChangeErrors = (event, errors) => {
    const {name} = event.target
    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        errors: [...errors]
      }
    })
  }

  onSubmit = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = this.props

    dataToSubmit(this.state)
      .then(data => {
        window.sessionStorage.setItem(`stepPurchase`, JSON.stringify(data))

        if (DEV) {
          // ==================================================
          window.console.table(data)
          // ==================================================
        }


      })
      .then(() => nextStep())
  }

  disabledButton = () => {
    let array = []
    let errors = []

    /* eslint-disable */
    for (const key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        array.push(!!this.state[key].value)
        errors.push(!!this.state[key].errors.length)
      }
    }
    /* eslint-enabled */

    return (array.includes(false) || errors.includes(true))
  }

  onButtonPrevClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {prevStep} = this.props

    prevStep()
  }

  render() {
    const {dir} = this.props
    const {count} = this.state
    return (
      <section className="steps-page__content">
        <header className="steps-page__header" dir={dir}>
          <h1 className="steps-page__title">
            Purchase page
          </h1>
          <div className="steps-page__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat.
          </div>
        </header>
        <div className="steps-page__form-wrapper">
          <Form dir={dir}
            id={`stepPurchaseFormId`}
            count={count}
            submit={this.onSubmit}
            changeErrors={this.onChangeErrors}
            onCangeValue={this.onChangeValue}
            plus={this.onPlusCount}
            minus={this.onMinusCount}
          />
          <PersonalDetail dir={dir}/>
          <ProjectDetail dir={dir}/>
        </div>
        <div className="steps-page__button-wrapper">
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonPrevClick}
            dir={dir}
          >
            Back
          </button>
          <button className="steps-page__button button button-main"
            form={`stepPurchaseFormId`}
            type="submit"
            disabled={this.disabledButton()}
            dir={dir}
          >
            Next
          </button>
        </div>
      </section>
    )
  }

}

export default multiLang(Step3)