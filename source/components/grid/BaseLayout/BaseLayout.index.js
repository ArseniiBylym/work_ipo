import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import './BaseLayout.style.styl'

// components
import PageHeader from '../../PageHeader/PageHeader.index'
import PageFooter from '../../PageFooter/PageFooter.index'

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  // from connect
  overlay: PropTypes.bool
}

function BaseLayout(props) {

  const setClassName = () => {
    const {overlay} = props

    if (overlay) return `page-content page-overlay`
    return `page-content`
  }

  const {children} = props
  return (
    <div className={setClassName()}>

      <div>
        <PageHeader />
        <main className="page-content__main">
          {children}
        </main>
      </div>

      <div className="page-content__footer">
        <PageFooter />
      </div>

    </div>
  )

}

const mapStateToProps = state => ({overlay: state.overlay.isActive})

export default withRouter(connect(mapStateToProps)(BaseLayout))