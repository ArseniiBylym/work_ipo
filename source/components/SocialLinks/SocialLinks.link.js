import React from 'react'
import PropTypes from 'prop-types'

Link.propTypes = {
  // from SocialLinks.index
  icon: PropTypes.node,
  url: PropTypes.string,
  name: PropTypes.string
}

function Link(props) {

  const {icon, name, url} = props
  return (
    <a href={url}
      className="social-Links__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="social-Links__icon-wrapper">
        <img src={icon} alt={name} />
      </div>
      <div className="social-Links__text">
        {name}
      </div>
    </a>
  )

}

export default Link