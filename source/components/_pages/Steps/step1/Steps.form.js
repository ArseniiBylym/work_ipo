import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {dataToSubmit} from '../../../formFields/utils'
import Input from '../../../formFields/FormField.input'

class StepsForm extends Component {

  static propTypes = {
    // from Steps.step1
    dir: PropTypes.string,
    // from Steps.index
    checkedDetail: PropTypes.func
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
    }
  }

  onButtonNextClick = event => {
    event && event.preventDefault && event.preventDefault()

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

  onSubmit = event => {
    event && event.preventDefault && event.preventDefault()
    const {checkedDetail} = this.props

    dataToSubmit(this.state)
      .then(data => {
        window.sessionStorage.setItem(`stepCheck`, JSON.stringify(data))

        if (DEV) {
          // ==================================================
          window.console.table(data)
          // ==================================================
        }

      })
      .then(() => checkedDetail())
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
    const {firstName, lastName, email, phone} = this.state
    return (
      <form className="steps-page__form"
        noValidate
        onSubmit={this.onSubmit}
      >
        <div className="steps-page__field-wrapper">
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="firstName"
              {...firstName}
              label="Enter your First Name"
              labelDone="First Name"
              validation={[`required`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="lastName"
              {...lastName}
              label="Enter your Last Name"
              labelDone="Last Name"
              validation={[`required`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="email"
              name="email"
              {...email}
              label="Enter your Email"
              labelDone="Email"
              validation={[`required`, `email`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="phone"
              {...phone}
              label="Enter your Phone"
              labelDone="Phone"
              validation={[`required`, `phone`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
        </div>
        <div className="steps-page__button-wrapper steps-page__button-wrapper--center">
          <button className="steps-page__button button button-main"
            type="submit"
            disabled={this.disabledButton()}
          >
            Next
          </button>
        </div>
      </form>
    )
  }

}

export default StepsForm