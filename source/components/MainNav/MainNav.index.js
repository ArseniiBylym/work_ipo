import React from 'react'
import './MainNav.style.styl'

import MainNavLink from './MainNav.item'

function MainNav() {

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

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {renderItems}
      </ul>
    </nav>
  )

}

export default MainNav