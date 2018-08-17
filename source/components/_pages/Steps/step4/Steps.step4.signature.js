import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Steps.step4.signature.style.styl'
import SignatureCanvas from 'react-signature-canvas'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'

class Signature extends Component {

  static propTypes = {
    // from Steps.step4
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
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

  onButtonNextClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {nextStep} = this.props

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

  render() {
    return (
      <div className="page-steps__signature-wrapper">
        <div className="page-steps__signature-inner-wrapper">
          <div className="page-steps__signature-text">Enter your Signature</div>
          <button className="page-steps__signature-button button"
            type={`button`}
            onClick={this.clearCanvas}
          >
            Clear All
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
            Back
          </button>
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonNextClick}
            disabled={this.disableButton()}
          >
            Next
          </button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {setStatus, setTouched}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signature)
)
