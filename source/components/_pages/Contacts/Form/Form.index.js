import React, {Component} from 'react'

import Input from '../../../formFields/FormField.input'

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
    formInvalid: {}
  }

  handleChangeValid = (name, bool) => {
    const {formInvalid} = this.state
    this.setState({
      formInvalid: {
        ...formInvalid,
        [name]: bool
      }
    })
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

  render() {
    const {name, email} = this.state
    return (
      <form className="contact-us__from">
        <Input type="text"
          name="name"
          {...name}
          label="Enter your Name"
          labelDone="Name"
          validation={[`required`]}
          changeValue={this.handleChangeValue}
          changeValid={this.handleChangeValid}
          changeErrors={this.handleChangeErrors}
          changeValidationRules={this.handleChangeValidationRules}
        />
        <Input type="text"
          name="email"
          {...email}
          label="Enter your Email"
          labelDone="Email"
          validation={[`required`, `email`]}
          changeValue={this.handleChangeValue}
          changeValid={this.handleChangeValid}
          changeErrors={this.handleChangeErrors}
          changeValidationRules={this.handleChangeValidationRules}
        />
      </form>
    )
  }

}

export default Form