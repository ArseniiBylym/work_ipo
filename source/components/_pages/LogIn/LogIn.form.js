import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { dataToSubmit } from '../../formFields/utils'
import lang from '../../_HOC/lang.hoc'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { showOverlay } from '../../../redux/reducers/overlay.reducer'
import './LogIn.style.styl'

import Input from '../../formFields/FormField.input'

class LogInForm extends Component {

  static propTypes = {
    contentText: PropTypes.object,
    // from LogIn.form
    openModal: PropTypes.func,
    // // from lang.hoc
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

  renderPage() {
    const {dir, lang, contentText} = this.props
    const {userEmail, userPassword} = this.state

    if (!contentText) return null
    return (
      <form className="log-in"
        noValidate
        onSubmit={this.handleSubmit}
      >

        <div className="log-in__container">
          <Input type="email"
            name="userEmail"
            {...userEmail}
            label={contentText[`log_in.email_field`]}
            labelDone={contentText[`log_in.email_field.label`]}
            validation={[`required`, `email`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
          />
          <Input type="password"
            name="userPassword"
            {...userPassword}
            label={contentText[`log_in.pass_field`]}
            labelDone={contentText[`log_in.pass_field.label`]}
            validation={[`required`, `minText`, `number`, `lowercase`, `uppercase`]}
            changeValue={this.handleChangeValue}
            changeErrors={this.handleChangeErrors}
            changeValidationRules={this.handleChangeValidationRules}
          />
          <div className="log-in__forgot" dir={dir}>
            <a href="#"
              className="log-in__forgot-link"
              dir={dir}
              onClick={this.onClick}
            >
              {contentText[`log_in.forgot_link`]}
            </a>
          </div>
        </div>


        <div className="sign-up__button-wrapper">
          <button type="submit"
            className="sign-up__submit-button button button-main"
            disabled={this.disabledButton()}
            dir={dir}
          >
            Log In
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
const mapDispatchToProps = {showOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    lang(LogInForm)
  )
)