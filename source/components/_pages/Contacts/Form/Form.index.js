import React, {Component} from 'react'
import './Form.style.styl'
import {dataToSubmit} from '../../../formFields/utils'

import Input from '../../../formFields/FormField.input'
import Textarea from '../../../formFields/FormField.textarea'

class Form extends Component {

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
    return (
      <form className="contact-us__from"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <Input type="text"
          name="name"
          {...name}
          label="Enter your Name"
          labelDone="Name"
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
        <Textarea name="message"
          className="contact-us__textarea"
          {...message}
          label="Enter your Message"
          labelDone="Message"
          validation={[`required`, `text`, `maxText`]}
          changeValue={this.handleChangeValue}
          changeErrors={this.handleChangeErrors}
        />
        <button type="submit"
          className="contact-us__submit-button button button-main"
          disabled={this.disabledButton()}
        >
          Submit
        </button>
      </form>
    )
  }

}

export default Form