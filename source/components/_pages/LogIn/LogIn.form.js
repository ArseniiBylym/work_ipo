import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {dataToSubmit} from '../../formFields/utils'
import multiLang from '../../_HOC/lang.hoc'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {showOverlay} from '../../../redux/reducers/overlay.reducer'
import './LogIn.style.styl'

import Input from '../../formFields/FormField.input'

class LogInForm extends Component {

  static propTypes = {
    // from LogIn.form
    openModal: PropTypes.func,
    // from HOC Lang.hoc
    dir: PropTypes.string,
    // from connect
    showOverlay: PropTypes.func
  }

  state = {
    userEmail: {
      value: ``,
      errors: [],
      validationRules: []
    },
    userPassword: {
      value: ``,
      errors: [],
      validationRules: []
    }
  }

  handleChangeValue = (evt, file) => {
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
    const array = []
    const errors = []
    const {download} = this.state

    /* eslint-disable */
    for (const key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        errors.push(!!this.state[key].errors.length)

        if (this.state[key].optional === true && this.state[key].value === ``) array.push(true)
        else array.push(!!this.state[key].value)
      }
    }
    /* eslint-enabled */
    return (array.includes(false) || errors.includes(true))
  }

  onClick = () => {
    const {showOverlay, openModal} = this.props
    showOverlay()
    openModal()
  }

  render() {
    const {dir} = this.props
    const {userEmail, userPassword} = this.state
    return (
      <form className="log-in"
        noValidate
        onSubmit={this.handleSubmit}
      >

        <div className="log-in__container">
          <Input type="email"
            name="userEmail"
            {...userEmail}
            label="Enter your Email"
            labelDone="Email"
            validation={[`required`, `email`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
          />
          <Input type="password"
            name="userPassword"
            {...userPassword}
            label="Enter your Password"
            labelDone="Password"
            validation={[`required`, `minText`, `number`, `lowercase`, `uppercase`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <div className="log-in__forgot">
            <a href="#"
              className="log-in__forgot-link"
              dir={dir}
              onClick={this.onClick}
            >
              Forgot your password?
            </a>
          </div>
        </div>


        <div className="sign-up__button-wrapper">
          <button type="submit"
            className="sign-up__submit-button button button-main"
            disabled={this.disabledButton()}
            dir={dir}
          >
            Sign up
          </button>
        </div>

      </form>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {showOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    multiLang(LogInForm)
  )
)