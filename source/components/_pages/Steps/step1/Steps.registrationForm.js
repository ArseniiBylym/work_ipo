import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {dataToSubmit} from '../../../formFields/utils'

import Select from '../../../formFields/FormField.select'
import Input from '../../../formFields/FormField.input'
import Checkbox from '../../SignUp/SignUp.checkbox'

const options = [
  {value: `hapoalim`, label: `Bank Hapoalim`},
  {value: `discount`, label: `Bank Discount`},
  {value: `leumi`, label: `Bank Leumi`},
  {value: `mizrahi`, label: `Bank Mizrahi`},
]

class StepsFormRegistration extends Component {

  static propTypes = {
    // from Steps.step1.registration
    dir: PropTypes.string,
    nextStep: PropTypes.func
  }

  onSaveSelected = (value) => {
    return options.filter(item => item.value === value)
  }

  state = {
    accountNumber: {
      value: window.localStorage.getItem(`stepRegistration`) ? JSON.parse(window.localStorage.getItem(`stepRegistration`)).accountNumber : ``,
      errors: [],
      validationRules: []
    },
    enterPassword: {
      value: window.localStorage.getItem(`stepRegistration`) ? JSON.parse(window.localStorage.getItem(`stepRegistration`)).enterPassword : ``,
      errors: [],
      validationRules: []
    },
    confirmPassword: {
      value: window.localStorage.getItem(`stepRegistration`) ? JSON.parse(window.localStorage.getItem(`stepRegistration`)).enterPassword : ``,
      errors: [],
      validationRules: []
    },
    bank: {
      selectedOption: window.localStorage.getItem(`stepRegistration`) ? this.onSaveSelected(JSON.parse(window.localStorage.getItem(`stepRegistration`)).bank) : ``,
      value: window.localStorage.getItem(`stepRegistration`) ? JSON.parse(window.localStorage.getItem(`stepRegistration`)).bank : ``,
      errors: [],
      validationRules: []
    },
    agree: {
      value: window.localStorage.getItem(`stepRegistration`) ? JSON.parse(window.localStorage.getItem(`stepRegistration`)).agree : false,
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

  onChangeSelect = (selectedOption) => {
    return this.setState({
      bank: {
        // eslint-disable-next-line
        ...this.state.bank,
        value: selectedOption.value,
        selectedOption
      }
    })
  }

  onSubmit = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = this.props

    dataToSubmit(this.state)
      .then(data => {
        window.localStorage.setItem(`stepRegistration`, JSON.stringify(data))

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

  render() {
    const {dir} = this.props
    const {agree, bank, accountNumber, enterPassword, confirmPassword} = this.state
    return (
      <form className="steps-page__form"
        noValidate
        onSubmit={this.onSubmit}
      >
        <div className="steps-page__field-wrapper">
        <div className="steps-page__control-wrapper">
          <Select placeholder="Select your Bank"
            updateValue={this.onChangeSelect}
            selected={bank.selectedOption}
            value={bank.value}
            options={options}
            labelDone={`Bank`}
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
        <div className="steps-page__control-wrapper">
          <Input type="password"
            name="enterPassword"
            {...enterPassword}
            label="Enter your Password"
            labelDone="Password"
            validation={[`required`, `minText`, `number`, `lowercase`, `uppercase`]}
            changeValue={this.onChangeValue}
            changeErrors={this.onChangeErrors}
            changeValidationRules={this.onChangeValidationRules}
          />
        </div>
        <div className="steps-page__control-wrapper">
          <Input type="password"
            name="confirmPassword"
            {...confirmPassword}
            label="Confirm your Password"
            labelDone="Password"
            validation={[`required`, `confirmPassword`]}
            changeValue={this.onChangeValue}
            changeErrors={this.onChangeErrors}
            password={enterPassword.value}
          />
        </div>
        <div className="steps-page__control-wrapper">
          <Checkbox name="agree"
            {...agree}
            changeValue={this.onChangeValue}
          />
        </div>
        </div>
        <div className="steps-page__button-wrapper steps-page__button-wrapper--center" dir={dir}>
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

export default StepsFormRegistration