import React from 'react'
import {NavLink} from 'react-router-dom'

function MainNav() {

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/home`}>home</NavLink>
        </li>
      </ul>
    </nav>
  )

}

export default MainNav