import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { dataToSubmit } from '../../../formFields/utils'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'
import { history } from "../../../../history"

import Input from '../../../formFields/FormField.input'

class Step2Form extends Component {

  static propTypes = {
    // from Steps.step2
    dir: PropTypes.string,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    content: PropTypes.object,
    // from connect
    setStatus: PropTypes.func,
    setTouched: PropTypes.func
  }

  componentDidMount() {
    const {setTouched} = this.props
    setTouched(`step2`)
  }

  state = {
    accountNumber: {
      value: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).accountNumber : ``,
      errors: [],
      validationRules: []
    },
    ownerName: {
      value: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).ownerName : ``,
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

  onSubmit = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = this.props

    dataToSubmit(this.state)
      .then(data => {
        window.sessionStorage.setItem(`stepBank`, JSON.stringify(data))
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
    setStatus(`step2`, !(array.includes(false) || errors.includes(true)))
    return (array.includes(false) || errors.includes(true))
  }

  onButtonPrevClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {prevStep} = this.props
    const isAuthorized = window.localStorage.getItem(`user-token`)

    if (isAuthorized)  history.goBack()
    else prevStep()
  }

  renderPage = () => {
    const {dir, content} = this.props
    const {accountNumber, ownerName} = this.state

    if (!content) return null

    return (
      <form className="steps-page__form"
        noValidate
        onSubmit={this.onSubmit}
      >
        <div className="steps-page__field-wrapper steps-page__field-wrapper--center">
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="ownerName"
              {...ownerName}
              label={content[`bank.account_owner_field`]}
              labelDone={content[`bank.account_owner_field.label`]}
              validation={[`required`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
          <div className="steps-page__control-wrapper">
            <Input type="text"
              name="accountNumber"
              {...accountNumber}
              label={content[`bank.account_number_field`]}
              labelDone={content[`bank.account_number_field.label`]}
              validation={[`required`, `accountNumber`]}
              changeValue={this.onChangeValue}
              changeErrors={this.onChangeErrors}
            />
          </div>
        </div>
        <div className="steps-page__button-wrapper" dir={dir}>
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonPrevClick}
          >
            {content[`back_btn`]}
          </button>
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
const mapDispatchToProps = {setStatus, setTouched}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Step2Form)
)
