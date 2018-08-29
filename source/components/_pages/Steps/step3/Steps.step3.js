import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'
import Form from './Steps.step3.form'
import {dataToSubmit} from '../../../formFields/utils'
import PersonalDetail from './Steps.step3.detail'
import ProjectDetail from './Steps.step3.project'

class Step3 extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    // from Steps.index
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    content: PropTypes.object,
    project: PropTypes.object,
    // from connect
    setStatus: PropTypes.func,
    setTouched: PropTypes.func
  }

  componentDidMount() {
    const {setTouched} = this.props
    setTouched(`step3`)
  }

  state = {
    count: {
      value: window.sessionStorage.getItem(`stepPurchase`) ? JSON.parse(window.sessionStorage.getItem(`stepPurchase`)).count : ``,
      errors: [],
      validationRules: []
    }
  }

  onPlusCount = () => {
    this.setState(prevState => {
      return {
        count: {
          ...prevState.count,
          value: +prevState.count.value + 1 + ``
        }
      }
    })
  }

  onMinusCount = () => {
    this.setState(prevState => {
      if (+prevState.count.value <= 1)  return {
        count: {
          ...prevState.count,
          value: `1`
        }
      }

      return {
        count: {
          ...prevState.count,
          value: +prevState.count.value - 1 + ``
        }
      }
    })
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
        window.sessionStorage.setItem(`stepPurchase`, JSON.stringify(data))

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
    setStatus(`step3`, !(array.includes(false) || errors.includes(true)))
    return (array.includes(false) || errors.includes(true))
  }

  onButtonPrevClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {prevStep} = this.props

    prevStep()
  }

  renderPage = () => {
    const {dir, content, project} = this.props
    const {count} = this.state

    if (!content || !project) return null

    return (
      <section className="steps-page__content">
        <header className="steps-page__header" dir={dir}>
          <h1 className="steps-page__title">
            {content[`purchase.title`]}
          </h1>
          <div className="steps-page__text">
            {content[`purchase.descr`]}
          </div>
        </header>
        <div className="steps-page__form-wrapper">
          <Form dir={dir}
            id={`stepPurchaseFormId`}
            count={count}
            submit={this.onSubmit}
            changeErrors={this.onChangeErrors}
            onCangeValue={this.onChangeValue}
            plus={this.onPlusCount}
            minus={this.onMinusCount}
            content = {content}
          />
          <PersonalDetail dir={dir} content = {content} />
          <ProjectDetail dir={dir}
            content = {content}
            project = {project}
          />
        </div>
        <div className="steps-page__button-wrapper">
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonPrevClick}
            dir={dir}
          >
            {content[`back_btn`]}
          </button>
          <button className="steps-page__button button button-main"
            form={`stepPurchaseFormId`}
            type="submit"
            disabled={this.disabledButton()}
            dir={dir}
          >
            {content[`next_btn`]}
          </button>
        </div>
      </section>
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
  connect(mapStateToProps, mapDispatchToProps)(
    multiLang(Step3)
  )
)