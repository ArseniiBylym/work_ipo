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

  const {children, hideOverlay} = props
  return (
    <div className="modal">
      <div className="modal__button-wrapper">
        <a href="#"
          className="modal__button"
          onClick={hideOverlay}
        >
          <span className="modal__button-text">Delete page</span>
        </a>
        {children}
      </div>
    </div>
  )

}

const mapStateToProps = null
const mapDispatchToProps = {hideOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Modal)
)