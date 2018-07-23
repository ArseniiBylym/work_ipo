import React from 'react'
import PropTypes from 'prop-types'
import './Container.style.styl'

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

function Container(props) {

  const {children} = props
  return (
    <div className="container">
      {children}
    </div>
  )

}

export default Container