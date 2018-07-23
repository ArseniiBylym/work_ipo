import React from 'react'
import PropTypes from 'prop-types'
import './BaseLayout.style.styl'

BaseLayout.propTypes = {
  // from App.index
  pageHeader: PropTypes.func.isRequired,
  pageContent: PropTypes.func.isRequired,
  pageFooter: PropTypes.func.isRequired
}

function BaseLayout(props) {

  const {pageHeader, pageContent, pageFooter} = props
  return (
    <div className="page-content">
      <div>
        {pageHeader()}
        {pageContent()}
      </div>
      <div className="page-content__footer">
        {pageFooter()}
      </div>
    </div>
  )

}

export default BaseLayout