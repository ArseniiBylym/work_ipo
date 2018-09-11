import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'
import { loginSuccess } from "../../../../redux/reducers/loginUser.reducer"
import { dataToSubmit } from "../../../formFields/utils"
import multiLang from '../../../_HOC/lang.hoc'

import Select from '../../../formFields/FormField.select'
import Input from '../../../formFields/FormField.input'
import Checkbox from '../../SignUp/SignUp.checkbox'
import axios from "axios"
import {BASE_URL} from "../../../../utils/routesBack"

class StepsFormRegistration extends Component {

  static propTypes = {
    // from Steps.step1.registration
    dir: PropTypes.string,
    nextStep: PropTypes.func,
    content: PropTypes.object,
    banks: PropTypes.array,
    // from connect
    setStatus: PropTypes.func,
    setTouched: PropTypes.func,
    loginSuccess: PropTypes.func,
    // from HOC lang
    lang: PropTypes.string
  }

  componentDidMount() {
    const {setTouched} = this.props
    setTouched(`step1`)
  }

  onSaveSelected = (value) => {
    const {banks} = this.props

    return banks.filter(item => item.value === value)
  }

  state = {
    account_number: {
      value: window.sessionStorage.getItem(`stepRegistration`) ? JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).accountNumber : ``,
      errors: [],
      validationRules: []
    },
    password: {
      value: window.sessionStorage.getItem(`stepRegistration`) ? JSON.parse(window.sessionStorage.getItem(`stepRegistration`)).enterPassword : ``,
      errors: [],
      validationRules: []
    },
    confPass: {
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
    const {nextStep, lang, loginSuccess} = this.props

    dataToSubmit(this.state)
      .then((data) => {

        window.sessionStorage.setItem(`stepRegistration`, JSON.stringify(data))

        const sendData = {
          first_name: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).first_name : ``,
          last_name: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).last_name : ``,
          email: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).email : ``,
          phone: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).phone : ``,
          account_number: this.state.account_number.value,
          password: this.state.password.value,
          confPass: this.state.confPass.value,
          bank_name: this.state.bank.value,
          agree: this.state.agree.value
        }

        axios({
          url: `${BASE_URL}/signupinvestor`,
          method: `POST`,
          headers: {
            'language': lang
          },
          data: sendData
        })
          .then(response => {
            window.console.log(response)

            axios({
              method: `POST`,
              url: `${BASE_URL}/signin`,
              headers: {
                'language': lang
              },
              data: {
                userEmail: sendData.email,
                userPassword: sendData.password
              },
            })
              .then(response => {
                window.console.log(response)

                loginSuccess(response)
                window.localStorage.setItem(`user-token`, response.data.token)
                window.localStorage.setItem(`user-name`, response.data.user.ceo_name ? response.data.user.ceo_name : `${response.data.user.first_name} ${response.data.user.last_name}`)
                window.localStorage.setItem(`user-type`, response.data.user.ceo_name ? `enterpreneur` : `investor`)
                window.localStorage.setItem(`user-id`, response.data.user.id)

                window.localStorage.setItem(`user-first-name`, response.data.user.first_name)
                window.localStorage.setItem(`user-last-name`, response.data.user.last_name)
                window.localStorage.setItem(`user-email`, response.data.user.email)
                window.localStorage.setItem(`user-phone`, response.data.user.phone)
              })
              .catch(error => window.console.error(error))
          })
          .catch(error => window.console.error(error))


      })
      .then(
        () => nextStep()
      )
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
    const {agree, bank, account_number, password, confPass} = this.state

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
              name="account_number"
              {...account_number}
              label={content[`bank.account_number_field`]}
              labelDone={content[`bank.account_number_field.label`]}
              validation={[`required`, `accountNumber`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="password"
              name="password"
              {...password}
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
              name="confPass"
              {...confPass}
              label={content[`confirm_pass_field`]}
              labelDone={content[`password_field.label`]}
              validation={[`required`, `confirmPassword`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
              password={confPass.value}
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
const mapDispatchToProps = {setStatus, setTouched, loginSuccess}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    multiLang(StepsFormRegistration)
  )
)
