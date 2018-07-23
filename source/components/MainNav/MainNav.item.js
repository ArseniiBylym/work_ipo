import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

NavItem.propTypes = {
  // from MainNav.index
  linkData: PropTypes.object.isRequired,
  blockName: PropTypes.string
}

function NavItem(props) {

  const {linkData, blockName = ``} = props
  return (
    <NavLink to={linkData.to}
      className={`${blockName}__link`}
      activeClassName={`${blockName}__link--active`}
    >
      <span className={`${blockName}__link-text`}>
        {linkData.text}
      </span>
    </NavLink>
  )

}

export default NavItem