import React, { Component } from 'react'
import PropTypes from 'prop-types'

// style
import './password-recovery.styl'

// components
import Input from '../../../formFields/FormField.input'
import ErrorsAlert from '../../../ErrorsAlert/index'

class RecoveryPassword extends Component {

  static  propTypes = {}

  state = {
    password: {
      value: ``,
      errors: [],
      validationRules: []
    },
    confPassword: {
      value: ``,
      errors: [],
      validationRules: []
    },
    errors: []
  }

  changeError = () => {
    this.setState(prevState => ({
      errors: [
        ...prevState.password.errors,
        ...prevState.confPassword.errors,]
    }))
  }

  handlerChangeValue = event => {
    event && event.preventDefault && event.preventDefault()

    const {name, value} = event.target

    this.setState(prevState => {
      return {
        [name]: {
          ...prevState[name],
          value: value
        }
      }
    })
  }

  handlerChangeErrors = (evt, errors) => {
    const {name} = evt.target
    return this.setState({
      [name]: {
        ...this.state[name],
        errors: [...errors]
      }
    })
  }

  closeError = index => {
    const allErrors = this.state.errors
    allErrors.splice(index, 1)

    this.setState({
      errors: [...allErrors]
    })
  }

  render() {
    const {password, confPassword, errors} = this.state

    return (
      <section className = "recovery-password">

        <ErrorsAlert errors={errors} closeAlert = {this.closeError} />

        <div className = "recovery-password__inner-wrapper">
          <form
            className = "recovery-password__form"
            noValidate
          >
            <div className = "recovery-password__field">
              <Input
                type = "password"
                name = "password"
                {...password}
                label = {`Enter your new password`}
                labelDone = {`new password`}
                validation = {[`minText`, `number`, `lowercase`, `uppercase`]}
                changeValue = {this.handlerChangeValue}
                changeErrors = {this.handlerChangeErrors}
                err = {this.changeError}
              />
            </div>
            <div className = "recovery-password__field">
              <Input
                type = "password"
                name = "confPassword"
                {...confPassword}
                label = {`Confirm your new password`}
                labelDone = {`confirm password`}
                validation = {[`confirmPassword`]}
                password = {password.value}
                changeValue = {this.handlerChangeValue}
                changeErrors = {this.handlerChangeErrors}
                err = {this.changeError}
              />
            </div>
          </form>
        </div>
      </section>
    )
  }

}

export default RecoveryPassword