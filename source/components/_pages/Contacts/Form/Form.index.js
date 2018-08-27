import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Form.style.styl'
import {dataToSubmit} from '../../../formFields/utils'

import Input from '../../../formFields/FormField.input'
import Textarea from '../../../formFields/FormField.textarea'

class Form extends Component {

  static propTypes = {
    // from ContactUs
    contentText: PropTypes.object
  }

  state = {
    name: {
      value: ``,
      errors: [],
      validationRules: []
    },
    email: {
      value: ``,
      errors: [],
      validationRules: []
    },
    message: {
      value: ``,
      errors: [],
      validationRules: []
    }
  }

  handleChangeValue = evt => {
    const {name, value} = evt.target
    return this.setState({
      [name]: {
        // eslint-disable-next-line
        ...this.state[name],
        value: value
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

  render() {
    const {name, email, message} = this.state
    const {contentText} = this.props
    return (
      <form className="contact-us__form"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <Input type="text"
          name="name"
          {...name}
          label = {contentText.name_field}
          labelDone = {contentText[`name_field.label`]}
          validation={[`required`]}
          changeValue={this.handleChangeValue}
          changeErrors={this.handleChangeErrors}
        />
        <Input type="email"
          name="email"
          {...email}
          label = {contentText.email_field}
          labelDone = {contentText[`email_field.label`]}
          validation={[`required`, `email`]}
          changeValue={this.handleChangeValue}
          changeErrors={this.handleChangeErrors}
        />
        <Textarea name="message"
          className="contact-us__textarea"
          {...message}
          label = {contentText.message_field}
          labelDone = {contentText[`message_field.label`]}
          validation={[`required`, `text`, `maxText`]}
          changeValue={this.handleChangeValue}
          changeErrors={this.handleChangeErrors}
        />
        <div className="contact-us__form-button-wrapper">
          <button type="submit"
            className="contact-us__submit-button button button-main"
            disabled={this.disabledButton()}
          >
            {contentText.send_btn}
          </button>
        </div>

      </form>
    )
  }

}

export default Form