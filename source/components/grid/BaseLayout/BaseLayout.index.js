import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import './BaseLayout.style.styl'

BaseLayout.propTypes = {
  // from App.index
  pageHeader: PropTypes.func.isRequired,
  pageContent: PropTypes.func.isRequired,
  pageFooter: PropTypes.func.isRequired,
  // from connect
  overlay: PropTypes.bool
}

function BaseLayout(props) {

  const setClassName = () => {
    const {overlay} = props

    if (overlay) return `page-content page-overlay`
    return `page-content`
  }

  const {pageHeader, pageContent, pageFooter} = props
  return (
    <div className={setClassName()}>
      <div>
        {pageHeader()}
        <div className="page-content__main">
          {pageContent()}
        </div>
      </div>
      <div className="page-content__footer">
        {pageFooter()}
      </div>
    </div>
  )

}

const mapStateToProps = state => ({overlay: state.overlay.isActive})

export default withRouter(
  connect(mapStateToProps)(BaseLayout)
)
