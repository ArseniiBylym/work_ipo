import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {hideOverlay} from '../../redux/reducers/overlay.reducer'
import './Modal.style.styl'

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  // from connect
  hideOverlay: PropTypes.func
}

function Modal(props) {

  const hide = evt => {
    const {hideOverlay} = props
    evt && evt.preventDefault && evt.preventDefault()
    hideOverlay()
  }

  const {children} = props
  return (
    <div className="modal" onClick={hide}>
      <div className="modal__button-wrapper">
        <a href="#"
          className="modal__button"
        >
          <span className="modal__button-text">Delete page</span>
        </a>
      </div>
      {children}
    </div>
  )

}

const mapStateToProps = null
const mapDispatchToProps = {hideOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Modal)
)