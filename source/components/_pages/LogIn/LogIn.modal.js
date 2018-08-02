import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {hideOverlay} from '../../../redux/reducers/overlay.reducer'

LogInModal.propTypes = {
  // from connect
  hideOverlay: PropTypes.func,
  // from LogIn.index
  close: PropTypes.func,
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function LogInModal(props) {

  const closeModal = () => {
    const {close, hideOverlay} = props
    close()
    hideOverlay()
  }

  const {dir} = props
  return (
    <div className="log-in-modal" dir={dir}>
      <div className="log-in-modal__button-wrapper" onClick={closeModal}>
        <a href="#"
          className="log-in-modal__button"
        >
          <span className="log-in-modal__button-text">Close Modal</span>
        </a>
      </div>
      <h1 className="log-in__title">Forgot your password?</h1>
      <div className="log-in__text">We sent an email to email@email.com with a link to reset your password.</div>
      <div className="log-in__text-small">If you don't receive the email within a few minutes. please <a href="#" className="log-in__text-link">try again.</a></div>

      <div className="log-in-modal__button-ok-wrapper" onClick={closeModal}>
        <a href="#"
          className="log-in-modal__button-ok button button-main"
        >
          Ok
        </a>
      </div>
    </div>

  )

}

const mapStateToProps = null
const mapDispatchToProps = {hideOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    multiLang(LogInModal)
  )
)