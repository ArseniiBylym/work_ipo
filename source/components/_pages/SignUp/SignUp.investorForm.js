import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {dataToSubmit} from '../../formFields/utils'
import { connect } from 'react-redux';
import multilang from '../../_HOC/lang.hoc'

import Select from '../../formFields/FormField.select'
import Input from '../../formFields/FormField.input'
import Checkbox from './SignUp.checkbox'
import {signUp} from '../../../redux/reducers/pageContent.reducer';
import axios from "axios"
import {BASE_URL} from "../../../utils/routesBack"
import {history} from "../../../history"

class InvestorForm extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    lang: PropTypes.string,
    // from SignUp.index
    contentText: PropTypes.object,
    banks: PropTypes.array
  }

  state = {
    first_name: {
      value: ``,
      errors: [],
      validationRules: []
    },
    last_name: {
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

  getSelectOptions() {
    const {banks} = this.props

    if (!banks) return [{
      value: ``,
      label: ``
    }]

    return banks.map(bank => {
      return {
        value: bank.name,
        label: bank.name
      }
    })
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
    const {lang} = this.props

    dataToSubmit(this.state)
      .then(data => {
        axios({
          method: `post`,
          url: `${BASE_URL}/signupinvestor`,
          config: { headers: {'Content-Type': `multipart/form-data` }},
          headers: {
            'language': lang
          },
          data: data,
        })
          .then(function (response) {
            console.log(response)
            history.replace(`/log-in`)
          })
          .catch(function (error) {
            console.log(error)
          })
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

  signUp = () => {
    this.props.signUp('investor');
  }

  renderPage() {
    const {contentText} = this.props
    const {first_name, last_name, email, accountNumber, phone, enterPassword, confirmPassword, bank, agree} = this.state

    if (!contentText) return null

    return (
      <form className="sign-up__from"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <div className="sign-up__form-main">
          <Input type="text"
            name="first_name"
            {...first_name}
            label={contentText[`investor.first_name`]}
            labelDone={contentText[`investor.first_name.label`]}
            validation={[`required`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
          />
          <Input type="text"
            name="last_name"
            {...last_name}
            label={contentText[`investor.last_name`]}
            labelDone={contentText[`investor.last_name.label`]}
            validation={[`required`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
          />
          <Input type="email"
            name="email"
            {...email}
            label={contentText[`investor.email`]}
            labelDone={contentText[`investor.email.label`]}
            validation={[`required`, `email`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
          />
          <Input type="text"
            name="phone"
            {...phone}
            label={contentText[`investor.phone`]}
            labelDone={contentText[`investor.phone.label`]}
            validation={[`required`, `phone`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
          />
          <Select placeholder={contentText[`investor.bank`]}
            updateValue={this.handleChangeSelect}
            selected={bank.selectedOption}
            value={bank.value}
            options={this.getSelectOptions()}
            labelDone={contentText[`investor.bank.label`]}
          />
          <Input type="text"
            name="accountNumber"
            {...accountNumber}
            label={contentText[`investor.account`]}
            labelDone={contentText[`investor.account.label`]}
            validation={[`required`, `accountNumber`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
          />
          <Input type="password"
            name="enterPassword"
            {...enterPassword}
            label={contentText[`investor.pass`]}
            labelDone={contentText[`investor.pass.label`]}
            validation={[`required`, `minText`, `number`, `lowercase`, `uppercase`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <Input type="password"
            name="confirmPassword"
            {...confirmPassword}
            label={contentText[`investor.confirm_pass`]}
            labelDone={contentText[`investor.confirm_pass.label`]}
            validation={[`required`, `confirmPassword`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            password={enterPassword.value}
          />
          <Checkbox name="agree"
            {...agree}
            changeValue={this.handleChangeValue}
            content = {contentText}
          />
        </div>
        <div className="sign-up__button-wrapper">
          <button type="submit"
            className="sign-up__submit-button button button-main"
            onClick={this.handleSubmit}
            disabled={this.disabledButton()}
          >
           {contentText.sign_up_btn}
          </button>
        </div>
      </form>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderPage()}
      </Fragment>
    )
  }
}

export default connect(
  state => state, {signUp}
)(
  multilang(InvestorForm)
)
