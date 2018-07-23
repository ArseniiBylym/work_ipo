import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../Lang/Lang.hoc'
import './MainNav.style.styl'

import MainNavLink from './MainNav.item'

MainNav.propTypes = {
  // from HOC multiLang
  dir: PropTypes.string
}

function MainNav(props) {

  const navLinks = [
    {to: `/home`, text: `home`},
    {to: `/tutorial`, text: `how does it work?`},
    {to: `/about`, text: `about us`},
    {to: `/entrepreneur-seeking-funding`, text: `entrepreneur seeking funding`},
    {to: `/contacts`, text: `contact us`},
  ]

  const renderItems = navLinks.map(item => {
    return (
      <li className="main-nav__item" key={item.text}>
        <MainNavLink blockName={`main-nav`} linkData={item} />
      </li>
    )
  })

  const {dir} = props
  return (
    <nav className="main-nav" dir={dir}>
      <ul className="main-nav__list">
        {renderItems}
      </ul>
    </nav>
  )

}

export default multiLang(MainNav)