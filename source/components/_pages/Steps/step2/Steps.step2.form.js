import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {dataToSubmit} from '../../../formFields/utils'

import Input from '../../../formFields/FormField.input'

class Step2Form extends Component {

  static propTypes = {
    // from Steps.step2
    dir: PropTypes.string,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
  }

  state = {
    accountNumber: {
      value: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).accountNumber : ``,
      errors: [],
      validationRules: []
    },
    ownerName: {
      value: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).ownerName : ``,
      errors: [],
      validationRules: []
    }
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

  onChangeValidationRules = (event, rules) => {
    const {name} = event.target
    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        validationRules: [...rules]
      }
    })
  }

  onSubmit = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = this.props

    dataToSubmit(this.state)
      .then(data => {
        window.sessionStorage.setItem(`stepBank`, JSON.stringify(data))

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
    const {accountNumber, ownerName} = this.state
    return (
      <form className="steps-page__form"
        noValidate
        onSubmit={this.onSubmit}
      >
        <div className="steps-page__field-wrapper steps-page__field-wrapper--center">
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="ownerName"
              {...ownerName}
              label="Enter a Bank Account Owner Name"
              labelDone="Name"
              validation={[`required`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="accountNumber"
              {...accountNumber}
              label="Enter your Account Number"
              labelDone="Account Number"
              validation={[`required`, `accountNumber`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
        </div>
        <div className="steps-page__button-wrapper" dir={dir}>
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonPrevClick}
          >
            Prev
          </button>
          <button className="steps-page__button button button-main"
            type="submit"
            disabled={this.disabledButton()}
          >
            Next
          </button>
        </div>
      </form>
    )
  }

}

export default Step2Form