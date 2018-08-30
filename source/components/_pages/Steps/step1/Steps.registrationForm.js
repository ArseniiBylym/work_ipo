import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { dataToSubmit } from '../../../formFields/utils'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'

import Select from '../../../formFields/FormField.select'
import Input from '../../../formFields/FormField.input'
import Checkbox from '../../SignUp/SignUp.checkbox'

class StepsFormRegistration extends Component {

  static propTypes = {
    // from Steps.step1.registration
    dir: PropTypes.string,
    nextStep: PropTypes.func,
    content: PropTypes.object,
    banks: PropTypes.array,
    // from connect
    setStatus: PropTypes.func,
    setTouched: PropTypes.func
  }

  componentDidMount() {
    const {setTouched} = this.props
    setTouched(`step1`)
  }

  onSaveSelected = (value) => {
    return options.filter(item => item.value === value)
  }

  state = {
    accountNumber: {
      value: window.sessionStorage.getItem(`stepRegistration`) ? JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).accountNumber : ``,
      errors: [],
      validationRules: []
    },
    enterPassword: {
      value: window.sessionStorage.getItem(`stepRegistration`) ? JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).enterPassword : ``,
      errors: [],
      validationRules: []
    },
    confirmPassword: {
      value: window.sessionStorage.getItem(`stepRegistration`) ? JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).enterPassword : ``,
      errors: [],
      validationRules: []
    },
    bank: {
      selectedOption: window.sessionStorage.getItem(`stepRegistration`) ? this.onSaveSelected(JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).bank) : ``,
      value: window.sessionStorage.getItem(`stepRegistration`) ? JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).bank : ``,
      errors: [],
      validationRules: []
    },
    agree: {
      value: window.sessionStorage.getItem(`stepRegistration`) ? JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).agree : false,
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
        window.sessionStorage.setItem(`stepRegistration`, JSON.stringify(data))

        if (DEV) {
          // ==================================================
          window.console.table(data)
          // ==================================================
        }


      })
      .then(() => nextStep())
  }

  disabledButton = () => {
    const {setStatus} = this.props
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
    setStatus(`step1`, !(array.includes(false) || errors.includes(true)))
    return (array.includes(false) || errors.includes(true))
  }

  getSelectOptions = () => {
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

  renderPage = () => {
    const {dir, content} = this.props
    const {agree, bank, accountNumber, enterPassword, confirmPassword} = this.state

    if (!content) return null

    return (
      <form className="steps-page__form"
        noValidate
        onSubmit={this.onSubmit}
      >
        <div className="steps-page__field-wrapper">
          <div className="steps-page__control-wrapper">
            <Select placeholder={content[`bank_field`]}
              updateValue={this.onChangeSelect}
              selected={bank.selectedOption}
              value={bank.value}
              options={this.getSelectOptions()}
              labelDone={content[`bank_label.label`]}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="accountNumber"
              {...accountNumber}
              label={content[`bank.account_number_field`]}
              labelDone={content[`bank.account_number_field.label`]}
              validation={[`required`, `accountNumber`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="password"
              name="enterPassword"
              {...enterPassword}
              label={content[`password_field`]}
              labelDone={content[`password_field.label`]}
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
              label={content[`confirm_pass_field`]}
              labelDone={content[`password_field.label`]}
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
              content = {content}
            />
          </div>
        </div>
        <div className="steps-page__button-wrapper steps-page__button-wrapper--center" dir={dir}>
          <button className="steps-page__button button button-main"
            type="submit"
            disabled={this.disabledButton()}
          >
            {content[`next_btn`]}
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

const mapStateToProps = null
const mapDispatchToProps = {setStatus, setTouched}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StepsFormRegistration)
)
