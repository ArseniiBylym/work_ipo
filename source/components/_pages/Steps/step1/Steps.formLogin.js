import React, { Component, Fragment } from 'react'
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
    content: PropTypes.object,
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

  renderPage = () => {
    const {email, password} = this.state
    const {dir, isModalOpen, closeModal, content} = this.props

    if (!content) return null

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
              label={content[`email_field`]}
              labelDone={content[`email_field.labe`]}
              validation={[`required`, `email`]}
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
          {isModalOpen && <Modal close={closeModal} contentText = {content} />}
          <div className="log-in__forgot">
            <a href="#"
              className="log-in__forgot-link"
              dir={dir}
              onClick={this.onClick}
            >
              {content[`log_in.forgot_link`]}
            </a>
          </div>
        </div>
        <div className="steps-page__button-wrapper steps-page__button-wrapper--center">
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
const mapDispatchToProps = {showOverlay, setStatus, setTouched}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StepsForm)
)