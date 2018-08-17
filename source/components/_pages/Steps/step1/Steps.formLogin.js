import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { dataToSubmit } from '../../../formFields/utils'
import Input from '../../../formFields/FormField.input'
import { showOverlay } from '../../../../redux/reducers/overlay.reducer'
import { setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'
import Modal from '../../LogIn/LogIn.modal'

class StepsForm extends Component {

  static propTypes = {
    // from Steps.step1
    dir: PropTypes.string,
    // from Steps.index
    nextStep: PropTypes.func,
    closeModal: PropTypes.func,
    openModal: PropTypes.func,
    isModalOpen: PropTypes.bool,
    // from connect
    setStatus: PropTypes.func,
    setTouched: PropTypes.func
  }

  state = {
    email: {
      value: window.sessionStorage.getItem(`stepLogin`) ? JSON.parse(window.sessionStorage.getItem(`stepLogin`)).email : ``,
      errors: [],
      validationRules: []
    },
    password: {
      value: window.sessionStorage.getItem(`stepLogin`) ? JSON.parse(window.sessionStorage.getItem(`stepLogin`)).password : ``,
      errors: [],
      validationRules: []
    }
  }

  componentDidMount() {
    const {setTouched} = this.props
    setTouched(`step1`)
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

  onSubmit = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = this.props

    dataToSubmit(this.state)
      .then(data => {
        window.sessionStorage.setItem(`stepLogin`, JSON.stringify(data))

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

  onClick = () => {
    const {showOverlay, openModal} = this.props
    showOverlay()
    openModal()
  }

  render() {
    const {email, password} = this.state
    const {dir, isModalOpen, closeModal} = this.props
    return (
      <form className="steps-page__form"
        noValidate
        onSubmit={this.onSubmit}
      >
        <div className="steps-page__field-wrapper steps-page__field-wrapper--center">
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
            <Input type="password"
              name="password"
              {...password}
              label="Enter your Password"
              labelDone="Password"
              validation={[`required`, `minText`, `number`, `lowercase`, `uppercase`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
              changeValidationRules={this.onChangeValidationRules}
            />
          </div>
          {isModalOpen && <Modal close={closeModal} />}
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

const mapStateToProps = null
const mapDispatchToProps = {showOverlay, setStatus, setTouched}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StepsForm)
)