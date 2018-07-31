import React, {Component} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'
import {dataToSubmit} from '../../formFields/utils'

import Select from 'react-select'
import Input from '../../formFields/FormField.input'
import Checkbox from './SignUp.checkbox'

const options = [
  {value: `hapoalim`, label: `Bank Hapoalim`},
  {value: `discount`, label: `Bank Discount`},
  {value: `leumi`, label: `Bank Leumi`},
  {value: `mizrahi`, label: `Bank Mizrahi`},
]

class InvestorForm extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string
  }

  state = {
    firstName: {
      value: ``,
      errors: [],
      validationRules: []
    },
    lastName: {
      value: ``,
      errors: [],
      validationRules: []
    },
    email: {
      value: ``,
      errors: [],
      validationRules: []
    },
    phone: {
      value: ``,
      errors: [],
      validationRules: []
    },
    accountNumber: {
      value: ``,
      errors: [],
      validationRules: []
    },
    enterPassword: {
      value: ``,
      errors: [],
      validationRules: []
    },
    confirmPassword: {
      value: ``,
      errors: [],
      validationRules: []
    },
    bank: {
      selectedOption: ``,
      value: ``,
      errors: [],
      validationRules: []
    },
    agree: {
      value: false,
      errors: [],
      validationRules: []
    }
  }

  handleChangeValue = evt => {
    const {name, type, value, checked} = evt.target

    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        value: type === `checkbox` ? checked : value
      }
    })
  }

  handleChangeErrors = (evt, errors) => {
    const {name} = evt.target
    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        errors: [...errors]
      }
    })
  }

  handleChangeValidationRules = (evt, rules) => {
    const {name} = evt.target
    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        validationRules: [...rules]
      }
    })
  }

  handleSubmit = evt => {
    evt && evt.preventDefault && evt.preventDefault()
    dataToSubmit(this.state)
      .then(data => {

        if (DEV) {
          // ==================================================
          window.console.table(data)
          // ==================================================
        }

      })
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

  handleChangeSelect = (selectedOption) => {
    return this.setState({
      bank: {
        // eslint-disable-next-line
        ...this.state.bank,
        value: selectedOption.value,
        selectedOption
      }
    })
  }

  render() {
    const {firstName, lastName, email, accountNumber, phone, enterPassword, confirmPassword, bank, agree} = this.state
    const {dir} = this.props
    return (
      <form className="contact-us__from"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <div className="sign-up__form-main">
          <Input type="text"
            name="firstName"
            {...firstName}
            label="Enter your First Name"
            labelDone="First Name"
            validation={[`required`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <Input type="text"
            name="lastName"
            {...lastName}
            label="Enter your Last Name"
            labelDone="Last Name"
            validation={[`required`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <Input type="email"
            name="email"
            {...email}
            label="Enter your Email"
            labelDone="Email"
            validation={[`required`, `email`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <Input type="text"
            name="phone"
            {...phone}
            label="Enter your Phone"
            labelDone="Phone"
            validation={[`required`, `phone`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <div style={{position: `relative`}}>
            {bank.value && <span className={`form-control__label form-control__label--short form-control__label--short form-control__label-show`}>
              Bank
            </span>}
            <Select isRtl={dir === `rtl`}
              className="select"
              options={options}
              placeholder="Select your Bank"
              value={bank.selectedOption}
              onChange={this.handleChangeSelect}
            />
          </div>
          <Input type="text"
            name="accountNumber"
            {...accountNumber}
            label="Enter your Account Number"
            labelDone="Account Number"
            validation={[`required`, `accountNumber`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <Input type="password"
            name="enterPassword"
            {...enterPassword}
            label="Enter your Password"
            labelDone="Password"
            validation={[`required`, `minText`, `number`, `lowercase`, `uppercase`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <Input type="password"
            name="confirmPassword"
            {...confirmPassword}
            label="Confirm your Password"
            labelDone="Password"
            validation={[`required`, `confirmPassword`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
            password={enterPassword.value}
          />
          <Checkbox name="agree"
            {...agree}
            changeValue={this.handleChangeValue}
          />
        </div>
        <div className="sign-up__button-wrapper">
          <button type="submit"
            className="sign-up__submit-button button button-main"
            disabled={this.disabledButton()}
          >
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

export default multiLang(InvestorForm)