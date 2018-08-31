import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './Steps.step4.signature.style.styl'
import SignatureCanvas from 'react-signature-canvas'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'
import multilang from '../../../_HOC/lang.hoc'
import axios from 'axios'


class Signature extends Component {

  static propTypes = {
    // from Lang.hoc
    lang: PropTypes.string,
    // from Steps.step4
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    content: PropTypes.object,
    // from connect
    setStatus: PropTypes.func,
    setTouched: PropTypes.func
  }

  state = {
    signature: ``
  }

  componentDidMount() {
    const {setTouched} = this.props
    setTouched(`step4`)
  }

  canvas = undefined
  setCanvasRef = node => this.canvas = node

  clearCanvas = () => {
    this.canvas.clear()
    this.setState({
      signature: ``
    })
  }

  getDataToSend = () => {
    return new Promise((resolve, reject) => {
      const data = {
        first_name: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).firstName : ``,
        last_name: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).lastName : ``,
        email: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).email : ``,
        phone: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).phone : ``,
        owner_name: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).ownerName : ``,
        project_name: this.props.match.params.projectName,
        account_number: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).accountNumber : ``,
        signature: this.state.signature,
        unit_count: window.sessionStorage.getItem(`stepPurchase`) ? JSON.parse(window.sessionStorage.getItem(`stepPurchase`)).count : ``,
      }

      resolve(data)
    })
  }

  sendData = () => {
    const {lang, match} = this.props

    this.getDataToSend()
      .then(data => {

        axios({
          method: `post`,
          url: `http://192.168.88.170:3000/1/purchase/${match.params.id}`,
          data: data,
          headers: {
            'language': lang
          },
        })

      })

  }

  onButtonNextClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = this.props

    this.sendData()
    nextStep()
  }

  onEnd = async () => {
    const signature = await this.canvas.toDataURL(`base64string`)
    window.sessionStorage.setItem(`stepSignature`, signature)
    this.setState({
      signature: signature
    })
  }

  onButtonPrevClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {prevStep} = this.props

    prevStep()
  }

  disableButton = () => {
    const {setStatus} = this.props
    const {signature} = this.state
    setStatus(`step4`, !!signature)
    return !signature
  }

  renderPage = () => {
    const {content} = this.props

    if (!content) return null

    return (
      <div className="page-steps__signature-wrapper">
        <div className="page-steps__signature-inner-wrapper">
          <div className="page-steps__signature-text">
            {content[`signin.signature`]}
          </div>
          <button className="page-steps__signature-button button"
            type={`button`}
            onClick={this.clearCanvas}
          >
            {content[`signin.clear`]}
          </button>
        </div>

        <SignatureCanvas ref={this.setCanvasRef}
          canvasProps={{width: 1000, height: 220, className: `page-steps__signature`}}
          minWidth={1}
          maxWidth={1}
          onEnd={this.onEnd}
        />

        <div className="steps-page__button-wrapper">
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonPrevClick}
          >
            {content[`back_btn`]}
          </button>
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonNextClick}
            disabled={this.disableButton()}
          >
            {content[`next_btn`]}
          </button>
        </div>
      </div>
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
    multilang(Signature)
  )
)
